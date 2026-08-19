<?php

namespace App\Http\Controllers;

use App\Models\Radiologi;
use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\ErrorCorrectionLevel;
use Endroid\QrCode\RoundBlockSizeMode;
use Endroid\QrCode\Writer\PngWriter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class RadiologiShareController extends Controller
{
    public function index(): Response
    {
        $qrPath = 'radiologi/qr/share.png';
        $qrUrl = url('/radiologi/verify');

        if (!Storage::disk('public')->exists($qrPath)) {
            $builder = new Builder(
                writer: new PngWriter(),
                data: $qrUrl,
                encoding: new Encoding('UTF-8'),
                errorCorrectionLevel: ErrorCorrectionLevel::High,
                size: 300,
                margin: 10,
                roundBlockSizeMode: RoundBlockSizeMode::Margin,
            );

            Storage::disk('public')->put($qrPath, $builder->build()->getString());
        }

        return Inertia::render('radiologi/share', [
            'qrUrl' => '/storage/' . $qrPath,
            'verifyUrl' => $qrUrl,
        ]);
    }

    public function showVerify(): Response
    {
        return Inertia::render('radiologi/verify');
    }

    public function verify(Request $request)
    {
        $request->validate([
            'no_rm' => ['required', 'string'],
            'tgl_lahir' => ['required', 'date'],
        ]);

        $radiologi = Radiologi::where('no_rm', $request->no_rm)
            ->where('tgl_lahir', $request->tgl_lahir)
            ->latest('tgl_pemeriksaan')
            ->first();

        if (!$radiologi) {
            return back()->with('error', 'Data tidak ditemukan. Periksa kembali No RM dan Tanggal Lahir.');
        }

        return Inertia::render('radiologi/hasil', [
            'radiologi' => [
                'id' => $radiologi->id,
                'nama_pasien' => $radiologi->nama_pasien,
                'no_rm' => $radiologi->no_rm,
                'tgl_pemeriksaan' => $radiologi->tgl_pemeriksaan,
                'jenis_pemeriksaan' => $radiologi->jenis_pemeriksaan,
                'hasil_ekpertise' => $radiologi->hasil_ekpertise,
                'file_path' => $radiologi->file_path,
                'foto_rontgen_path' => $radiologi->foto_rontgen_path,
            ],
        ]);
    }

    public function downloadPdf($id)
    {
        $radiologi = Radiologi::findOrFail($id);

        if (!$radiologi->file_path || !Storage::disk('public')->exists($radiologi->file_path)) {
            abort(404, 'File tidak ditemukan');
        }

        return response()->download(
            Storage::disk('public')->path($radiologi->file_path),
            'hasil_ekpertise_' . $radiologi->no_rm . '.pdf'
        );
    }

    public function downloadFoto($id)
    {
        $radiologi = Radiologi::findOrFail($id);

        if (!$radiologi->foto_rontgen_path || !Storage::disk('public')->exists($radiologi->foto_rontgen_path)) {
            abort(404, 'File tidak ditemukan');
        }

        $extension = pathinfo($radiologi->foto_rontgen_path, PATHINFO_EXTENSION);
        return response()->download(
            Storage::disk('public')->path($radiologi->foto_rontgen_path),
            'foto_rontgen_' . $radiologi->no_rm . '.' . $extension
        );
    }
}
