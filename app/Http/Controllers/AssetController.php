<?php

namespace App\Http\Controllers;

use App\Models\Asset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class AssetController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->query('search');
        $kategori = $request->query('kategori');
        $status = $request->query('status');

        $query = Asset::where('user_id', Auth::id());

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('nama_barang', 'like', "%{$search}%")
                  ->orWhere('kode_barang', 'like', "%{$search}%")
                  ->orWhere('serial_number', 'like', "%{$search}%");
            });
        }

        if ($kategori) {
            $query->where('kategori', $kategori);
        }

        if ($status) {
            $query->where('status', $status);
        }

        $assets = $query->latest()->paginate(10)->withQueryString();

        return Inertia::render('asset/dataasset', [
            'assets' => $assets,
            'filters' => $request->only(['search', 'kategori', 'status']),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_barang' => ['required', 'string', 'max:255'],
            'kode_barang' => ['required', 'string', 'max:100', 'unique:assets,kode_barang'],
            'kategori' => ['required', 'string', 'max:100'],
            'merk' => ['nullable', 'string', 'max:100'],
            'tipe' => ['nullable', 'string', 'max:100'],
            'serial_number' => ['nullable', 'string', 'max:100'],
            'spesifikasi' => ['nullable', 'string'],
            'tahun_perolehan' => ['nullable', 'integer', 'min:1900', 'max:' . date('Y')],
            'harga_perolehan' => ['nullable', 'numeric', 'min:0'],
            'lokasi' => ['nullable', 'string', 'max:255'],
            'status' => ['required', 'in:aktif,rusak,dijual,diperbaiki'],
            'keterangan' => ['nullable', 'string'],
            'file' => ['nullable', 'file', 'mimes:pdf,doc,docx,xls,xlsx,ppt,pptx,jpg,jpeg,png', 'max:10240'],
        ]);

        $data = $request->all();
        $data['user_id'] = Auth::id();

        if ($request->hasFile('file')) {
            $data['file_path'] = $request->file('file')->store('asset-files', 'public');
        }

        Asset::create($data);

        return back()->with('success', 'Data asset berhasil ditambahkan!');
    }

    public function update(Request $request, Asset $asset)
    {
        if ($asset->user_id !== Auth::id()) {
            abort(403);
        }

        $request->validate([
            'nama_barang' => ['required', 'string', 'max:255'],
            'kode_barang' => ['required', 'string', 'max:100', 'unique:assets,kode_barang,' . $asset->id],
            'kategori' => ['required', 'string', 'max:100'],
            'merk' => ['nullable', 'string', 'max:100'],
            'tipe' => ['nullable', 'string', 'max:100'],
            'serial_number' => ['nullable', 'string', 'max:100'],
            'spesifikasi' => ['nullable', 'string'],
            'tahun_perolehan' => ['nullable', 'integer', 'min:1900', 'max:' . date('Y')],
            'harga_perolehan' => ['nullable', 'numeric', 'min:0'],
            'lokasi' => ['nullable', 'string', 'max:255'],
            'status' => ['required', 'in:aktif,rusak,dijual,diperbaiki'],
            'keterangan' => ['nullable', 'string'],
            'file' => ['nullable', 'file', 'mimes:pdf,doc,docx,xls,xlsx,ppt,pptx,jpg,jpeg,png', 'max:10240'],
        ]);

        $data = $request->all();

        if ($request->hasFile('file')) {
            if ($asset->file_path && Storage::disk('public')->exists($asset->file_path)) {
                Storage::disk('public')->delete($asset->file_path);
            }
            $data['file_path'] = $request->file('file')->store('asset-files', 'public');
        }

        $asset->update($data);

        return back()->with('success', 'Data asset berhasil diperbarui!');
    }

    public function destroy(Asset $asset)
    {
        if ($asset->user_id !== Auth::id()) {
            abort(403);
        }

        if ($asset->file_path && Storage::disk('public')->exists($asset->file_path)) {
            Storage::disk('public')->delete($asset->file_path);
        }

        $asset->delete();

        return back()->with('success', 'Data asset berhasil dihapus!');
    }

    public function laporan(Request $request): Response
    {
        $kategori = $request->query('kategori');
        $status = $request->query('status');

        $query = Asset::where('user_id', Auth::id());

        if ($kategori) {
            $query->where('kategori', $kategori);
        }

        if ($status) {
            $query->where('status', $status);
        }

        $assets = $query->latest()->get();

        return Inertia::render('asset/laporan', [
            'assets' => $assets->map(fn ($a) => [
                'id' => $a->id,
                'kode_barang' => $a->kode_barang,
                'nama_barang' => $a->nama_barang,
                'kategori' => $a->kategori,
                'merk' => $a->merk,
                'tipe' => $a->tipe,
                'serial_number' => $a->serial_number,
                'spesifikasi' => $a->spesifikasi,
                'tahun_perolehan' => $a->tahun_perolehan,
                'harga_perolehan' => $a->harga_perolehan,
                'lokasi' => $a->lokasi,
                'status' => $a->status,
                'keterangan' => $a->keterangan,
            ])->values(),
            'filters' => $request->only(['kategori', 'status']),
        ]);
    }
}
