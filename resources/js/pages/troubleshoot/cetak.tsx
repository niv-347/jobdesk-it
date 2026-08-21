import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { Printer, ArrowLeft } from 'lucide-react';

import { index } from '@/routes/troubleshoot';
import type { BreadcrumbItem, TroubleshootData } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Troubleshoot',
        href: index(),
    },
];

interface Props {
    troubleshoot: TroubleshootData;
}

export default function Cetak({ troubleshoot }: Props) {
    const formatDate = (date?: string | null) => {
        if (!date) {
return '-';
}

        return new Date(date).toLocaleString('id-ID', {
            dateStyle: 'long',
            timeStyle: 'short',
        });
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <Head title={`Laporan ${troubleshoot.kode_tiketing}`} />

            <div className="min-h-screen bg-slate-100 p-6 print:bg-white print:p-0">
                {/* Toolbar - tidak ikut tercetak */}
                <div className="mx-auto mb-6 flex max-w-4xl items-center justify-between print:hidden">
                    <Link
                        href={index()}
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Kembali
                    </Link>

                    <button
                        type="button"
                        onClick={handlePrint}
                        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                        <Printer className="h-4 w-4" />
                        Cetak Laporan
                    </button>
                </div>

                {/* Dokumen */}
                <main className="mx-auto max-w-4xl bg-white p-8 shadow-sm print:max-w-none print:p-0 print:shadow-none">
                    {/* Header */}
                    <header className="border-b-2 border-slate-800 pb-5">
                        <div className="flex items-start justify-between gap-6">
                            <div>
                                <h1 className="text-2xl font-bold uppercase tracking-wide text-slate-900">
                                    Laporan Troubleshoot
                                </h1>

                                <p className="mt-1 text-sm text-slate-500">
                                    IT Support / Knowledge Base
                                </p>
                            </div>

                            <div className="text-right">
                                <div className="font-mono text-lg font-bold text-indigo-700">
                                    {troubleshoot.kode_tiketing}
                                </div>

                                <div className="mt-1 text-xs text-slate-500">
                                    Dibuat: {formatDate(troubleshoot.created_at)}
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Informasi utama */}
                    <section className="mt-6">
                        <h2 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wide text-slate-800">
                            Informasi Troubleshoot
                        </h2>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
                            <InfoItem
                                label="Kategori Sistem"
                                value={troubleshoot.kategori_sistem}
                            />

                            <InfoItem
                                label="Tingkat Urgensi"
                                value={troubleshoot.tingkat_urgensi}
                            />

                            <InfoItem
                                label="Unit Pelapor"
                                value={troubleshoot.unit_pelapor || '-'}
                            />

                            <InfoItem
                                label="Petugas IT"
                                value={troubleshoot.petugas_it || '-'}
                            />

                            <InfoItem
                                label="Status"
                                value={troubleshoot.status}
                            />

                            <InfoItem
                                label="Tanggal Update"
                                value={formatDate(troubleshoot.updated_at)}
                            />
                        </div>
                    </section>

                    {/* Masalah */}
                    <section className="mt-7">
                        <h2 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wide text-slate-800">
                            Masalah
                        </h2>

                        <InfoBlock
                            label="Judul Masalah"
                            value={troubleshoot.judul_masalah}
                        />

                        <InfoBlock
                            label="Deskripsi Masalah"
                            value={troubleshoot.deskripsi_masalah}
                        />

                        <InfoBlock
                            label="Gejala"
                            value={troubleshoot.gejala || '-'}
                        />
                    </section>

                    {/* Analisis dan solusi */}
                    <section className="mt-7">
                        <h2 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wide text-slate-800">
                            Analisis & Penyelesaian
                        </h2>

                        <InfoBlock
                            label="Penyebab"
                            value={troubleshoot.penyebab || '-'}
                        />

                        <InfoBlock
                            label="Langkah Solusi"
                            value={troubleshoot.solusi_langkah}
                        />
                    </section>

                    {/* Timeline */}
                    {troubleshoot.timeline &&
                        troubleshoot.timeline.length > 0 && (
                            <section className="mt-7">
                                <h2 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wide text-slate-800">
                                    Timeline Penanganan
                                </h2>

                                <div className="space-y-4">
                                    {troubleshoot.timeline.map(
                                        (item, index) => (
                                            <div
                                                key={`${item.timestamp}-${index}`}
                                                className="border-l-2 border-indigo-200 pl-4"
                                            >
                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                    <h3 className="font-semibold text-slate-800">
                                                        {item.aksi}
                                                    </h3>

                                                    <span className="text-xs text-slate-400">
                                                        {formatDate(
                                                            item.timestamp,
                                                        )}
                                                    </span>
                                                </div>

                                                <p className="mt-1 text-sm text-slate-600">
                                                    {item.catatan || '-'}
                                                </p>

                                                <p className="mt-1 text-xs text-slate-400">
                                                    Petugas: {item.user}
                                                </p>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </section>
                        )}

                    {/* Footer */}
                    <footer className="mt-10 border-t border-slate-200 pt-5 text-xs text-slate-400">
                        <div className="flex justify-between gap-4">
                            <span>
                                Dokumen Troubleshoot — {troubleshoot.kode_tiketing}
                            </span>

                            <span>
                                Dicetak: {formatDate(new Date().toISOString())}
                            </span>
                        </div>
                    </footer>
                </main>
            </div>
        </>
    );
}

function InfoItem({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div>
            <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                {label}
            </div>

            <div className="mt-1 font-medium text-slate-800">
                {value}
            </div>
        </div>
    );
}

function InfoBlock({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="mb-5">
            <h3 className="mb-1 text-sm font-semibold text-slate-700">
                {label}
            </h3>

            <div className="whitespace-pre-line rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-700 print:bg-transparent print:p-0">
                {value}
            </div>
        </div>
    );
}

Cetak.layout = {
    breadcrumbs,
};
