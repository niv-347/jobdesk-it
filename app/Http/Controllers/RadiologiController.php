<?php

namespace App\Http\Controllers;

use App\Models\Radiologi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class RadiologiController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->query('search');
        $jenis = $request->query('jenis_pemeriksaan');

        $query = Radiologi::where('user_id', Auth::id());

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('nama_pasien', 'like', "%{$search}%")
                  ->orWhere('no_rm', 'like', "%{$search}%")
                  ->orWhere('hasil_ekpertise', 'like', "%{$search}%");
            });
        }

        if ($jenis) {
            $query->where('jenis_pemeriksaan', $jenis);
        }

        $radiologis = $query->latest()->paginate(10)->withQueryString();

        return Inertia::render('radiologi/ekpertise', [
            'radiologis' => $radiologis,
            'filters' => $request->only(['search', 'jenis_pemeriksaan']),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_pasien' => ['required', 'string', 'max:255'],
            'no_rm' => ['required', 'string', 'max:100'],
            'tgl_lahir' => ['required', 'date'],
            'tgl_pemeriksaan' => ['required', 'date'],
            'jenis_pemeriksaan' => ['required', 'string', 'max:255'],
            'hasil_ekpertise' => ['nullable', 'string'],
            'file_hasil' => ['nullable', 'file', 'mimes:pdf,doc,docx', 'max:10240'],
            'foto_rontgen' => ['nullable', 'file', 'mimes:jpg,jpeg,png', 'max:10240'],
            'keterangan' => ['nullable', 'string'],
        ]);

        $data = [
            'user_id' => Auth::id(),
            'nama_pasien' => $request->nama_pasien,
            'no_rm' => $request->no_rm,
            'tgl_lahir' => $request->tgl_lahir,
            'tgl_pemeriksaan' => $request->tgl_pemeriksaan,
            'jenis_pemeriksaan' => $request->jenis_pemeriksaan,
            'hasil_ekpertise' => $request->hasil_ekpertise,
            'keterangan' => $request->keterangan,
        ];

        if ($request->hasFile('file_hasil')) {
            $data['file_path'] = $request->file('file_hasil')->store('radiologi/hasil', 'public');
        }

        if ($request->hasFile('foto_rontgen')) {
            $data['foto_rontgen_path'] = $request->file('foto_rontgen')->store('radiologi/rontgen', 'public');
        }

        Radiologi::create($data);

        return back()->with('success', 'Data ekspertise radiologi berhasil ditambahkan!');
    }

    public function update(Request $request, Radiologi $radiologi)
    {
        if ($radiologi->user_id !== Auth::id()) {
            abort(403);
        }

        $request->validate([
            'nama_pasien' => ['required', 'string', 'max:255'],
            'no_rm' => ['required', 'string', 'max:100'],
            'tgl_lahir' => ['required', 'date'],
            'tgl_pemeriksaan' => ['required', 'date'],
            'jenis_pemeriksaan' => ['required', 'string', 'max:255'],
            'hasil_ekpertise' => ['nullable', 'string'],
            'file_hasil' => ['nullable', 'file', 'mimes:pdf,doc,docx', 'max:10240'],
            'foto_rontgen' => ['nullable', 'file', 'mimes:jpg,jpeg,png', 'max:10240'],
            'keterangan' => ['nullable', 'string'],
        ]);

        $data = [
            'nama_pasien' => $request->nama_pasien,
            'no_rm' => $request->no_rm,
            'tgl_lahir' => $request->tgl_lahir,
            'tgl_pemeriksaan' => $request->tgl_pemeriksaan,
            'jenis_pemeriksaan' => $request->jenis_pemeriksaan,
            'hasil_ekpertise' => $request->hasil_ekpertise,
            'keterangan' => $request->keterangan,
        ];

        if ($request->hasFile('file_hasil')) {
            if ($radiologi->file_path && Storage::disk('public')->exists($radiologi->file_path)) {
                Storage::disk('public')->delete($radiologi->file_path);
            }
            $data['file_path'] = $request->file('file_hasil')->store('radiologi/hasil', 'public');
        }

        if ($request->hasFile('foto_rontgen')) {
            if ($radiologi->foto_rontgen_path && Storage::disk('public')->exists($radiologi->foto_rontgen_path)) {
                Storage::disk('public')->delete($radiologi->foto_rontgen_path);
            }
            $data['foto_rontgen_path'] = $request->file('foto_rontgen')->store('radiologi/rontgen', 'public');
        }

        $radiologi->update($data);

        return back()->with('success', 'Data ekspertise radiologi berhasil diperbarui!');
    }

    public function destroy(Radiologi $radiologi)
    {
        if ($radiologi->user_id !== Auth::id()) {
            abort(403);
        }

        if ($radiologi->file_path && Storage::disk('public')->exists($radiologi->file_path)) {
            Storage::disk('public')->delete($radiologi->file_path);
        }

        if ($radiologi->foto_rontgen_path && Storage::disk('public')->exists($radiologi->foto_rontgen_path)) {
            Storage::disk('public')->delete($radiologi->foto_rontgen_path);
        }

        $radiologi->delete();

        return back()->with('success', 'Data ekspertise radiologi berhasil dihapus!');
    }
}
