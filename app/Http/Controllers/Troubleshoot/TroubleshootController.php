<?php

namespace App\Http\Controllers\Troubleshoot;

use App\Http\Controllers\Controller;
use App\Models\Troubleshoot;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TroubleshootController extends Controller
{
    /**
     * Tampilan Tabel List Troubleshoot
     */
    public function index(Request $request)
    {
        $query = Troubleshoot::query();

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('judul_masalah', 'like', "%{$search}%")
                  ->orWhere('kode_tiketing', 'like', "%{$search}%")
                  ->orWhere('kategori_sistem', 'like', "%{$search}%");
            });
        }

        $troubleshoots = $query->latest()->paginate(10)->withQueryString();

        return Inertia::render('troubleshoot/kejadian', [
            'troubleshoots' => $troubleshoots,
            'filters' => $request->only(['search']),
        ]);
    }

    /**
     * Form Tambah Data Baru
     */
    public function create()
    {
        return Inertia::render('troubleshoot/form');
    }

    /**
     * Simpan Data Baru
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'kategori_sistem' => 'required|string',
            'judul_masalah' => 'required|string|max:255',
            'deskripsi_masalah' => 'required|string',
            'gejala' => 'nullable|string',
            'penyebab' => 'nullable|string',
            'solusi_langkah' => 'required|string',
            'unit_pelapor' => 'nullable|string',
            'status' => 'required|in:Pending,Proses,Selesai',
            'tingkat_urgensi' => 'required|in:Rendah,Sedang,Tinggi,Kritis',
            'petugas_it' => 'nullable|string',
        ]);

        Troubleshoot::create($validated);

        return redirect()->route('troubleshoot.index')->with('success', 'Data troubleshoot berhasil ditambahkan.');
    }

    /**
     * Form Edit Data
     */
    public function edit(Troubleshoot $troubleshoot)
    {
        return Inertia::render('troubleshoot/form', [
            'troubleshoot' => $troubleshoot,
        ]);
    }

    /**
     * Update Data
     */
    public function update(Request $request, Troubleshoot $troubleshoot)
    {
        $validated = $request->validate([
            'kategori_sistem' => 'required|string',
            'judul_masalah' => 'required|string|max:255',
            'deskripsi_masalah' => 'required|string',
            'gejala' => 'nullable|string',
            'penyebab' => 'nullable|string',
            'solusi_langkah' => 'required|string',
            'unit_pelapor' => 'nullable|string',
            'status' => 'required|in:Pending,Proses,Selesai',
            'tingkat_urgensi' => 'required|in:Rendah,Sedang,Tinggi,Kritis',
            'petugas_it' => 'nullable|string',
        ]);

        $troubleshoot->update($validated);

        return redirect()->route('troubleshoot.index')->with('success', 'Data troubleshoot berhasil diperbarui.');
    }

    /**
     * Hapus Data
     */
    public function destroy(Troubleshoot $troubleshoot)
    {
        $troubleshoot->delete();

        return redirect()->back()->with('success', 'Data troubleshoot berhasil dihapus.');
    }

    /**
     * Halaman Cetak Laporan
     */
    public function cetak(Troubleshoot $troubleshoot)
    {
        return Inertia::render('Troubleshoot/Cetak', [
            'troubleshoot' => $troubleshoot,
        ]);
    }

    public function addTimeline(Request $request, Troubleshoot $troubleshoot)
    {
        $request->validate([
            'aksi' => 'required|string|max:255',
            'catatan' => 'nullable|string',
        ]);

        $timeline = $troubleshoot->timeline ?? [];
        $timeline[] = [
            'aksi' => $request->aksi,
            'catatan' => $request->catatan,
            'user' => auth()->user()?->name ?? 'System',
            'timestamp' => now()->toDateTimeString(),
        ];

        $troubleshoot->update(['timeline' => $timeline]);

        return back()->with('success', 'Timeline berhasil ditambahkan.');
    }
}
