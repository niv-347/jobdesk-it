<?php

namespace App\Http\Controllers;

use App\Models\Visum;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class VisumController extends Controller
{
    public function index(Request $request): Response
    {
        $user = Auth::user();
        $month = $request->query('month', now()->format('Y-m'));
        $startOfMonth = Carbon::parse($month . '-01')->startOfMonth();
        $endOfMonth = $startOfMonth->copy()->endOfMonth();

        $prevMonth = $startOfMonth->copy()->subMonth()->format('Y-m');
        $nextMonth = $startOfMonth->copy()->addMonth()->format('Y-m');

        $visumsQuery = Visum::where('user_id', $user->id)
            ->whereBetween('tanggal', [$startOfMonth->copy()->subMonth()->startOfMonth()->toDateString(), $nextMonth ? Carbon::parse($nextMonth . '-01')->endOfMonth()->toDateString() : $endOfMonth->toDateString()]);

        $allVisums = $visumsQuery->get()->groupBy(fn ($item) => Carbon::parse($item->tanggal)->format('Y-m-d'));

        $calendar = [];
        for ($date = $startOfMonth->copy(); $date->lte($endOfMonth); $date->addDay()) {
            $dateKey = $date->format('Y-m-d');
            $dayVisums = $allVisums[$dateKey] ?? collect();

            $calendar[] = [
                'date' => $dateKey,
                'day' => $date->day,
                'weekday' => $date->locale('id-ID')->dayName,
                'is_today' => $date->isToday(),
                'is_current_month' => true,
                'visums' => $dayVisums->map(fn ($v) => [
                    'id' => $v->id,
                    'kegiatan' => $v->kegiatan,
                    'keterangan' => $v->keterangan,
                    'file_path' => $v->file_path,
                ])->values(),
            ];
        }

        return Inertia::render('visum/formvisum', [
            'calendar' => $calendar,
            'currentMonth' => $startOfMonth->format('Y-m'),
            'monthName' => $startOfMonth->locale('id-ID')->monthName . ' ' . $startOfMonth->year,
            'user' => [
                'name' => $user->name,
                'jabatan' => $user->jabatan ?? 'Staff',
                'perangkat_daerah' => $user->perangkat_daerah ?? 'RSUD Bedas Kertasari',
            ],
            'prevMonth' => $prevMonth,
            'nextMonth' => $nextMonth,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'tanggal' => ['required', 'date'],
            'kegiatan' => ['required', 'string'],
            'keterangan' => ['nullable', 'string'],
            'file' => ['nullable', 'file', 'mimes:pdf,doc,docx,xls,xlsx,ppt,pptx,jpg,jpeg,png', 'max:10240'],
        ]);

        $data = [
            'user_id' => Auth::id(),
            'tanggal' => $request->tanggal,
            'kegiatan' => $request->kegiatan,
            'keterangan' => $request->keterangan,
        ];

        if ($request->hasFile('file')) {
            $data['file_path'] = $request->file('file')->store('visum-files', 'public');
        }

        Visum::create($data);

        return back()->with('success', 'Kegiatan visum berhasil disimpan!');
    }

    public function update(Request $request, Visum $visum)
    {
        if ($visum->user_id !== Auth::id()) {
            abort(403);
        }

        $request->validate([
            'tanggal' => ['required', 'date'],
            'kegiatan' => ['required', 'string'],
            'keterangan' => ['nullable', 'string'],
            'file' => ['nullable', 'file', 'mimes:pdf,doc,docx,xls,xlsx,ppt,pptx,jpg,jpeg,png', 'max:10240'],
        ]);

        $data = [
            'tanggal' => $request->tanggal,
            'kegiatan' => $request->kegiatan,
            'keterangan' => $request->keterangan,
        ];

        if ($request->hasFile('file')) {
            if ($visum->file_path && Storage::disk('public')->exists($visum->file_path)) {
                Storage::disk('public')->delete($visum->file_path);
            }
            $data['file_path'] = $request->file('file')->store('visum-files', 'public');
        }

        $visum->update($data);

        return back()->with('success', 'Kegiatan visum berhasil diperbarui!');
    }

    public function destroy(Visum $visum)
    {
        if ($visum->user_id !== Auth::id()) {
            abort(403);
        }

        if ($visum->file_path && Storage::disk('public')->exists($visum->file_path)) {
            Storage::disk('public')->delete($visum->file_path);
        }

        $visum->delete();

        return back()->with('success', 'Kegiatan visum berhasil dihapus!');
    }

    public function cetak(Request $request)
    {
        $user = Auth::user();
        $month = $request->query('month', now()->format('Y-m'));
        $startOfMonth = Carbon::parse($month . '-01')->startOfMonth();
        $endOfMonth = $startOfMonth->copy()->endOfMonth();

        $visums = Visum::where('user_id', $user->id)
            ->whereBetween('tanggal', [$startOfMonth->toDateString(), $endOfMonth->toDateString()])
            ->orderBy('tanggal')
            ->get();

        return Inertia::render('visum/cetak', [
            'user' => [
                'name' => $user->name,
                'jabatan' => $user->jabatan ?? 'Staff',
                'perangkat_daerah' => $user->perangkat_daerah ?? 'RSUD Bedas Kertasari',
            ],
            'monthName' => $startOfMonth->locale('id-ID')->monthName . ' ' . $startOfMonth->year,
            'visums' => $visums->map(fn ($v) => [
                'id' => $v->id,
                'tanggal' => Carbon::parse($v->tanggal)->format('d/m/Y'),
                'tanggal_raw' => $v->tanggal,
                'kegiatan' => $v->kegiatan,
                'keterangan' => $v->keterangan,
            ])->values(),
        ]);
    }
}
