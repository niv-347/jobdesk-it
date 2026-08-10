import { Head, Link, router } from '@inertiajs/react';
import { Printer, Edit, Trash2, Search, FilePlus } from 'lucide-react';
import type { ChangeEvent } from 'react';

import { create, cetak, destroy, edit, index, kejadian } from '@/routes/troubleshoot';
import type { BreadcrumbItem, TroubleshootData } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Troubleshoot', href: index() }];

interface Props {
    troubleshoots: {
        data: TroubleshootData[];
        links: any[];
    };
    filters: {
        search?: string;
    };
}

export default function Kejadian({ troubleshoots, filters }: Props) {
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        router.get(
            kejadian.url(),
            { search: e.target.value },
            { preserveState: true, replace: true }
        );
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus data troubleshoot ini?')) {
            router.delete(destroy.url(id));
        }
    };

    return (
        <div className="p-6 bg-slate-50 min-h-screen">
            <Head title="Troubleshoot Knowledge Base" />

            <div className="mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Troubleshoot & Problem Solving</h1>
                        <p className="text-sm text-slate-500">Basis data penanganan masalah sistem IT RSUD Bedas Kertasari</p>
                    </div>
                    <Link
                        href={create()}
                        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-indigo-700"
                    >
                        <FilePlus className="h-4 w-4" />
                        Tambah Penanganan
                    </Link>
                </div>

                {/* Filter & Search Bar */}
                <div className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            defaultValue={filters.search || ''}
                            onChange={handleSearch}
                            placeholder="Cari berdasarkan kode, judul, atau kategori..."
                            className="w-full rounded-lg border border-slate-300 pl-9 pr-4 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Table Data */}
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <table className="w-full text-left text-sm text-slate-600">
                        <thead className="bg-slate-100 text-xs font-semibold uppercase text-slate-700">
                            <tr>
                                <th className="px-4 py-3">Kode / Tanggal</th>
                                <th className="px-4 py-3">Kategori & Urgensi</th>
                                <th className="px-4 py-3">Judul Masalah</th>
                                <th className="px-4 py-3">Unit Pelapor</th>
                                <th className="px-4 py-3 text-center">Status</th>
                                <th className="px-4 py-3 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {troubleshoots.data.length > 0 ? (
                                troubleshoots.data.map((item) => (
                                    <tr key={item.id} className="hover:bg-slate-50">
                                        <td className="px-4 py-3">
                                            <div className="font-mono font-bold text-indigo-600">{item.kode_tiketing}</div>
                                            <div className="text-[11px] text-slate-400">
                                                {item.created_at ? new Date(item.created_at).toLocaleDateString('id-ID') : '-'}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="font-semibold text-slate-800">{item.kategori_sistem}</div>
                                            <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded ${
                                                item.tingkat_urgensi === 'Kritis' ? 'bg-red-100 text-red-700' :
                                                item.tingkat_urgensi === 'Tinggi' ? 'bg-orange-100 text-orange-700' :
                                                'bg-slate-100 text-slate-600'
                                            }`}>
                                                {item.tingkat_urgensi}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 max-w-xs font-medium text-slate-900 truncate">
                                            {item.judul_masalah}
                                        </td>
                                        <td className="px-4 py-3">{item.unit_pelapor || '-'}</td>
                                        <td className="px-4 py-3 text-center">
                                            <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full ${
                                                item.status === 'Selesai' ? 'bg-emerald-100 text-emerald-800' :
                                                item.status === 'Proses' ? 'bg-amber-100 text-amber-800' :
                                                'bg-slate-100 text-slate-800'
                                            }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <div className="flex justify-center gap-2">
                                                <Link
                                                    href={cetak(item.id)}
                                                    className="rounded p-1.5 text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
                                                    title="Cetak Laporan"
                                                >
                                                    <Printer className="h-4 w-4" />
                                                </Link>
                                                <Link
                                                    href={edit(item.id)}
                                                    className="rounded p-1.5 text-slate-600 hover:bg-slate-100 hover:text-amber-600"
                                                    title="Edit Data"
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className="rounded p-1.5 text-slate-600 hover:bg-slate-100 hover:text-rose-600"
                                                    title="Hapus Data"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-4 py-8 text-center text-slate-400">
                                        Belum ada data penanganan troubleshoot.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

Kejadian.layout = {
    breadcrumbs,
};
