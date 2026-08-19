<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('assets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('nama_barang');
            $table->string('kode_barang')->unique();
            $table->string('kategori');
            $table->string('merk')->nullable();
            $table->string('tipe')->nullable();
            $table->string('serial_number')->nullable();
            $table->text('spesifikasi')->nullable();
            $table->integer('tahun_perolehan')->nullable();
            $table->decimal('harga_perolehan', 15, 2)->nullable();
            $table->string('lokasi')->nullable();
            $table->string('status')->default('aktif');
            $table->text('keterangan')->nullable();
            $table->string('file_path')->nullable();
            $table->timestamps();

            $table->index('user_id');
            $table->index('kode_barang');
            $table->index('kategori');
            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('assets');
    }
};
