<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pegawai', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('nip', 50)->unique()->nullable();
            $table->string('nik', 50)->unique()->nullable();
            $table->string('tempat_lahir', 100)->nullable();
            $table->date('tanggal_lahir')->nullable();
            $table->enum('jenis_kelamin', ['L', 'P'])->nullable();
            $table->string('agama', 50)->nullable();
            $table->text('alamat')->nullable();
            $table->string('no_telepon', 20)->nullable();
            $table->string('jabatan', 100)->nullable();
            $table->string('unit_kerja', 150)->nullable();
            $table->string('golongan', 50)->nullable();
            $table->string('pangkat', 50)->nullable();
            $table->enum('status', ['aktif', 'nonaktif'])->default('aktif');
            $table->string('foto', 255)->nullable();
            $table->timestamps();

            $table->unique(['user_id'], 'pegawai_user_id_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pegawai');
    }
};
