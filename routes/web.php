<?php

use App\Http\Controllers\AssetController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\Konfigurasi\PenggunaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RadiologiController;
use App\Http\Controllers\Sop\SopController;
use App\Http\Controllers\Troubleshoot\TroubleshootController;
use App\Http\Controllers\VisumController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', 'login')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, '__invoke'])->name('dashboard');

    // === ROUTE SOP ===
    Route::get('sop', [SopController::class, 'index'])->name('sop');
    Route::get('sop/buatsop', [SopController::class, 'index'])->name('sop.buatsop'); // Halaman/Form Buat SOP
    Route::post('sop', [SopController::class, 'store'])->name('sop.store');
    Route::get('sop/{sop}/isisop', [SopController::class, 'isiSop'])->name('sop.isi');
    Route::put('sop/{sop}/isisop', [SopController::class, 'storeIsi'])->name('sop.isi.store');
    Route::get('sop/{sop}/cetak', [SopController::class, 'cetakSop'])->name('sop.cetak');
    Route::put('sop/{sop}', [SopController::class, 'update'])->name('sop.update');
    Route::delete('sop/{sop}', [SopController::class, 'destroy'])->name('sop.destroy');
    Route::post('sop/{sop}/approve', [SopController::class, 'approve'])->name('sop.approve');
    Route::post('sop/{sop}/reject', [SopController::class, 'reject'])->name('sop.reject');

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
    Route::post('troubleshoot/{troubleshoot}/timeline', [TroubleshootController::class, 'addTimeline'])->name('troubleshoot.timeline');

    // === ROUTE VISUM ===
    Route::get('visum', [VisumController::class, 'index'])->name('visum.index');
    Route::post('visum', [VisumController::class, 'store'])->name('visum.store');
    Route::put('visum/{visum}', [VisumController::class, 'update'])->name('visum.update');
    Route::delete('visum/{visum}', [VisumController::class, 'destroy'])->name('visum.destroy');
    Route::get('visum/cetak', [VisumController::class, 'cetak'])->name('visum.cetak');

    // === ROUTE KONFIGURASI ===
    Route::inertia('konfigurasi', 'konfigurasi')->name('konfigurasi');

    // Manajemen Pengguna
    Route::get('konfigurasi/pengguna', [PenggunaController::class, 'index'])->name('konfigurasi.pengguna');
    Route::post('konfigurasi/pengguna', [PenggunaController::class, 'store'])->name('konfigurasi.pengguna.store');
    Route::put('konfigurasi/pengguna/{pengguna}', [PenggunaController::class, 'update'])->name('konfigurasi.pengguna.update');
    Route::delete('konfigurasi/pengguna/{pengguna}', [PenggunaController::class, 'destroy'])->name('konfigurasi.pengguna.destroy');

    // Manajemen Role
    Route::get('konfigurasi/role', [PenggunaController::class, 'roleIndex'])->name('konfigurasi.role');
    Route::get('konfigurasi/role/permissions/{user}', [PenggunaController::class, 'getUserPermissions'])->name('konfigurasi.role.permissions');
    Route::post('konfigurasi/role/permissions', [PenggunaController::class, 'saveUserPermissions'])->name('konfigurasi.role.permissions.save');
    Route::post('konfigurasi/role/store-user', [PenggunaController::class, 'storeUserWithRole'])->name('konfigurasi.role.store-user');
    Route::post('konfigurasi/role/store', [PenggunaController::class, 'storeRole'])->name('konfigurasi.role.store');
    Route::get('profile/activity', [ProfileController::class, 'activityLog'])->name('profile.activity');

    Route::get('asset/dataasset', [AssetController::class, 'index'])->name('asset.dataasset');
    Route::post('asset/dataasset', [AssetController::class, 'store'])->name('asset.dataasset.store');
    Route::put('asset/dataasset/{asset}', [AssetController::class, 'update'])->name('asset.dataasset.update');
    Route::delete('asset/dataasset/{asset}', [AssetController::class, 'destroy'])->name('asset.dataasset.destroy');
    Route::get('asset/laporan', [AssetController::class, 'laporan'])->name('asset.laporan');

    Route::get('radiologi/ekpertise', [RadiologiController::class, 'index'])->name('radiologi.ekpertise');
    Route::post('radiologi/ekpertise', [RadiologiController::class, 'store'])->name('radiologi.ekpertise.store');
    Route::put('radiologi/ekpertise/{radiologi}', [RadiologiController::class, 'update'])->name('radiologi.ekpertise.update');
    Route::delete('radiologi/ekpertise/{radiologi}', [RadiologiController::class, 'destroy'])->name('radiologi.ekpertise.destroy');

    Route::get('verifikator/verifsop', [\App\Http\Controllers\VerifikatorController::class, 'verifSop'])->name('verifikator.verifsop');
    Route::post('verifikator/verifsop/{sop}/approve', [\App\Http\Controllers\VerifikatorController::class, 'approve'])->name('verifikator.approve');
    Route::post('verifikator/verifsop/{sop}/reject', [\App\Http\Controllers\VerifikatorController::class, 'reject'])->name('verifikator.reject');
    Route::get('verifikator/prosessop/{sop}', [\App\Http\Controllers\VerifikatorController::class, 'prosesSop'])->name('verifikator.prosessop');

    // Export Routes
    Route::get('export/users', [ExportController::class, 'users'])->name('export.users');
    Route::get('export/sops', [ExportController::class, 'sops'])->name('export.sops');
    Route::get('export/troubleshoots', [ExportController::class, 'troubleshoots'])->name('export.troubleshoots');
});

Route::get('radiologi/share', [\App\Http\Controllers\RadiologiShareController::class, 'index'])->name('radiologi.share');
Route::get('radiologi/verify', [\App\Http\Controllers\RadiologiShareController::class, 'showVerify'])->name('radiologi.verify');
Route::post('radiologi/verify', [\App\Http\Controllers\RadiologiShareController::class, 'verify'])->name('radiologi.verify.submit');
Route::get('radiologi/hasil/{radiologi}/pdf', [\App\Http\Controllers\RadiologiShareController::class, 'downloadPdf'])->name('radiologi.hasil.pdf');
Route::get('radiologi/hasil/{radiologi}/foto', [\App\Http\Controllers\RadiologiShareController::class, 'downloadFoto'])->name('radiologi.hasil.foto');

require __DIR__.'/settings.php';
