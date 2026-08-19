import { Head, router, useForm } from '@inertiajs/react';
import { ArrowLeft, Loader2, Plus, Search, Trash2 } from 'lucide-react';
import { useState } from 'react';

import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Radiologi', href: '/radiologi/ekpertise' },
    { title: 'Ekspertise', href: '/radiologi/ekpertise' },
];

interface RadiologiItem {
    id: number;
    nama_pasien: string;
    no_rm: string;
    tgl_pemeriksaan: string;
    jenis_pemeriksaan: string;
    hasil_ekpertise: string | null;
    file_path: string | null;
    foto_rontgen_path: string | null;
    keterangan: string | null;
}

interface Props {
    radiologis: {
        data: RadiologiItem[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
    };
    filters: {
        search?: string;
        jenis_pemeriksaan?: string;
    };
}

const JENIS_OPTIONS = [
    'Foto Rontgen Thorax',
    'Foto Rontgen Abdomen',
    'Foto Rontgen Ekstremitas',
    'Foto Rontgen Spine',
    'Foto Rontgen Kepala',
    'CT Scan',
    'MRI',
    'Ultrasound',
    'Mammografi',
    'Lainnya',
];

export default function Ekspertise({ radiologis, filters }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<RadiologiItem | null>(null);
    const [searchQuery, setSearchQuery] = useState(filters.search || '');
    const [jenisFilter, setJenisFilter] = useState(filters.jenis_pemeriksaan || '');

    const { data, setData, post, put, processing, errors, reset } = useForm({
        nama_pasien: '',
        no_rm: '',
        tgl_lahir: '',
        tgl_pemeriksaan: '',
        jenis_pemeriksaan: 'Foto Rontgen Thorax',
        hasil_ekpertise: '',
        file_hasil: null as File | null,
        foto_rontgen: null as File | null,
        keterangan: '',
    });

    const openCreateModal = () => {
        setEditingItem(null);
        reset();
        setIsModalOpen(true);
    };

    const openEditModal = (item: RadiologiItem) => {
        setEditingItem(item);
        setData({
            nama_pasien: item.nama_pasien,
            no_rm: item.no_rm,
            tgl_pemeriksaan: item.tgl_pemeriksaan,
            jenis_pemeriksaan: item.jenis_pemeriksaan,
            hasil_ekpertise: item.hasil_ekpertise || '',
            file_hasil: null,
            foto_rontgen: null,
            keterangan: item.keterangan || '',
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingItem(null);
        reset();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingItem) {
            put(`/radiologi/ekpertise/${editingItem.id}`, {
                onSuccess: () => closeModal(),
            });
        } else {
            post('/radiologi/ekpertise', {
                onSuccess: () => closeModal(),
            });
        }
    };

    const handleDelete = (item: RadiologiItem) => {
        if (confirm(`Hapus data ekspertise "${item.nama_pasien}"?`)) {
            router.delete(`/radiologi/ekpertise/${item.id}`);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();

        if (searchQuery) {
params.set('search', searchQuery);
}

        if (jenisFilter) {
params.set('jenis_pemeriksaan', jenisFilter);
}

        router.get(`/radiologi/ekpertise?${params.toString()}`);
    };

    return (
        <>
            <Head title="Ekspertise Radiologi" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4 md:p-6">
                {/* Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Ekspertise Radiologi
                        </h1>
                        <p className="text-sm text-slate-500 mt-1">
                            Kelola hasil ekspertise dan foto rontgen
                        </p>
                    </div>
                    <button
                        onClick={openCreateModal}
                        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                        <Plus className="h-4 w-4" />
                        Tambah Ekspertise
                    </button>
                </div>

                {/* Filters */}
                <form onSubmit={handleSearch} className="flex flex-col gap-3 md:flex-row md:items-end">
                    <div className="flex-1">
                        <label className="mb-1 block text-sm font-medium text-slate-700">Cari</label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Nama pasien, no RM, atau hasil ekspertise..."
                                className="w-full rounded-lg border border-slate-300 pl-9 pr-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">Jenis Pemeriksaan</label>
                        <select
                            value={jenisFilter}
                            onChange={(e) => setJenisFilter(e.target.value)}
                            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none bg-white"
                        >
                            <option value="">Semua Jenis</option>
                            {JENIS_OPTIONS.map((jenis) => (
                                <option key={jenis} value={jenis}>{jenis}</option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                        Filter
                    </button>
                </form>

                {/* Table */}
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600">
                            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                                <tr>
                                    <th className="p-4">No RM</th>
                                    <th className="p-4">Nama Pasien</th>
                                    <th className="p-4">Jenis Pemeriksaan</th>
                                    <th className="p-4">Tanggal</th>
                                    <th className="p-4">File</th>
                                    <th className="p-4 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {radiologis.data.length > 0 ? (
                                    radiologis.data.map((item) => (
                                        <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                                            <td className="p-4 font-mono text-xs font-semibold text-indigo-600">
                                                {item.no_rm}
                                            </td>
                                            <td className="p-4 font-medium text-slate-900">{item.nama_pasien}</td>
                                            <td className="p-4">
                                                <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                                                    {item.jenis_pemeriksaan}
                                                </span>
                                            </td>
                                            <td className="p-4 text-xs">
                                                {new Date(item.tgl_pemeriksaan).toLocaleDateString('id-ID')}
                                            </td>
                                            <td className="p-4">
                                                <div className="flex flex-col gap-1">
                                                    {item.file_path && (
                                                        <a
                                                            href={`/storage/${item.file_path}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-xs text-indigo-600 hover:text-indigo-700"
                                                        >
                                                            PDF Hasil
                                                        </a>
                                                    )}
                                                    {item.foto_rontgen_path && (
                                                        <a
                                                            href={`/storage/${item.foto_rontgen_path}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-xs text-emerald-600 hover:text-emerald-700"
                                                        >
                                                            Foto Rontgen
                                                        </a>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button
                                                        onClick={() => openEditModal(item)}
                                                        className="rounded p-1.5 text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
                                                    >
                                                        <ArrowLeft className="h-4 w-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(item)}
                                                        className="rounded p-1.5 text-slate-600 hover:bg-slate-100 hover:text-red-600"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="p-8 text-center text-slate-400">
                                            Belum ada data ekspertise radiologi.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {radiologis.last_page > 1 && (
                        <div className="flex items-center justify-between px-4 py-3 border-t border-slate-200">
                            <div className="text-sm text-slate-600">
                                Menampilkan {radiologis.data.length} dari {radiologis.total} data
                            </div>
                            <div className="flex gap-2">
                                {radiologis.links.map((link, index) => (
                                    <button
                                        key={index}
                                        onClick={() => link.url && (window.location.href = link.url)}
                                        disabled={!link.url}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        className={`px-3 py-1 rounded text-sm ${
                                            link.active
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
                                        } ${!link.url ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal Form */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
                    <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-xl">
                        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                            <h3 className="text-lg font-semibold text-slate-900">
                                {editingItem ? 'Edit Ekspertise' : 'Tambah Ekspertise'}
                            </h3>
                            <button
                                onClick={closeModal}
                                className="text-slate-400 hover:text-slate-600"
                            >
                                <ArrowLeft className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            {/* Informasi Pasien */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-semibold text-slate-900 border-b pb-2">INFORMASI PASIEN</h4>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Nama Pasien *</label>
                                        <input
                                            type="text"
                                            value={data.nama_pasien}
                                            onChange={(e) => setData('nama_pasien', e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                        />
                                        {errors.nama_pasien && <p className="mt-1 text-xs text-red-500">{errors.nama_pasien}</p>}
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">No RM *</label>
                                        <input
                                            type="text"
                                            value={data.no_rm}
                                            onChange={(e) => setData('no_rm', e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                        />
                                        {errors.no_rm && <p className="mt-1 text-xs text-red-500">{errors.no_rm}</p>}
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Tanggal Lahir *</label>
                                        <input
                                            type="date"
                                            value={data.tgl_lahir}
                                            onChange={(e) => setData('tgl_lahir', e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                        />
                                        {errors.tgl_lahir && <p className="mt-1 text-xs text-red-500">{errors.tgl_lahir}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Tanggal Pemeriksaan *</label>
                                    <input
                                        type="date"
                                        value={data.tgl_pemeriksaan}
                                        onChange={(e) => setData('tgl_pemeriksaan', e.target.value)}
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                    />
                                    {errors.tgl_pemeriksaan && <p className="mt-1 text-xs text-red-500">{errors.tgl_pemeriksaan}</p>}
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Jenis Pemeriksaan *</label>
                                    <select
                                        value={data.jenis_pemeriksaan}
                                        onChange={(e) => setData('jenis_pemeriksaan', e.target.value)}
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none bg-white"
                                    >
                                        {JENIS_OPTIONS.map((jenis) => (
                                            <option key={jenis} value={jenis}>{jenis}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Hasil Ekspertise */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-semibold text-slate-900 border-b pb-2">HASIL EKSPERTISE</h4>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Hasil Ekspertise</label>
                                    <textarea
                                        value={data.hasil_ekpertise}
                                        onChange={(e) => setData('hasil_ekpertise', e.target.value)}
                                        rows={4}
                                        placeholder="Tuliskan hasil ekspertise radiologi..."
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                    />
                                    {errors.hasil_ekpertise && <p className="mt-1 text-xs text-red-500">{errors.hasil_ekpertise}</p>}
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Upload File Hasil (PDF/DOC)</label>
                                    <input
                                        type="file"
                                        onChange={(e) => setData('file_hasil', e.target.files?.[0] || null)}
                                        accept=".pdf,.doc,.docx"
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                    />
                                    {errors.file_hasil && <p className="mt-1 text-xs text-red-500">{errors.file_hasil}</p>}
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Upload Foto Rontgen (JPG/PNG)</label>
                                    <input
                                        type="file"
                                        onChange={(e) => setData('foto_rontgen', e.target.files?.[0] || null)}
                                        accept=".jpg,.jpeg,.png"
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                    />
                                    {errors.foto_rontgen && <p className="mt-1 text-xs text-red-500">{errors.foto_rontgen}</p>}
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Keterangan</label>
                                    <textarea
                                        value={data.keterangan}
                                        onChange={(e) => setData('keterangan', e.target.value)}
                                        rows={2}
                                        placeholder="Catatan tambahan..."
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-60"
                                >
                                    {processing && <Loader2 className="h-4 w-4 animate-spin" />}
                                    {editingItem ? 'Simpan Perubahan' : 'Simpan'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

Ekspertise.layout = { breadcrumbs };
