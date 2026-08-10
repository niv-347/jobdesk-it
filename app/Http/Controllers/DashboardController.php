<?php

namespace App\Http\Controllers;

use App\Models\Sop;
use App\Models\Troubleshoot;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(): Response
    {
        $stats = [
            'total_users' => User::count(),
            'total_sops' => Sop::count(),
            'total_troubleshoots' => Troubleshoot::count(),
            'active_tickets' => Troubleshoot::whereIn('status', ['open', 'in_progress'])->count(),
        ];

        $recentSops = Sop::latest()->take(5)->get(['id', 'nomor_sop', 'judul', 'kategori', 'created_at']);

        $recentTickets = Troubleshoot::latest()->take(5)->get(['id', 'kode_tiketing', 'judul_masalah', 'status', 'tingkat_urgensi', 'created_at']);

        $sopByCategory = Sop::select('kategori', \DB::raw('count(*) as total'))
            ->groupBy('kategori')
            ->get()
            ->map(fn ($item) => ['label' => $item->kategori ?? 'Tanpa Kategori', 'value' => (int) $item->total]);

        $ticketByStatus = Troubleshoot::select('status', \DB::raw('count(*) as total'))
            ->groupBy('status')
            ->get()
            ->map(fn ($item) => ['label' => $this->formatStatus($item->status), 'value' => (int) $item->total]);

        return Inertia::render('dashboard', [
            'stats' => $stats,
            'recentSops' => $recentSops,
            'recentTickets' => $recentTickets,
            'sopByCategory' => $sopByCategory,
            'ticketByStatus' => $ticketByStatus,
        ]);
    }

    private function formatStatus(string $status): string
    {
        return match ($status) {
            'open' => 'Open',
            'in_progress' => 'In Progress',
            'resolved' => 'Resolved',
            'closed' => 'Closed',
            default => ucfirst($status),
        };
    }
}
