<?php

namespace App\Http\Controllers;

use App\Models\Sop;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class VerifikatorController extends Controller
{
    public function verifSop(Request $request): Response
    {
        $search = $request->query('search');
        $status = $request->query('status');

        $query = Sop::query();

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('nomor_sop', 'like', "%{$search}%")
                  ->orWhere('judul', 'like', "%{$search}%");
            });
        }

        if ($status) {
            $query->where('status', $status);
        }

        $sops = $query->latest()->paginate(10)->withQueryString();

        return Inertia::render('verifikator/verifsop', [
            'sops' => $sops,
            'filters' => $request->only(['search', 'status']),
        ]);
    }

    public function approve(Sop $sop)
    {
        $sop->update([
            'status' => 'approved',
            'approved_by' => auth()->id(),
            'approved_at' => now(),
        ]);

        return back()->with('success', 'SOP berhasil disetujui!');
    }

    public function reject(Sop $sop)
    {
        $sop->update([
            'status' => 'rejected',
            'approved_by' => auth()->id(),
            'approved_at' => now(),
        ]);

        return back()->with('success', 'SOP berhasil ditolak!');
    }

    public function prosesSop(Sop $sop): Response
    {
        return Inertia::render('verifikator/prosessop', [
            'sop' => $sop,
        ]);
    }
}
