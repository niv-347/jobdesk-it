<?php

namespace App\Http\Middleware;

use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use App\Models\UserMenuPermission;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();

        $menuPermissions = [];
        if ($user) {
            $roleIds = \DB::table('model_has_roles')
                ->where('model_id', $user->id)
                ->where('model_type', User::class)
                ->pluck('role_id');

            $menuPermissions = Permission::whereHas('roles', function ($q) use ($roleIds) {
                $q->whereIn('roles.id', $roleIds);
            })->get()->mapWithKeys(fn ($p) => [$p->key => true])->toArray();
        }

        $toast = null;
        if ($request->session()->has('success')) {
            $toast = ['type' => 'success', 'message' => $request->session()->get('success')];
        } elseif ($request->session()->has('error')) {
            $toast = ['type' => 'error', 'message' => $request->session()->get('error')];
        } elseif ($request->session()->has('warning')) {
            $toast = ['type' => 'warning', 'message' => $request->session()->get('warning')];
        } elseif ($request->session()->has('info')) {
            $toast = ['type' => 'info', 'message' => $request->session()->get('info')];
        }

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'auth' => [
                'user' => $user,
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
            'menuPermissions' => $menuPermissions,
            'flash' => [
                'toast' => $toast,
            ],
        ];
    }
}
