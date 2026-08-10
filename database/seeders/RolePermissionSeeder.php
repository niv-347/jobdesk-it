<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = [
            ['key' => 'dashboard', 'group' => 'General', 'label' => 'Dashboard'],
            ['key' => 'konfigurasi', 'group' => 'Konfigurasi', 'label' => 'Konfigurasi'],
            ['key' => 'konfigurasi.pengguna', 'group' => 'Konfigurasi', 'label' => 'Manajemen Pengguna'],
            ['key' => 'konfigurasi.role', 'group' => 'Konfigurasi', 'label' => 'Role Akses'],
            ['key' => 'sop', 'group' => 'SOP', 'label' => 'SOP'],
            ['key' => 'sop.buatsop', 'group' => 'SOP', 'label' => 'Buat SOP'],
            ['key' => 'troubleshooting', 'group' => 'Troubleshooting', 'label' => 'Troubleshooting'],
            ['key' => 'troubleshooting.kejadian', 'group' => 'Troubleshooting', 'label' => 'Kejadian'],
            ['key' => 'visum', 'group' => 'Visum', 'label' => 'Visum'],
            ['key' => 'verifikator', 'group' => 'Verifikator', 'label' => 'Verifikator'],
            ['key' => 'verifikator.verifsop', 'group' => 'Verifikator', 'label' => 'Verifikasi SOP'],
        ];

        foreach ($permissions as $perm) {
            Permission::updateOrCreate(['key' => $perm['key']], $perm);
        }

        $adminRole = Role::updateOrCreate(
            ['slug' => 'admin'],
            ['name' => 'Administrator', 'description' => 'Akses penuh ke seluruh sistem']
        );

        $adminRole->permissions()->sync(Permission::pluck('id')->all());

        $user = User::where('email', 'admin@jobdesk.it')->first();
        if ($user) {
            $existing = \DB::table('model_has_roles')->where('model_id', $user->id)->where('model_type', User::class)->exists();
            if (!$existing) {
                \DB::table('model_has_roles')->insert([
                    'role_id' => $adminRole->id,
                    'model_id' => $user->id,
                    'model_type' => User::class,
                ]);
            }
        }
    }
}
