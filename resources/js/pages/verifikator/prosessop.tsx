import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Download, FileText, Trash2 } from 'lucide-react';

import type { BreadcrumbItem, SopData } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Verifikator', href: '/verifikator/verifsop' },
    { title: 'Proses SOP', href: '/verifikator/prosessop' },
];

interface Props {
    sop: SopData;
}

export default function ProsesSop({ sop }: Props) {
    const handleDelete = () => {
        if (confirm(`Hapus SOP "${sop.judul}"?`)) {
            router.delete(`/sop/${sop.id}`);
        }
    };

    return (
        <>
            <Head title={`Proses SOP - ${sop.nomor_sop}`} />

            <div className="flex h-full flex-1 flex-col gap-6 bg-slate-50">
                {/* Header Page - Sticky */}
                <div className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/verifikator/verifsop"
                            className="rounded-lg border border-slate-300 p-2 text-slate-600 transition-colors hover:bg-slate-100"
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                        <div>
                            <span className="font-mono text-xs font-bold text-indigo-600">{sop.nomor_sop}</span>
                            <h1 className="text-xl font-bold text-slate-900">{sop.judul}</h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {sop.file_path && (
                            <a
                                href={`/storage/${sop.file_path}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                            >
                                <Download className="h-4 w-4" />
                                Download
                            </a>
                        )}
                        <button
                            onClick={handleDelete}
                            className="inline-flex items-center gap-2 rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-50"
                        >
                            <Trash2 className="h-4 w-4" />
                            Hapus
                        </button>
                    </div>
                </div>

                {/* Content - Read Only */}
                <div className="space-y-6 p-4 md:p-6">
                    {/* Card 1: Informasi Umum */}
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                        <h2 className="flex items-center gap-2 text-base font-semibold text-slate-900 border-b pb-2">
                            <FileText className="h-5 w-5 text-indigo-600" />
                            INFORMASI UMUM
                        </h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-500">Nomor SOP</label>
                                <p className="text-sm text-slate-900">{sop.nomor_sop}</p>
                            </div>
                            <div className="md:col-span-2">
                                <label className="mb-1 block text-sm font-medium text-slate-500">Judul SOP</label>
                                <p className="text-sm text-slate-900">{sop.judul}</p>
                            </div>
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-500">Kategori</label>
                            <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                                {sop.kategori}
                            </span>
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-500">Deskripsi</label>
                            <p className="text-sm text-slate-900 whitespace-pre-wrap">{sop.deskripsi || '-'}</p>
                        </div>
                        {sop.file_path && (
                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-500">File</label>
                                <p className="text-sm text-slate-900">{sop.file_path}</p>
                            </div>
                        )}
                    </div>

                    {/* Card 2: Isi SOP */}
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                        <h2 className="flex items-center gap-2 text-base font-semibold text-slate-900 border-b pb-2">
                            <FileText className="h-5 w-5 text-indigo-600" />
                            ISI DOKUMEN SOP
                        </h2>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-500">1. PENGERTIAN</label>
                            <p className="text-sm text-slate-900 whitespace-pre-wrap">{sop.pengertian || '-'}</p>
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-500">2. TUJUAN</label>
                            <p className="text-sm text-slate-900 whitespace-pre-wrap">{sop.tujuan || '-'}</p>
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-500">3. KEBIJAKAN</label>
                            <p className="text-sm text-slate-900 whitespace-pre-wrap">{sop.kebijakan || '-'}</p>
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-500">4. PROSEDUR</label>
                            <pre className="text-sm text-slate-900 whitespace-pre-wrap font-mono bg-slate-50 p-4 rounded-lg border border-slate-100">
                                {sop.prosedur || '-'}
                            </pre>
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-500">5. UNIT TERKAIT</label>
                            <pre className="text-sm text-slate-900 whitespace-pre-wrap font-mono bg-slate-50 p-4 rounded-lg border border-slate-100">
                                {sop.unit_terkait || '-'}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

ProsesSop.layout = { breadcrumbs };
