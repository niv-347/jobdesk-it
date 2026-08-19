<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('radiologi_shares', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('radiologi_id')->constrained()->cascadeOnDelete();
            $table->string('token')->unique();
            $table->string('nama_pasien');
            $table->date('tgl_lahir');
            $table->date('tgl_pemeriksaan');
            $table->string('jenis_pemeriksaan');
            $table->string('file_path')->nullable();
            $table->string('foto_rontgen_path')->nullable();
            $table->string('qr_path')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('radiologi_shares');
    }
};
