import { Head } from '@inertiajs/react';
import { Download } from 'lucide-react';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Radiologi', href: '/radiologi/ekpertise' },
    { title: 'Share', href: '/radiologi/share' },
];

interface Props {
    qrUrl: string;
    verifyUrl: string;
}

export default function ShareRadiologi({ qrUrl, verifyUrl }: Props) {
    return (
        <>
            <Head title="Share Radiologi" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4 md:p-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Share Radiologi
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        QR Code untuk pasien scan dan melihat hasil ekspertise
                    </p>
                </div>

                {/* QR Code Card */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    <div className="flex flex-col items-center gap-6">
                        <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                            <img
                                src={qrUrl}
                                alt="QR Code"
                                className="h-64 w-64"
                            />
                        </div>

                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                QR Code Verifikasi Pasien
                            </h3>
                            <p className="mt-2 text-sm text-slate-500">
                                Pasien scan QR code ini untuk mengakses form verifikasi
                            </p>
                            <p className="mt-1 text-xs text-slate-400">
                                URL: {verifyUrl}
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <a
                                href={qrUrl}
                                download
                                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                            >
                                <Download className="h-4 w-4" />
                                Download QR Code
                            </a>
                        </div>
                    </div>
                </div>

                {/* Instructions */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                        Cara Penggunaan
                    </h3>
                    <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="flex gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">1</span>
                            <p>Pasien scan QR Code menggunakan smartphone</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">2</span>
                            <p>Masukkan No RM dan Tanggal Lahir pada form verifikasi</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">3</span>
                            <p>Hasil ekspertise dan foto rontgen akan ditampilkan untuk di-download</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

ShareRadiologi.layout = { breadcrumbs };
