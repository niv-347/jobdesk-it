import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, FileCheck } from 'lucide-react';

interface SopData {
    id: number;
    nomor_sop: string;
    judul: string;
    kategori: string;
    deskripsi?: string;
    pengertian?: string;
    tujuan?: string;
    kebijakan?: string;
    prosedur?: string;
    unit_terkait?: string;

}

interface Props {
    sop: SopData;
}

export default function IsiSop({ sop }: Props) {
    const { data, setData, put, processing } = useForm({
        pengertian: sop.pengertian || '',
        tujuan: sop.tujuan || '',
        kebijakan: sop.kebijakan || '',
        prosedur: sop.prosedur || '',
        unit_terkait: sop.unit_terkait || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

        put(`/sop/${sop.id}/isisop`, {
            preserveScroll: true,
            onSuccess: () => {
            alert('Format dokumen SOP berhasil disimpan!');
            },
            onError: (errors) => {
            console.error('Gagal menyimpan:', errors);
            },
        });
    };

    return (
        <>
            <Head title={`Isi SOP - ${sop.judul}`} />

            <div className="flex h-full flex-1 flex-col gap-6 bg-slate-50 p-6">
                {/* Header Page */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/sop"
                            className="rounded-lg border border-slate-300 p-2 text-slate-600 transition-colors hover:bg-slate-100"
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                        <div>
                            <span className="font-mono text-xs font-bold text-indigo-600">{sop.nomor_sop}</span>
                            <h1 className="text-xl font-bold text-slate-900">{sop.judul}</h1>
                        </div>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={processing}
                        className="flex cursor-pointer items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
                    >
                        <Save className="h-4 w-4" />
                        Simpan Dokumen
                    </button>
                </div>

                {/* Form Format Pengisian SOP */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Card 1: Informasi Umum */}
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                        <h2 className="flex items-center gap-2 text-base font-semibold text-slate-900 border-b pb-2">
                            <FileCheck className="h-5 w-5 text-indigo-600" />
                            1. PENGERTIAN
                        </h2>
                        <div>
                            <textarea
                                value={data.pengertian}
                                onChange={(e) => setData('pengertian', e.target.value)}
                                rows={3}
                               // placeholder="Jelaskan tujuan dari pembuatan SOP ini..."
                                className="w-full rounded-lg border border-slate-300 p-3 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Card 2: Dasar Kebijakan */}
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                        <h2 className="flex items-center gap-2 text-base font-semibold text-slate-900 border-b pb-2">
                            <FileCheck className="h-5 w-5 text-indigo-600" />
                            2. TUJUAN
                        </h2>
                        <div>
                            <textarea
                                value={data.tujuan}
                                onChange={(e) => setData('tujuan', e.target.value)}
                                rows={3}
                               // placeholder="Masukkan nomor keputusan/peraturan yang menjadi dasar acuan..."
                                className="w-full rounded-lg border border-slate-300 p-3 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                        <h2 className="flex items-center gap-2 text-base font-semibold text-slate-900 border-b pb-2">
                            <FileCheck className="h-5 w-5 text-indigo-600" />
                            3. KEBIJAKAN
                        </h2>
                        <div>
                            <textarea
                                value={data.kebijakan}
                                onChange={(e) => setData('kebijakan', e.target.value)}
                                rows={3}
                               // placeholder="Masukkan nomor keputusan/peraturan yang menjadi dasar acuan..."
                                className="w-full rounded-lg border border-slate-300 p-3 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                            />
                        </div>
                    </div>

                     {/* Card 4: Langkah-langkah Prosedur */}
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                        <h2 className="flex items-center gap-2 text-base font-semibold text-slate-900 border-b pb-2">
                            <FileCheck className="h-5 w-5 text-indigo-600" />
                            4. PROSEDUR
                        </h2>
                        <div>
                            <textarea
                                value={data.prosedur}
                                onChange={(e) => setData('prosedur', e.target.value)}
                                rows={8}
                                //placeholder="1. Petugas melakukan pengecekan...&#10;2. Verifikasi data...&#10;3. Catat pada log sistem..."
                                className="w-full rounded-lg border border-slate-300 p-3 font-mono text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                            />
                        </div>
                    </div>

                     {/* Card 5: Langkah-langkah Prosedur */}
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                        <h2 className="flex items-center gap-2 text-base font-semibold text-slate-900 border-b pb-2">
                            <FileCheck className="h-5 w-5 text-indigo-600" />
                            5. UNIT TERKAIT
                        </h2>
                        <div>
                            <textarea
                                value={data.unit_terkait}
                                onChange={(e) => setData('unit_terkait', e.target.value)}
                                rows={8}
                                //placeholder="1. Petugas melakukan pengecekan...&#10;2. Verifikasi data...&#10;3. Catat pada log sistem..."
                                className="w-full rounded-lg border border-slate-300 p-3 font-mono text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                            />
                        </div>
                    </div>

                </form>
            </div>
        </>
    );
}
