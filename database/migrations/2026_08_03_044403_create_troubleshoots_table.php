<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('troubleshoots', function (Blueprint $table) {
            $table->id();
            $table->string('kode_tiketing')->unique()->nullable(); // Contoh: TRB-2026-001
            $table->string('kategori_sistem'); // Misal: SIMRS, Network, Hardware, LIS, PACS
            $table->string('judul_masalah');
            $table->text('deskripsi_masalah');
            $table->text('gejala')->nullable();
            $table->text('penyebab')->nullable();
            $table->text('solusi_langkah');
            $table->string('unit_pelapor')->default('Umum');
            $table->enum('status', ['Pending', 'Proses', 'Selesai'])->default('Pending');
            $table->enum('tingkat_urgensi', ['Rendah', 'Sedang', 'Tinggi', 'Kritis'])->default('Sedang');
            $table->string('petugas_it')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('troubleshoots');
    }
};
