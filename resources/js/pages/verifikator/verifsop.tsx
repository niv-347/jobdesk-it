import { Head, Link, router } from '@inertiajs/react';
import { CheckCircle, Search, ShieldPlus, XCircle, Wrench } from 'lucide-react';
import type { ChangeEvent } from 'react';

import { verifsop } from '@/routes/verifikator';
import type { BreadcrumbItem, SopData } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Verifikator', href: '/verifikator/verifsop' }];

interface Props {
    sops: {
        data: SopData[];
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
        status?: string;
    };
}

export default function VerifSop({ sops, filters }: Props) {
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        router.get(
            verifsop.url(),
            { search: e.target.value, status: filters.status },
            { preserveState: true, replace: true }
        );
    };

    const handleStatusFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        router.get(
            verifsop.url(),
            { search: filters.search, status: e.target.value },
            { preserveState: true, replace: true }
        );
    };

    const handleApprove = (id: number) => {
        if (confirm('Setujui SOP ini?')) {
            router.post(`/verifikator/verifsop/${id}/approve`);
        }
    };

    const handleReject = (id: number) => {
        if (confirm('Tolak SOP ini?')) {
            router.post(`/verifikator/verifsop/${id}/reject`);
        }
    };

    const getStatusBadge = (status?: string) => {
        switch (status) {
            case 'approved':
                return <span className="inline-flex rounded-md bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/20 dark:text-green-400">Disetujui</span>;
            case 'rejected':
                return <span className="inline-flex rounded-md bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900/20 dark:text-red-400">Ditolak</span>;
            default:
                return <span className="inline-flex rounded-md bg-yellow-50 px-2.5 py-0.5 text-xs font-medium text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400">Pending</span>;
        }
    };

    return (
        <>
            <Head title="Verifikasi SOP" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4 md:p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                            <ShieldPlus className="h-6 w-6 text-indigo-600" />
                            Verifikasi SOP
                        </h1>
                        <p className="text-sm text-slate-500 mt-1">
                            Review dan setujui atau tolak dokumen SOP yang masuk
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-1 items-center gap-3">
                        <div className="relative flex-1 max-w-xs">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                defaultValue={filters.search || ''}
                                onChange={handleSearch}
                                placeholder="Cari nomor atau judul SOP..."
                                className="w-full rounded-lg border border-slate-300 pl-9 pr-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                            />
                        </div>

                        <select
                            value={filters.status || ''}
                            onChange={handleStatusFilter}
                            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none bg-white"
                        >
                            <option value="">Semua Status</option>
                            <option value="pending">Pending</option>
                            <option value="approved">Disetujui</option>
                            <option value="rejected">Ditolak</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <table className="w-full text-left text-sm text-slate-600">
                        <thead className="border-b border-slate-200 bg-slate-50 font-semibold text-slate-700">
                            <tr>
                                <th className="p-4">Nomor SOP</th>
                                <th className="p-4">Judul SOP</th>
                                <th className="p-4">Kategori</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Tanggal</th>
                                <th className="p-4 text-center">Aksi</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">
                            {sops.data.length > 0 ? (
                                sops.data.map((sop) => (
                                    <tr key={sop.id} className="transition-colors hover:bg-slate-50/80">
                                        <td className="p-4 font-mono text-xs font-semibold text-indigo-600">
                                            {sop.nomor_sop}
                                        </td>
                                        <td className="p-4 font-medium text-slate-900">{sop.judul}</td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                                                {sop.kategori}
                                            </span>
                                        </td>
                                        <td className="p-4">{getStatusBadge(sop.status)}</td>
                                        <td className="p-4 text-slate-500">
                                            {sop.created_at ? new Date(sop.created_at).toLocaleDateString('id-ID') : '-'}
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-center gap-2">
                                                {sop.status === 'pending' && (
                                                    <>
                                                        <button
                                                            onClick={() => handleApprove(sop.id)}
                                                            className="rounded p-1.5 text-slate-600 hover:bg-slate-100 hover:text-emerald-600"
                                                            title="Setujui"
                                                        >
                                                            <CheckCircle className="h-4 w-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleReject(sop.id)}
                                                            className="rounded p-1.5 text-slate-600 hover:bg-slate-100 hover:text-red-600"
                                                            title="Tolak"
                                                        >
                                                            <XCircle className="h-4 w-4" />
                                                        </button>
                                                    </>
                                                )}
                                                <Link
                                                    href={`/verifikator/prosessop/${sop.id}`}
                                                    className="rounded p-1.5 text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
                                                    title="Proses"
                                                >
                                                    <Wrench className="h-4 w-4" />
                                                </Link>
                                                {sop.status !== 'pending' && (
                                                    <span className="text-xs text-slate-400">Selesai</span>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="p-8 text-center text-slate-400">
                                        Belum ada SOP yang perlu diverifikasi.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {sops.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-600">
                            Menampilkan {sops.data.length} dari {sops.total} SOP
                        </div>
                        <div className="flex gap-2">
                            {sops.links.map((link, index) => (
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
        </>
    );
}

VerifSop.layout = { breadcrumbs };
