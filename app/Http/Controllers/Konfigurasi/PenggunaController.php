<?php

namespace App\Http\Controllers\Konfigurasi;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use App\Models\UserMenuPermission;
use Illuminate\Http\Request;
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

        $query = User::query()->select('id', 'name', 'email');

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $users = $query->latest()->paginate($perPage)->withQueryString();

        return Inertia::render('konfigurasi/pengguna', [
            'users' => $users,
        ]);
    }

    public function store(Request $request)
    {
        // 1. Validasi Input
        $request->validate([
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', Password::defaults()],
        ]);

        // 2. Simpan Data ke Database
        User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

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
        $roles = Role::all();
        $userRoles = User::with('roles.permissions')->get()->map(fn ($user) => [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'roles' => $user->roles->map(fn ($role) => [
                'id' => $role->id,
                'name' => $role->name,
                'slug' => $role->slug,
            ]),
            'permissions' => $user->roles->flatMap(fn ($role) => $role->permissions->pluck('key'))->unique()->values(),
        ]);

        return Inertia::render('konfigurasi/role', [
            'users' => $users,
            'roles' => $roles,
            'userRoles' => $userRoles,
        ]);
    }

    public function getUserPermissions(int $userId)
    {
        $user = User::findOrFail($userId);
        $permissions = $user->roles()->with('permissions')->get()->flatMap(fn ($role) => $role->permissions->pluck('key', 'id'));

        return response()->json($permissions);
    }

    public function saveUserPermissions(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'role_id' => 'required|exists:roles,id',
        ]);

        $user = User::findOrFail($validated['user_id']);
        $role = Role::findOrFail($validated['role_id']);

        $user->roles()->sync([$role->id]);

        return back()->with('success', 'Role akses berhasil disimpan.');
    }
}
