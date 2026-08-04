<?php

namespace App\Http\Controllers\Konfigurasi;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class PenggunaController extends Controller
{
    public function index(): Response
    {
        $users = User::select('id', 'name', 'email')->latest()->get();

        return Inertia::render('konfigurasi/pengguna', [
            'users' => $users
        ]);
    }

    public function store(Request $request)
    {
        // 1. Validasi Input
        $request->validate([
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', Password::defaults()],
        ]);

        // 2. Simpan Data ke Database
        User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // 3. Kembali ke halaman utama dengan pesan sukses
        return redirect()->back()->with('success', 'Pengguna berhasil ditambahkan!');
    }

    // 1. Method Update Data
    public function update(Request $request, User $pengguna)
    {
        $request->validate([
            'name'  => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,id,' . $pengguna->id],
            'password' => ['nullable', Password::defaults()], // Password opsional saat edit
        ]);

        $userData = [
            'name'  => $request->name,
            'email' => $request->email,
        ];

        // Update password hanya jika diisi
        if ($request->filled('password')) {
            $userData['password'] = Hash::make($request->password);
        }

        $pengguna->update($userData);

        return redirect()->back()->with('success', 'Data pengguna berhasil diperbarui!');
    }

    // 2. Method Hapus Data
    public function destroy(User $pengguna)
    {
        $pengguna->delete();

        return redirect()->back()->with('success', 'Pengguna berhasil dihapus!');
    }
}
