<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('sops', function (Blueprint $table) {
            $table->text('pengertian')->nullable()->after('deskripsi');
            $table->text('tujuan')->nullable()->after('pengertian');
            $table->text('kebijakan')->nullable()->after('tujuan');
            $table->text('prosedur')->nullable()->after('kebijakan');
            $table->text('unit_terkait')->nullable()->after('prosedur');
        });
    }

    public function down(): void
    {
        Schema::table('sops', function (Blueprint $table) {
            $table->dropColumn(['pengertian', 'tujuan', 'kebijakan', 'prosedur', 'unit_terkait']);
        });
    }
};
