import { Head, router, useForm } from '@inertiajs/react';
import { ArrowLeft, Loader2, Plus, Search, Trash2 } from 'lucide-react';
import { useState } from 'react';

import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Asset', href: '/asset/dataasset' },
    { title: 'Data Asset', href: '/asset/dataasset' },
];

interface AssetItem {
    id: number;
    nama_barang: string;
    kode_barang: string;
    kategori: string;
    merk: string | null;
    tipe: string | null;
    serial_number: string | null;
    spesifikasi: string | null;
    tahun_perolehan: number | null;
    harga_perolehan: string | null;
    lokasi: string | null;
    status: string;
    keterangan: string | null;
    file_path: string | null;
}

interface Props {
    assets: {
        data: AssetItem[];
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
        kategori?: string;
        status?: string;
    };
}

const KATEGORI_OPTIONS = [
    'Komputer',
    'Laptop',
    'Printer',
    'Scanner',
    'Server',
    'Network',
    'Monitor',
    'UPS',
    'Furniture',
    'Kendaraan',
    'Lainnya',
];

const STATUS_OPTIONS = [
    { value: 'aktif', label: 'Aktif' },
    { value: 'rusak', label: 'Rusak' },
    { value: 'diperbaiki', label: 'Diperbaiki' },
    { value: 'dijual', label: 'Dijual' },
];

export default function DataAsset({ assets, filters }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingAsset, setEditingAsset] = useState<AssetItem | null>(null);
    const [searchQuery, setSearchQuery] = useState(filters.search || '');
    const [kategoriFilter, setKategoriFilter] = useState(filters.kategori || '');
    const [statusFilter, setStatusFilter] = useState(filters.status || '');

    const { data, setData, post, put, processing, errors, reset } = useForm({
        nama_barang: '',
        kode_barang: '',
        kategori: 'Komputer',
        merk: '',
        tipe: '',
        serial_number: '',
        spesifikasi: '',
        tahun_perolehan: '',
        harga_perolehan: '',
        lokasi: '',
        status: 'aktif',
        keterangan: '',
        file: null as File | null,
    });

    const openCreateModal = () => {
        setEditingAsset(null);
        reset();
        setIsModalOpen(true);
    };

    const openEditModal = (asset: AssetItem) => {
        setEditingAsset(asset);
        setData({
            nama_barang: asset.nama_barang,
            kode_barang: asset.kode_barang,
            kategori: asset.kategori,
            merk: asset.merk || '',
            tipe: asset.tipe || '',
            serial_number: asset.serial_number || '',
            spesifikasi: asset.spesifikasi || '',
            tahun_perolehan: asset.tahun_perolehan?.toString() || '',
            harga_perolehan: asset.harga_perolehan || '',
            lokasi: asset.lokasi || '',
            status: asset.status,
            keterangan: asset.keterangan || '',
            file: null,
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingAsset(null);
        reset();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingAsset) {
            put(`/asset/dataasset/${editingAsset.id}`, {
                onSuccess: () => closeModal(),
            });
        } else {
            post('/asset/dataasset', {
                onSuccess: () => closeModal(),
            });
        }
    };

    const handleDelete = (asset: AssetItem) => {
        if (confirm(`Hapus asset "${asset.nama_barang}"?`)) {
            router.delete(`/asset/dataasset/${asset.id}`);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();

        if (searchQuery) {
params.set('search', searchQuery);
}

        if (kategoriFilter) {
params.set('kategori', kategoriFilter);
}

        if (statusFilter) {
params.set('status', statusFilter);
}

        router.get(`/asset/dataasset?${params.toString()}`);
    };

    const getStatusBadge = (status: string) => {
        const styles: Record<string, string> = {
            aktif: 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400',
            rusak: 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400',
            diperbaiki: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
            dijual: 'bg-slate-50 text-slate-700 dark:bg-slate-900/20 dark:text-slate-400',
        };
        const labels: Record<string, string> = {
            aktif: 'Aktif',
            rusak: 'Rusak',
            diperbaiki: 'Diperbaiki',
            dijual: 'Dijual',
        };

        return (
            <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status] || 'bg-slate-100 text-slate-800'}`}>
                {labels[status] || status}
            </span>
        );
    };

    return (
        <>
            <Head title="Data Asset" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4 md:p-6">
                {/* Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                            Data Asset
                        </h1>
                        <p className="text-sm text-slate-500 mt-1">
                            Kelola data asset dan inventaris barang
                        </p>
                    </div>
                    <button
                        onClick={openCreateModal}
                        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                        <Plus className="h-4 w-4" />
                        Tambah Asset
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
                                placeholder="Nama barang, kode, atau serial number..."
                                className="w-full rounded-lg border border-slate-300 pl-9 pr-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">Kategori</label>
                        <select
                            value={kategoriFilter}
                            onChange={(e) => setKategoriFilter(e.target.value)}
                            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none bg-white"
                        >
                            <option value="">Semua Kategori</option>
                            {KATEGORI_OPTIONS.map((kat) => (
                                <option key={kat} value={kat}>{kat}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">Status</label>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none bg-white"
                        >
                            <option value="">Semua Status</option>
                            {STATUS_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
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
                                    <th className="p-4">Kode Barang</th>
                                    <th className="p-4">Nama Barang</th>
                                    <th className="p-4">Kategori</th>
                                    <th className="p-4">Merk/Tipe</th>
                                    <th className="p-4">Lokasi</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {assets.data.length > 0 ? (
                                    assets.data.map((asset) => (
                                        <tr key={asset.id} className="hover:bg-slate-50/80 transition-colors">
                                            <td className="p-4 font-mono text-xs font-semibold text-indigo-600">
                                                {asset.kode_barang}
                                            </td>
                                            <td className="p-4 font-medium text-slate-900">{asset.nama_barang}</td>
                                            <td className="p-4">
                                                <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                                                    {asset.kategori}
                                                </span>
                                            </td>
                                            <td className="p-4 text-xs">
                                                {asset.merk && <div>{asset.merk}</div>}
                                                {asset.tipe && <div className="text-slate-500">{asset.tipe}</div>}
                                            </td>
                                            <td className="p-4 text-xs">{asset.lokasi || '-'}</td>
                                            <td className="p-4">{getStatusBadge(asset.status)}</td>
                                            <td className="p-4">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button
                                                        onClick={() => openEditModal(asset)}
                                                        className="rounded p-1.5 text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
                                                    >
                                                        <ArrowLeft className="h-4 w-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(asset)}
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
                                        <td colSpan={7} className="p-8 text-center text-slate-400">
                                            Belum ada data asset.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {assets.last_page > 1 && (
                        <div className="flex items-center justify-between px-4 py-3 border-t border-slate-200">
                            <div className="text-sm text-slate-600">
                                Menampilkan {assets.data.length} dari {assets.total} asset
                            </div>
                            <div className="flex gap-2">
                                {assets.links.map((link, index) => (
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
                                {editingAsset ? 'Edit Asset' : 'Tambah Asset'}
                            </h3>
                            <button
                                onClick={closeModal}
                                className="text-slate-400 hover:text-slate-600"
                            >
                                <ArrowLeft className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            {/* Informasi Dasar */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-semibold text-slate-900 border-b pb-2">INFORMASI DASAR</h4>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Nama Barang *</label>
                                        <input
                                            type="text"
                                            value={data.nama_barang}
                                            onChange={(e) => setData('nama_barang', e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                        />
                                        {errors.nama_barang && <p className="mt-1 text-xs text-red-500">{errors.nama_barang}</p>}
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Kode Barang *</label>
                                        <input
                                            type="text"
                                            value={data.kode_barang}
                                            onChange={(e) => setData('kode_barang', e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                        />
                                        {errors.kode_barang && <p className="mt-1 text-xs text-red-500">{errors.kode_barang}</p>}
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Kategori *</label>
                                        <select
                                            value={data.kategori}
                                            onChange={(e) => setData('kategori', e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none bg-white"
                                        >
                                            {KATEGORI_OPTIONS.map((kat) => (
                                                <option key={kat} value={kat}>{kat}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Status *</label>
                                        <select
                                            value={data.status}
                                            onChange={(e) => setData('status', e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none bg-white"
                                        >
                                            {STATUS_OPTIONS.map((opt) => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Spesifikasi Barang */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-semibold text-slate-900 border-b pb-2">SPESIFIKASI BARANG</h4>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Merk</label>
                                        <input
                                            type="text"
                                            value={data.merk}
                                            onChange={(e) => setData('merk', e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Tipe</label>
                                        <input
                                            type="text"
                                            value={data.tipe}
                                            onChange={(e) => setData('tipe', e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Serial Number</label>
                                        <input
                                            type="text"
                                            value={data.serial_number}
                                            onChange={(e) => setData('serial_number', e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Spesifikasi</label>
                                    <textarea
                                        value={data.spesifikasi}
                                        onChange={(e) => setData('spesifikasi', e.target.value)}
                                        rows={3}
                                        placeholder="CPU, RAM, Storage, OS, dll..."
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Informasi Perolehan */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-semibold text-slate-900 border-b pb-2">INFORMASI PEROLEHAN</h4>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Tahun Perolehan</label>
                                        <input
                                            type="number"
                                            value={data.tahun_perolehan}
                                            onChange={(e) => setData('tahun_perolehan', e.target.value)}
                                            min="1900"
                                            max={new Date().getFullYear()}
                                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Harga Perolehan (Rp)</label>
                                        <input
                                            type="number"
                                            value={data.harga_perolehan}
                                            onChange={(e) => setData('harga_perolehan', e.target.value)}
                                            min="0"
                                            step="1000"
                                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Lokasi</label>
                                        <input
                                            type="text"
                                            value={data.lokasi}
                                            onChange={(e) => setData('lokasi', e.target.value)}
                                            placeholder="Ruang, Lantai, dll..."
                                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Keterangan</label>
                                    <textarea
                                        value={data.keterangan}
                                        onChange={(e) => setData('keterangan', e.target.value)}
                                        rows={2}
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Upload File (Opsional)</label>
                                    <input
                                        type="file"
                                        onChange={(e) => setData('file', e.target.files?.[0] || null)}
                                        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,jpg,jpeg,png"
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                    />
                                    {errors.file && <p className="mt-1 text-xs text-red-500">{errors.file}</p>}
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
                                    {editingAsset ? 'Simpan Perubahan' : 'Simpan'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

DataAsset.layout = { breadcrumbs };
