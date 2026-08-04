import { Head } from '@inertiajs/react';
import { ArrowLeft, Printer } from 'lucide-react';

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
    created_at?: string;
}

interface Props {
    sop: SopData;
}

export default function CetakSop({ sop }: Props) {
    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <Head title={`Cetak SOP - ${sop.judul}`} />

            {/* CSS Cetak & Paged Media */}
            <style>{`
                @page {
                    size: A4 portrait;
                    margin: 12mm 15mm 12mm 15mm;
                }

                @media print {
                    .no-print {
                        display: none !important;
                    }

                    html, body {
                        background-color: #ffffff !important;
                        color: #000000 !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        overflow: visible !important;
                        height: auto !important;
                    }

                    .print-wrapper {
                        padding: 0 !important;
                        margin: 0 !important;
                        background: white !important;
                    }

                    .a4-container {
                        box-shadow: none !important;
                        border: none !important;
                        padding: 0 !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        margin: 0 !important;
                    }

                    /* Mengulang Kop Header di Setiap Halaman */
                    thead.print-header-repeat {
                        display: table-header-group;
                    }

                    tr.print-row {
                        page-break-inside: auto;
                    }

                    /* Penomoran Halaman Otomatis oleh Browser */
                    .page-number::after {
                        content: counter(page) " / " counter(pages);
                    }
                }

                thead.print-header-repeat {
                    display: table-header-group;
                }

                .page-number::after {
                    content: "1 / 2";
                }
            `}</style>

            <div className="print-wrapper min-h-screen bg-slate-100 p-4 md:p-8 print:min-h-0 print:bg-white print:p-0">
                {/* Navbar Aksion (Diabaikan saat Print) */}
                <div className="no-print mx-auto mb-6 flex max-w-[210mm] items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <button
                        onClick={() => window.history.back()}
                        className="flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Kembali
                    </button>
                    <button
                        onClick={handlePrint}
                        className="flex cursor-pointer items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                    >
                        <Printer className="h-4 w-4" />
                        Cetak Dokumen (A4)
                    </button>
                </div>

                {/* Lembar Kerja A4 Utama */}
                <div className="a4-container mx-auto min-h-[297mm] w-[210mm] border border-slate-300 bg-white p-8 font-sans text-[11px] leading-relaxed text-black shadow-md print:m-0 print:w-full print:border-none print:p-0 print:shadow-none">
                    <table className="w-full border-collapse">
                        {/* KOP HEADER SOP (Berulang Otomatis di Halaman 2) */}
                        <thead className="print-header-repeat">
                            <tr>
                                <td className="pb-0">
                                    <table className="w-full border-collapse border-2 border-black">
                                        <tbody>
                                            <tr>
                                                {/* Logo & Identitas Instansi */}
                                                <td className="w-[30%] border-b border-r-2 border-black p-2 text-center align-middle">
                                                    <img
                                                        src="/images/logo-rsud.png"
                                                        alt="Logo RSUD Bedas Kertasari"
                                                        className="mx-auto mb-1 h-14 w-14 object-contain"
                                                    />
                                                    <div className="text-[10px] font-bold text-slate-700">REPEH RAPIH KERTA RAHARJA</div>
                                                    <div className="text-xs font-extrabold uppercase text-black">RSUD BEDAS KERTASARI</div>
                                                    <div className="text-[10px] font-bold text-slate-800">KABUPATEN BANDUNG</div>
                                                </td>

                                                {/* Judul Dokumen SOP */}
                                                <td className="w-[42%] border-b border-r-2 border-black p-2 text-center align-middle text-xs font-black uppercase leading-tight">
                                                    {sop.judul || 'NON-DISCLOSURE AGREEMENT (NDA) VENDOR/MITRA BISNIS SISTEM INFORMASI'}
                                                </td>

                                                {/* Meta Informasi Dokumen */}
                                                <td className="w-[28%] border-b border-black p-0 align-top">
                                                    <table className="w-full border-collapse text-[10px]">
                                                        <tbody>
                                                            <tr className="border-b border-black">
                                                                <td className="border-r border-black p-1 font-semibold">No. Dokumen:</td>
                                                                <td className="p-1 font-mono font-bold">{sop.nomor_sop || '000.8.3.3/0001/RSUD/2026'}</td>
                                                            </tr>
                                                            <tr className="border-b border-black">
                                                                <td className="border-r border-black p-1 font-semibold">No. Revisi:</td>
                                                                <td className="p-1 font-bold">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="border-r border-black p-1 font-semibold">Halaman:</td>
                                                                <td className="p-1 font-bold">
                                                                    <span className="page-number"></span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>

                                            {/* Sub Header (SPO, Tanggal Terbit, Direktur) */}
                                            <tr>
                                                <td className="border-r-2 border-black p-2 text-center align-middle text-xs font-black uppercase">
                                                    STANDAR PROSEDUR OPERASIONAL (SPO)
                                                </td>
                                                <td className="border-r-2 border-black p-1.5 text-center align-top">
                                                    <div className="font-bold text-[10px]">Tanggal Terbit:</div>
                                                    <div className="mt-1 font-medium">
                                                        {sop.created_at ? new Date(sop.created_at).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }) : 'Januari 2026'}
                                                    </div>
                                                </td>
                                                <td className="p-1.5 text-center align-top">
                                                    <div className="font-bold text-[10px]">Ditetapkan Oleh:</div>
                                                    <div className="text-[9px] font-semibold">Direktur RSUD Bedas Kertasari</div>
                                                    <div className="h-10"></div>
                                                    <div className="text-[11px] font-extrabold underline">dr. Dedi Rudi Komara</div>
                                                    <div className="text-[9px]">Pembina</div>
                                                    <div className="text-[9px]">NIP. 197505152005011010</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </thead>

                        {/* ISIKAN KONTEN UTAMA DOKUMEN SOP */}
                        <tbody>
                            <tr className="print-row">
                                <td>
                                    <table className="w-full border-collapse border-2 border-t-0 border-black">
                                        <tbody>
                                            {/* PENGERTIAN */}
                                            <tr className="border-b border-black">
                                                <td className="w-[20%] border-r-2 border-black p-2.5 align-top font-bold uppercase">
                                                    PENGERTIAN
                                                </td>
                                                <td className="p-2.5 text-justify leading-relaxed whitespace-pre-line align-top">
                                                    {sop.pengertian}
                                                </td>
                                            </tr>

                                            {/* TUJUAN */}
                                            <tr className="border-b border-black">
                                                <td className="border-r-2 border-black p-2.5 align-top font-bold uppercase">
                                                    TUJUAN
                                                </td>
                                                <td className="p-2.5 text-justify leading-relaxed whitespace-pre-line align-top">
                                                    {sop.tujuan}
                                                </td>
                                            </tr>

                                            {/* KEBIJAKAN */}
                                            <tr className="border-b border-black">
                                                <td className="border-r-2 border-black p-2.5 align-top font-bold uppercase">
                                                    KEBIJAKAN
                                                </td>
                                                <td className="p-2.5 text-justify leading-relaxed whitespace-pre-line align-top">
                                                    {sop.kebijakan}
                                                </td>
                                            </tr>

                                            {/* PROSEDUR */}
                                            <tr className="border-b border-black">
                                                <td className="border-r-2 border-black p-2.5 align-top font-bold uppercase">
                                                    PROSEDUR
                                                </td>
                                                <td className="p-2.5 text-justify leading-relaxed whitespace-pre-line align-top">
                                                    {sop.prosedur}
                                                </td>
                                            </tr>

                                            {/* UNIT TERKAIT */}
                                            <tr>
                                                <td className="border-r-2 border-black p-2.5 align-top font-bold uppercase">
                                                    UNIT TERKAIT
                                                </td>
                                                <td className="p-2.5 text-justify leading-relaxed whitespace-pre-line align-top">
                                                    {sop.unit_terkait}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
