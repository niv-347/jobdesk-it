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
            ['name' => 'dashboard', 'guard_name' => 'web'],
            ['name' => 'konfigurasi', 'guard_name' => 'web'],
            ['name' => 'konfigurasi.pengguna', 'guard_name' => 'web'],
            ['name' => 'konfigurasi.role', 'guard_name' => 'web'],
            ['name' => 'sop', 'guard_name' => 'web'],
            ['name' => 'sop.buatsop', 'guard_name' => 'web'],
            ['name' => 'troubleshooting', 'guard_name' => 'web'],
            ['name' => 'troubleshooting.kejadian', 'guard_name' => 'web'],
            ['name' => 'visum', 'guard_name' => 'web'],
            ['name' => 'visum.formvisum', 'guard_name' => 'web'],
            ['name' => 'asset', 'guard_name' => 'web'],
            ['name' => 'asset.dataasset', 'guard_name' => 'web'],
            ['name' => 'asset.laporan', 'guard_name' => 'web'],
            ['name' => 'radiologi', 'guard_name' => 'web'],
            ['name' => 'radiologi.ekpertise', 'guard_name' => 'web'],
            ['name' => 'radiologi.share', 'guard_name' => 'web'],
            ['name' => 'verifikator', 'guard_name' => 'web'],
            ['name' => 'verifikator.verifsop', 'guard_name' => 'web'],
        ];

        foreach ($permissions as $perm) {
            Permission::updateOrCreate(['name' => $perm['name']], $perm);
        }

        $adminRole = Role::updateOrCreate(
            ['slug' => 'admin'],
            ['name' => 'admin', 'description' => 'Akses penuh ke seluruh sistem', 'guard_name' => 'web']
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
