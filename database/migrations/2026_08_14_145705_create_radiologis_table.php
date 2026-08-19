<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('radiologis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('nama_pasien');
            $table->string('no_rm');
            $table->date('tgl_pemeriksaan');
            $table->string('jenis_pemeriksaan');
            $table->text('hasil_ekpertise')->nullable();
            $table->string('file_path')->nullable();
            $table->string('foto_rontgen_path')->nullable();
            $table->text('keterangan')->nullable();
            $table->timestamps();

            $table->index('user_id');
            $table->index('no_rm');
            $table->index('tgl_pemeriksaan');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('radiologis');
    }
};
