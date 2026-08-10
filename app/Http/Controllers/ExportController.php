<?php

namespace App\Http\Controllers;

use App\Models\Sop;
use App\Models\Troubleshoot;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Inertia\Response as InertiaResponse;

class ExportController extends Controller
{
    public function users(Request $request)
    {
        $users = User::select('id', 'name', 'email', 'created_at')->get();

        $csv = "ID,Nama,Email,Tanggal Dibuat\n";
        foreach ($users as $user) {
            $csv .= "{$user->id},{$user->name},{$user->email},{$user->created_at}\n";
        }

        return Response::make($csv, 200, [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="users.csv"',
        ]);
    }

    public function sops(Request $request)
    {
        $sops = Sop::select('id', 'nomor_sop', 'judul', 'kategori', 'created_at')->get();

        $csv = "ID,Nomor SOP,Judul,Kategori,Tanggal Dibuat\n";
        foreach ($sops as $sop) {
            $csv .= "{$sop->id},{$sop->nomor_sop},{$sop->judul},{$sop->kategori},{$sop->created_at}\n";
        }

        return Response::make($csv, 200, [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="sops.csv"',
        ]);
    }

    public function troubleshoots(Request $request)
    {
        $troubleshoots = Troubleshoot::select('id', 'kode_tiketing', 'judul_masalah', 'status', 'tingkat_urgensi', 'created_at')->get();

        $csv = "ID,Kode Tiketing,Judul,Status,Urgensi,Tanggal Dibuat\n";
        foreach ($troubleshoots as $ticket) {
            $csv .= "{$ticket->id},{$ticket->kode_tiketing},{$ticket->judul_masalah},{$ticket->status},{$ticket->tingkat_urgensi},{$ticket->created_at}\n";
        }

        return Response::make($csv, 200, [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="troubleshoots.csv"',
        ]);
    }
}
