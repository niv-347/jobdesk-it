<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // permissions: Spatie pakai `name` (menu key) + `guard_name`.
        Schema::table('permissions', function (Blueprint $table) {
            $table->string('name')->default('')->after('id');
            $table->string('guard_name')->default('web')->after('name');
        });

        // Salin `key` ke `name` (key menu memang menjadi nama permission).
        foreach (DB::table('permissions')->get() as $permission) {
            if ($permission->name === '' || $permission->name === null) {
                DB::table('permissions')
                    ->where('id', $permission->id)
                    ->update(['name' => $permission->key]);
            }
        }

        Schema::table('permissions', function (Blueprint $table) {
            $table->unique(['name', 'guard_name'], 'permissions_name_guard_name_unique');
            $table->dropUnique('permissions_key_unique');
            $table->dropColumn(['key', 'group', 'label']);
        });

        // roles: Spatie butuh `guard_name`.
        Schema::table('roles', function (Blueprint $table) {
            $table->string('guard_name')->default('web')->after('name');
            $table->unique(['name', 'guard_name'], 'roles_name_guard_name_unique');
        });
        DB::table('roles')
            ->whereNull('guard_name')
            ->orWhere('guard_name', '')
            ->update(['guard_name' => 'web']);

        // model_has_permissions (tabel direct-permissions Spatie). Dibiarkan
        // kosong: override per-user tetap di `user_menu_permissions`.
        if (! Schema::hasTable('model_has_permissions')) {
            Schema::create('model_has_permissions', function (Blueprint $table) {
                $table->unsignedBigInteger('permission_id');
                $table->string('model_type');
                $table->unsignedBigInteger('model_id');
                $table->primary(['permission_id', 'model_id', 'model_type'],
                    'model_has_permissions_permission_model_type_primary');
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('model_has_permissions');

        Schema::table('roles', function (Blueprint $table) {
            $table->dropUnique('roles_name_guard_name_unique');
            $table->dropColumn('guard_name');
        });

        Schema::table('permissions', function (Blueprint $table) {
            $table->dropUnique('permissions_name_guard_name_unique');
            $table->string('key', 255)->nullable()->after('id');
            $table->string('group', 255)->nullable()->after('key');
            $table->string('label', 255)->nullable()->after('group');
        });

        foreach (DB::table('permissions')->get() as $permission) {
            if ($permission->key === null || $permission->key === '') {
                DB::table('permissions')
                    ->where('id', $permission->id)
                    ->update(['key' => $permission->name]);
            }
        }
    }
};
