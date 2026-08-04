<?php

namespace App\Http\Controllers\Sop;

use App\Http\Controllers\Controller;
use App\Models\Sop;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SopController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Sop::query();

        // Filter berdasarkan kata kunci (Nomor SOP atau Judul)
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('nomor_sop', 'like', "%{$search}%")
                  ->orWhere('judul', 'like', "%{$search}%");
            });
        }

        // Filter berdasarkan Kategori
        if ($request->filled('kategori')) {
            $query->where('kategori', $request->kategori);
        }

        $sops = $query->latest()->get();

        return Inertia::render('sop/buatsop', [
            'sops'    => $sops,
            'filters' => $request->only(['search', 'kategori']), // Kirim state filter ke React
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nomor_sop' => ['required', 'string', 'max:100', 'unique:sops,nomor_sop'],
            'judul'     => ['required', 'string', 'max:255'],
            'kategori'  => ['required', 'string', 'max:100'],
            'deskripsi' => ['nullable', 'string'],
            //'tujuan'    => ['nullable', 'string'],
            //'kebijakan' => ['nullable', 'string'],
            //'prosedur'  => ['nullable', 'string'],
        ]);

        Sop::create($request->all());

        return redirect()->back()->with('success', 'SOP berhasil ditambahkan!');
    }

    public function storeIsi(Request $request, Sop $sop)
{
    // Validasi khusus untuk isi dokumen saja
    $request->validate([
        'pengertian' => ['nullable', 'string'],
        'tujuan'    => ['nullable', 'string'],
        'kebijakan' => ['nullable', 'string'],
        'prosedur'  => ['nullable', 'string'],
        'unit_terkait' => ['nullable', 'string'],
    ]);

    // Update hanya field isi SOP
    $sop->update([
        'pengertian' => $request->pengertian,
        'tujuan'    => $request->tujuan,
        'kebijakan' => $request->kebijakan,
        'prosedur'  => $request->prosedur,
        'unit_terkait' => $request->unit_terkait,
    ]);

    return redirect()->back()->with('success', 'Dokumen SOP berhasil disimpan!');
}

    public function update(Request $request, Sop $sop)
    {
        $request->validate([
            'nomor_sop' => ['required', 'string', 'max:100', 'unique:sops,nomor_sop,' . $sop->id],
            'judul'     => ['required', 'string', 'max:255'],
            'kategori'  => ['required', 'string', 'max:100'],
            'deskripsi' => ['required', 'string'],
            'pengertian' => ['nullable', 'string'],
            'tujuan'    => ['nullable', 'string'],
            'kebijakan' => ['nullable', 'string'],
            'prosedur'  => ['nullable', 'string'],
            'unit_terkait' => ['nullable', 'string'],
        ]);

        $sop->update($request->all());

        return redirect()->back()->with('success', 'SOP berhasil diperbarui!');
    }

    public function destroy(Sop $sop)
    {
        $sop->delete();

        return redirect()->back()->with('success', 'SOP berhasil dihapus!');
    }

    public function isiSop(Sop $sop): Response
    {
    return Inertia::render('sop/isisop', [ // Sesuaikan dengan folder lokasi React Anda
        'sop' => $sop,
    ]);
    }
    public function cetakSop(Sop $sop): Response
    {
    return Inertia::render('sop/cetak', [ // Sesuaikan dengan folder tempat file React cetak disimpan
        'sop' => $sop,
    ]);
    }
}
