import { Head } from '@inertiajs/react';
import { Download, FileText, Image as ImageIcon } from 'lucide-react';

interface Props {
    radiologi: {
        id: number;
        nama_pasien: string;
        no_rm: string;
        tgl_pemeriksaan: string;
        jenis_pemeriksaan: string;
        hasil_ekpertise: string | null;
        file_path: string | null;
        foto_rontgen_path: string | null;
    };
}

export default function HasilRadiologi({ radiologi }: Props) {
    return (
        <>
            <Head title="Hasil Ekspertise Radiologi" />

            <div className="flex min-h-screen flex-1 flex-col bg-slate-50">
                {/* Header */}
                <div className="border-b border-slate-200 bg-white shadow-sm">
                    <div className="mx-auto max-w-4xl px-4 py-6">
                        <h1 className="text-2xl font-bold text-slate-900">Hasil Ekspertise Radiologi</h1>
                        <p className="mt-1 text-sm text-slate-500">
                            {radiologi.nama_pasien} - {radiologi.no_rm}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="mx-auto w-full max-w-4xl p-4 md:p-6">
                    {/* Info Card */}
                    <div className="mb-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-lg font-semibold text-slate-900">Informasi Pemeriksaan</h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <span className="text-sm font-medium text-slate-500">Nama Pasien</span>
                                <p className="text-slate-900">{radiologi.nama_pasien}</p>
                            </div>
                            <div>
                                <span className="text-sm font-medium text-slate-500">No RM</span>
                                <p className="font-mono text-slate-900">{radiologi.no_rm}</p>
                            </div>
                            <div>
                                <span className="text-sm font-medium text-slate-500">Tanggal Pemeriksaan</span>
                                <p className="text-slate-900">
                                    {new Date(radiologi.tgl_pemeriksaan).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </p>
                            </div>
                            <div>
                                <span className="text-sm font-medium text-slate-500">Jenis Pemeriksaan</span>
                                <p className="text-slate-900">{radiologi.jenis_pemeriksaan}</p>
                            </div>
                        </div>
                    </div>

                    {/* Hasil Ekspertise Text */}
                    {radiologi.hasil_ekpertise && (
                        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h2 className="mb-4 text-lg font-semibold text-slate-900">Hasil Ekspertise</h2>
                            <p className="whitespace-pre-wrap text-sm text-slate-700">{radiologi.hasil_ekpertise}</p>
                        </div>
                    )}

                    {/* Files */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* PDF Hasil Ekspertise */}
                        {radiologi.file_path && (
                            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="mb-4 flex items-center gap-2">
                                    <FileText className="h-5 w-5 text-indigo-600" />
                                    <h3 className="font-semibold text-slate-900">Hasil Ekspertise (PDF)</h3>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <a
                                        href={`/radiologi/hasil/${radiologi.id}/pdf`}
                                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                                    >
                                        <Download className="h-4 w-4" />
                                        Download PDF
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* Foto Rontgen */}
                        {radiologi.foto_rontgen_path && (
                            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="mb-4 flex items-center gap-2">
                                    <ImageIcon className="h-5 w-5 text-emerald-600" />
                                    <h3 className="font-semibold text-slate-900">Foto Rontgen</h3>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <img
                                        src={`/storage/${radiologi.foto_rontgen_path}`}
                                        alt="Foto Rontgen"
                                        className="rounded-lg border border-slate-200"
                                    />
                                    <a
                                        href={`/radiologi/hasil/${radiologi.id}/foto`}
                                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                                    >
                                        <Download className="h-4 w-4" />
                                        Download Foto
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* No Files */}
                    {!radiologi.file_path && !radiologi.foto_rontgen_path && (
                        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                            <p className="text-sm text-slate-500">Belum ada file yang diupload untuk hasil ini.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
