<?php

namespace App\Http\Controllers\Konfigurasi;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use App\Models\UserMenuPermission;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class PenggunaController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->query('search');
        $perPage = 10;

        $query = User::query()->select('id', 'name', 'email', 'email_verified_at');

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $users = $query->latest()->paginate($perPage)->withQueryString();
        $roles = Role::select('id', 'name', 'slug')->get();

        return Inertia::render('konfigurasi/pengguna', [
            'users' => $users,
            'roles' => $roles,
        ]);
    }

    public function store(Request $request)
    {
        // 1. Validasi Input
        $request->validate([
            'name'      => ['required', 'string', 'max:255'],
            'email'     => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password'  => ['required', Password::defaults()],
            'role_id'   => ['nullable', 'exists:roles,id'],
        ]);

        // 2. Simpan Data ke Database
        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Assign role jika dipilih
        if ($request->filled('role_id')) {
            $user->roles()->sync([$request->role_id]);
        }

        // 3. Kembali ke halaman utama dengan pesan sukses
        return redirect()->back()->with('success', 'Pengguna berhasil ditambahkan!');
    }

    // 1. Method Update Data
    public function update(Request $request, User $pengguna)
    {
        $request->validate([
            'name'  => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,id,' . $pengguna->id],
            'password' => ['nullable', Password::defaults()], // Password opsional saat edit
        ]);

        $userData = [
            'name'  => $request->name,
            'email' => $request->email,
        ];

        // Update password hanya jika diisi
        if ($request->filled('password')) {
            $userData['password'] = Hash::make($request->password);
        }

        $pengguna->update($userData);

        return redirect()->back()->with('success', 'Data pengguna berhasil diperbarui!');
    }

    // 2. Method Hapus Data
    public function destroy(User $pengguna)
    {
        $pengguna->delete();

        return redirect()->back()->with('success', 'Pengguna berhasil dihapus!');
    }

    public function roleIndex(): Response
    {
        $users = User::select('id', 'name', 'email')->latest()->get();
        $roles = Role::with('permissions')->get();
        $userRoles = User::with('roles.permissions')->get()->map(fn ($user) => [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'roles' => $user->roles->map(fn ($role) => [
                'id' => $role->id,
                'name' => $role->name,
                'slug' => $role->slug,
            ]),
            'permissions' => $user->roles->flatMap(fn ($role) => $role->permissions->pluck('name'))->unique()->values(),
        ]);

        return Inertia::render('konfigurasi/role', [
            'users' => $users,
            'roles' => $roles,
            'userRoles' => $userRoles,
        ]);
    }

    public function getUserPermissions(int $userId): JsonResponse
    {
        $user = User::with('roles.permissions')->findOrFail($userId);

        $rolePermissions = $user->roles
            ->flatMap(fn ($role) => $role->permissions->pluck('name'))
            ->unique()
            ->map(fn ($key) => [$key => true])
            ->collapse()
            ->toArray();

        $userPermissions = UserMenuPermission::where('user_id', $user->id)
            ->pluck('allowed', 'menu_key')
            ->toArray();

        $permissions = array_merge(
            $rolePermissions,
            array_map('boolval', $userPermissions),
        );

        return response()->json($permissions);
    }

    public function saveUserPermissions(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'user_id' => ['required', 'exists:users,id'],
            'role_id' => ['required', 'exists:roles,id'],
            'permissions' => ['nullable', 'array'],
            'permissions.*' => ['boolean'],
        ]);

        $user = User::findOrFail((int) $validated['user_id']);
        $role = Role::findOrFail((int) $validated['role_id']);

        $permissions = $validated['permissions'] ?? null;

        DB::transaction(function () use ($user, $role, $permissions) {
            $user->roles()->sync([$role->id]);

            // Ketika `permissions` dikirimkan, ganti seluruh override menu
            // per-user. Jika tidak dikirimkan (misalnya hanya ganti role),
            // override yang sudah ada dipertahankan.
            if (! is_array($permissions)) {
                return;
            }

            DB::table('user_menu_permissions')
                ->where('user_id', $user->id)
                ->delete();

            $now = now();
            $records = [];
            foreach ($permissions as $menuKey => $allowed) {
                $records[] = [
                    'user_id' => $user->id,
                    'menu_key' => $menuKey,
                    'allowed' => $allowed,
                    'created_at' => $now,
                    'updated_at' => $now,
                ];
            }

            if (! empty($records)) {
                DB::table('user_menu_permissions')->insert($records);
            }
        });

        return back()->with('success', 'Role akses berhasil disimpan.');
    }

    public function storeUserWithRole(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', Password::defaults()],
            'role_id'  => ['required', 'exists:roles,id'],
            'permissions' => ['nullable', 'array'],
            'permissions.*' => ['boolean'],
        ]);

        DB::transaction(function () use ($validated) {
            $user = User::create([
                'name'     => $validated['name'],
                'email'    => $validated['email'],
                'password' => Hash::make($validated['password']),
            ]);

            $user->roles()->sync([$validated['role_id']]);

            $permissions = $validated['permissions'] ?? null;
            if (! is_array($permissions)) {
                return;
            }

            DB::table('user_menu_permissions')
                ->where('user_id', $user->id)
                ->delete();

            $now = now();
            $records = [];
            foreach ($permissions as $menuKey => $allowed) {
                $records[] = [
                    'user_id' => $user->id,
                    'menu_key' => $menuKey,
                    'allowed' => $allowed,
                    'created_at' => $now,
                    'updated_at' => $now,
                ];
            }

            if (! empty($records)) {
                DB::table('user_menu_permissions')->insert($records);
            }
        });

        return back()->with('success', 'Pengguna berhasil ditambahkan!');
    }

    public function storeRole(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name'        => ['required', 'string', 'max:255', 'unique:roles,name'],
            'slug'        => ['required', 'string', 'max:255', 'unique:roles,slug', 'alpha_dash'],
            'description' => ['nullable', 'string', 'max:255'],
            'permissions' => ['nullable', 'array'],
            'permissions.*' => ['exists:permissions,name'],
        ]);

        DB::transaction(function () use ($validated) {
            $role = Role::create([
                'name'        => $validated['name'],
                'slug'        => $validated['slug'],
                'description' => $validated['description'],
                'guard_name'  => 'web',
            ]);

            if (!empty($validated['permissions'])) {
                $permissionIds = Permission::whereIn('name', $validated['permissions'])->pluck('id')->toArray();
                $role->permissions()->sync($permissionIds, false);
            }
        });

        return back()->with('success', 'Role baru berhasil ditambahkan!');
    }
}
