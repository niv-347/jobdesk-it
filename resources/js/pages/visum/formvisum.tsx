import { Head, router, useForm } from '@inertiajs/react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, FileText, Loader2, Plus, Trash2, X } from 'lucide-react';
import { useState, useMemo } from 'react';

import visumRoutes from '@/routes/visum';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Visum', href: '/visum' },
];

interface VisumItem {
    id: number;
    tanggal: string;
    kegiatan: string;
    keterangan?: string;
    file_path?: string;
}

interface DayData {
    date: string;
    day: number;
    weekday: string;
    is_today: boolean;
    is_current_month: boolean;
    visums: VisumItem[];
}

interface Props {
    calendar: DayData[];
    currentMonth: string;
    monthName: string;
    prevMonth?: string;
    nextMonth?: string;
}

const WEEKDAY_NAMES = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

export default function FormVisum({ calendar, currentMonth, monthName, prevMonth, nextMonth }: Props) {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingVisum, setEditingVisum] = useState<VisumItem | null>(null);
    const [viewMode, setViewMode] = useState(false);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        tanggal: '',
        kegiatan: '',
        keterangan: '',
        file: null as File | null,
    });

    const openCreateModal = (date: string) => {
        setSelectedDate(date);
        setEditingVisum(null);
        setData({
            tanggal: date,
            kegiatan: '',
            keterangan: '',
            file: null,
        });
        setIsModalOpen(true);
        setViewMode(false);
    };

    const openEditModal = (visum: VisumItem) => {
        setSelectedDate(visum.tanggal);
        setEditingVisum(visum);
        setData({
            tanggal: visum.tanggal,
            kegiatan: visum.kegiatan,
            keterangan: visum.keterangan || '',
            file: null,
        });
        setIsModalOpen(true);
        setViewMode(false);
    };

    const openViewModal = (date: string) => {
        setSelectedDate(date);
        setViewMode(true);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDate(null);
        setEditingVisum(null);
        setViewMode(false);
        reset();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingVisum) {
            put(`/visum/${editingVisum.id}`, {
                onSuccess: () => closeModal(),
            });
        } else {
            post('/visum', {
                onSuccess: () => closeModal(),
            });
        }
    };

    const handleDelete = (id: number) => {
        if (confirm('Hapus kegiatan visum ini?')) {
            router.delete(`/visum/${id}`);
            closeModal();
        }
    };

    const navigateMonth = (direction: number) => {
        const targetMonth = direction === 1 ? nextMonth : prevMonth;

        if (!targetMonth) {
return;
}

        router.get('/visum', { month: targetMonth }, { preserveState: true, replace: true });
    };

    const selectedDayData = useMemo(() => {
        if (!selectedDate) {
            return null;
        }

        return calendar.find((day) => day.date === selectedDate) || null;
    }, [selectedDate, calendar]);

    const calendarDays = useMemo(() => {
        const [year, month] = currentMonth.split('-').map(Number);
        const firstDay = new Date(year, month - 1, 1);
        const lastDay = new Date(year, month, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days: (DayData | null)[] = [];

        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayData = calendar.find((d) => d.date === dateStr);
            days.push(dayData || {
                date: dateStr,
                day,
                weekday: WEEKDAY_NAMES[new Date(year, month - 1, day).getDay()],
                is_today: false,
                is_current_month: true,
                visums: [],
            });
        }

        return days;
    }, [calendar, currentMonth]);

    return (
        <>
            <Head title="Visum" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4 md:p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                            <CalendarIcon className="h-6 w-6 text-indigo-600" />
                            Kalender Visum
                        </h1>
                        <p className="text-sm text-slate-500 mt-1">
                            Catat dan kelola kegiatan visum per hari
                        </p>
                    </div>
                </div>

                {/* Calendar Card */}
                <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    {/* Month Navigation */}
                    <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-700">
                        <button
                            onClick={() => navigateMonth(-1)}
                            disabled={!prevMonth}
                            className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
                        >
                            <ChevronLeft className="h-4 w-4" />
                            Bulan Sebelum
                        </button>
                        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {monthName}
                        </h2>
                        <button
                            onClick={() => navigateMonth(1)}
                            disabled={!nextMonth}
                            className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
                        >
                            Bulan Berikut
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Print Button */}
                    <div className="flex justify-end border-b border-slate-200 p-4 dark:border-slate-700">
                        <a
                            href={visumRoutes.cetak.url({ query: { month: currentMonth } })}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                        >
                            <FileText className="h-4 w-4" />
                            Cetak A4
                        </a>
                    </div>

                    {/* Calendar Grid */}
                    <div className="p-4">
                        {/* Weekday Headers */}
                        <div className="mb-2 grid grid-cols-7 gap-2">
                            {WEEKDAY_NAMES.map((day) => (
                                <div
                                    key={day}
                                    className="text-center text-xs font-semibold text-slate-500 dark:text-slate-400"
                                >
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Days */}
                        <div className="grid grid-cols-7 gap-2">
                            {calendarDays.map((dayData, index) => {
                                if (!dayData) {
                                    return (
                                        <div
                                            key={`empty-${index}`}
                                            className="min-h-25 rounded-lg border border-dashed border-slate-200 dark:border-slate-700"
                                        />
                                    );
                                }

                                const hasVisums = dayData.visums && dayData.visums.length > 0;

                            return (
                                                            <div
                                key={dayData.date}
                                onClick={() => openViewModal(dayData.date)}
                                className={`min-h-25 cursor-pointer rounded-lg border p-2 transition-colors hover:shadow-sm ${
                                    dayData.is_today
                                        ? 'border-indigo-500 bg-indigo-50 hover:border-indigo-300 dark:bg-indigo-900/10'
                                        : hasVisums
                                            ? 'border-green-400 bg-green-100 hover:border-green-500 hover:bg-green-200 dark:border-green-500 dark:bg-green-900/20 dark:hover:border-green-400 dark:hover:bg-green-900/30'
                                            : 'border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-800'
                                } ${!dayData.is_current_month ? 'opacity-40' : ''}`}
                            >
                                <div className="mb-1 flex items-center justify-between">
                                    <span
                                        className={`text-sm font-medium ${
                                            dayData.is_today
                                                ? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white'
                                                : hasVisums
                                                    ? 'text-green-800 dark:text-green-300'
                                                    : 'text-slate-900 dark:text-white'
                                        }`}
                                    >
                                        {dayData.day}
                                    </span>
                                    {hasVisums && (
                                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-200 text-xs font-medium text-green-800 dark:bg-green-800 dark:text-green-200">
                                            {dayData.visums.length}
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    {hasVisums && dayData.visums.slice(0, 2).map((visum) => (
                                        <div
                                            key={visum.id}
                                            className="truncate rounded bg-green-200 px-1.5 py-0.5 text-xs text-green-900 dark:bg-green-700 dark:text-green-100"
                                        >
                                            {visum.kegiatan}
                                        </div>
                                    ))}
                                    {hasVisums && dayData.visums.length > 2 && (
                                        <div className="text-xs text-green-900 dark:text-green-100">
                                            +{dayData.visums.length - 2} lagi
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        openCreateModal(dayData.date);
                                    }}
                                    className="mt-1 flex items-center gap-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 dark:text-white"
                                    style={{ opacity: 0 }}
                                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                                >
                                    <Plus className="h-3 w-3" />
                                    Tambah
                                </button>
                            </div>

                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Create/Edit/View */}
            {isModalOpen && selectedDate && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
                    <div className="w-full max-w-lg overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-800">
                        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 dark:border-slate-700">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                {viewMode ? 'Kegiatan Visum' : editingVisum ? 'Edit Kegiatan Visum' : 'Tambah Kegiatan Visum'}
                            </h3>
                            <button
                                onClick={closeModal}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {viewMode && selectedDayData ? (
                            <div className="p-6">
                                <div className="mb-4 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                    <CalendarIcon className="h-4 w-4" />
                                    {selectedDayData.weekday}, {new Date(selectedDayData.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </div>

                                {selectedDayData.visums.length === 0 ? (
                                    <p className="py-8 text-center text-slate-400">Tidak ada kegiatan di tanggal ini.</p>
                                ) : (
                                    <div className="space-y-3">
                                        {selectedDayData.visums.map((visum) => (
                                            <div
                                                key={visum.id}
                                                className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                                            >
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1">
                                                        <h4 className="font-medium text-slate-900 dark:text-white">{visum.kegiatan}</h4>
                                                        {visum.keterangan && (
                                                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{visum.keterangan}</p>
                                                        )}
                                                        {visum.file_path && (
                                                            <a
                                                                href={`/storage/${visum.file_path}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="mt-2 inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
                                                            >
                                                                <FileText className="h-4 w-4" />
                                                                Download Lampiran
                                                            </a>
                                                        )}
                                                    </div>
                                                    <div className="flex gap-1">
                                                        <button
                                                            onClick={() => openEditModal(visum)}
                                                            className="rounded p-1.5 text-slate-600 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300"
                                                        >
                                                            <Clock className="h-4 w-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(visum.id)}
                                                            className="rounded p-1.5 text-slate-600 hover:bg-slate-100 hover:text-red-600 dark:text-slate-300"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="mt-4 flex justify-end gap-2">
                                    <button
                                        onClick={closeModal}
                                        className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300"
                                    >
                                        Tutup
                                    </button>
                                    <button
                                        onClick={() => {
                                            setViewMode(false);
                                            setEditingVisum(null);
                                            setData({ tanggal: selectedDate, kegiatan: '', keterangan: '', file: null });
                                        }}
                                        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                                    >
                                        <Plus className="inline-block h-4 w-4 mr-1" />
                                        Tambah Kegiatan
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Tanggal</label>
                                    <input
                                        type="date"
                                        value={data.tanggal}
                                        onChange={(e) => setData('tanggal', e.target.value)}
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                                    />
                                    {errors.tanggal && <p className="mt-1 text-xs text-red-500">{errors.tanggal}</p>}
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Kegiatan</label>
                                    <textarea
                                        value={data.kegiatan}
                                        onChange={(e) => setData('kegiatan', e.target.value)}
                                        rows={3}
                                        placeholder="Jelaskan kegiatan visum..."
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                                    />
                                    {errors.kegiatan && <p className="mt-1 text-xs text-red-500">{errors.kegiatan}</p>}
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Keterangan (Opsional)</label>
                                    <textarea
                                        value={data.keterangan}
                                        onChange={(e) => setData('keterangan', e.target.value)}
                                        rows={2}
                                        placeholder="Catatan tambahan..."
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Upload File (Opsional)</label>
                                    <input
                                        type="file"
                                        onChange={(e) => setData('file', e.target.files?.[0] || null)}
                                        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,jpg,jpeg,png"
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                                    />
                                    {errors.file && <p className="mt-1 text-xs text-red-500">{errors.file}</p>}
                                </div>

                                <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4 dark:border-slate-700">
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-60"
                                    >
                                        {processing && <Loader2 className="h-4 w-4 animate-spin" />}
                                        {editingVisum ? 'Simpan Perubahan' : 'Simpan'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

FormVisum.layout = { breadcrumbs };
