<?php

use App\Http\Controllers\Konfigurasi\PenggunaController;
use App\Http\Controllers\Sop\SopController;
use App\Http\Controllers\Troubleshoot\TroubleshootController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'login')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    // === ROUTE SOP ===
    Route::get('sop', [SopController::class, 'index'])->name('sop');
    Route::get('sop/buatsop', [SopController::class, 'index'])->name('sop.buatsop'); // Halaman/Form Buat SOP
    Route::post('sop', [SopController::class, 'store'])->name('sop.store');
    Route::get('sop/{sop}/isisop', [SopController::class, 'isiSop'])->name('sop.isi');
    Route::put('sop/{sop}/isisop', [SopController::class, 'storeIsi'])->name('sop.isi.store');
    Route::get('sop/{sop}/cetak', [SopController::class, 'cetakSop'])->name('sop.cetak');
    Route::put('sop/{sop}', [SopController::class, 'update'])->name('sop.update');
    Route::delete('sop/{sop}', [SopController::class, 'destroy'])->name('sop.destroy');

    // === ROUTE TROUBLESHOOT ===
    // 1. Static Routes (Harus di ATAS route ber-parameter {troubleshoot})
    Route::get('troubleshoot', [TroubleshootController::class, 'index'])->name('troubleshoot.index');
    Route::get('troubleshoot/create', [TroubleshootController::class, 'create'])->name('troubleshoot.create');
    Route::get('troubleshoot/kejadian', [TroubleshootController::class, 'index'])->name('troubleshoot.kejadian');
    Route::post('troubleshoot', [TroubleshootController::class, 'store'])->name('troubleshoot.store');

    // 2. Dynamic Routes dengan ID Parameter
    Route::get('troubleshoot/{troubleshoot}/edit', [TroubleshootController::class, 'edit'])->name('troubleshoot.edit');
    Route::get('troubleshoot/{troubleshoot}/cetak', [TroubleshootController::class, 'cetak'])->name('troubleshoot.cetak');
    Route::put('troubleshoot/{troubleshoot}', [TroubleshootController::class, 'update'])->name('troubleshoot.update');
    Route::delete('troubleshoot/{troubleshoot}', [TroubleshootController::class, 'destroy'])->name('troubleshoot.destroy');

    // === ROUTE KONFIGURASI ===
    Route::inertia('konfigurasi', 'konfigurasi')->name('konfigurasi');

    // Manajemen Pengguna
    Route::get('konfigurasi/pengguna', [PenggunaController::class, 'index'])->name('konfigurasi.pengguna');
    Route::post('konfigurasi/pengguna', [PenggunaController::class, 'store'])->name('konfigurasi.pengguna.store');
    Route::put('konfigurasi/pengguna/{pengguna}', [PenggunaController::class, 'update'])->name('konfigurasi.pengguna.update');
    Route::delete('konfigurasi/pengguna/{pengguna}', [PenggunaController::class, 'destroy'])->name('konfigurasi.pengguna.destroy');

    // Manajemen Role
    Route::inertia('konfigurasi/role', 'konfigurasi/role')->name('konfigurasi.role');
});

require __DIR__.'/settings.php';
