import { Head } from '@inertiajs/react';
import { useState } from 'react';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Visum', href: '/visum' },
    { title: 'Cetak', href: '/visum/cetak' },
];

interface VisumCetak {
    id: number;
    tanggal: string;
    tanggal_raw: string;
    kegiatan: string;
    keterangan?: string;
}

interface Props {
    user: {
        name: string;
        jabatan: string;
        perangkat_daerah: string;
    };
    monthName: string;
    visums: VisumCetak[];
}

interface GroupedVisum {
    tanggal: string;
    tanggal_raw: string;
    items: { kegiatan: string; keterangan?: string }[];
}

export default function VisumCetak({ user, monthName, visums }: Props) {
    const [fontSize, setFontSize] = useState<number>(12); // dalam px, berlaku untuk hasil cetak

    // Group activities that share the same date into a single table row.
    const grouped: GroupedVisum[] = Object.values(
        visums.reduce((acc, v) => {
            const key = v.tanggal_raw;

            if (!acc[key]) {
                acc[key] = {
                    tanggal: v.tanggal,
                    tanggal_raw: v.tanggal_raw,
                    items: [],
                };
            }

            acc[key].items.push({ kegiatan: v.kegiatan, keterangan: v.keterangan });

            return acc;
        }, {} as Record<string, GroupedVisum>),
    );

    return (
        <>
            <Head title="Cetak Visum" />

            <style>{`
                .visum-cetak {
                    font-size: ${fontSize}px;
                }
                @media print {
                    @page {
                        size: A4;
                        margin: 20mm;
                    }
                    body {
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                }
            `}</style>

            <div className="visum-cetak mx-auto max-w-4xl space-y-6 bg-white p-8">
                {/* Header */}
                <div className="text-center">
                    <h1 className="font-bold uppercase">
                        DAFTAR PENILAIAN PELAKSANAAN PEKERJAAN NON APARATUR SIPIL NEGARA
                    </h1>
                </div>

                {/* User Info */}
                <div className="space-y-1">
                    <div className="flex">
                        <span className="w-40">Nama</span>
                        <span className="w-4">:</span>
                        <span className="font-semibold">{user.name}</span>
                    </div>
                    <div className="flex">
                        <span className="w-40">Jabatan</span>
                        <span className="w-4">:</span>
                        <span>{user.jabatan}</span>
                    </div>
                    <div className="flex">
                        <span className="w-40">Perangkat Daerah</span>
                        <span className="w-4">:</span>
                        <span>{user.perangkat_daerah}</span>
                    </div>
                    <div className="flex">
                        <span className="w-40">Bulan</span>
                        <span className="w-4">:</span>
                        <span>{monthName}</span>
                    </div>
                </div>

                {/* Table: Hasil Kerja */}
                <table className="w-full border-collapse border border-black">
                    <thead>
                        <tr>
                            <th colSpan={2} className="border border-black bg-gray-100 p-2 text-center font-bold uppercase">
                                Hasil Kerja
                            </th>
                        </tr>
                        <tr>
                            <th className="border border-black p-2 text-center font-semibold">Tanggal</th>
                            <th className="border border-black p-2 text-center font-semibold">Uraian Kerja</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grouped.length === 0 ? (
                            <tr>
                                <td colSpan={2} className="border border-black p-2 text-center italic">
                                    Tidak ada kegiatan visum pada bulan ini
                                </td>
                            </tr>
                        ) : (
                            grouped.map((group) => (
                                <tr key={group.tanggal_raw} className="align-top">
                                    <td className="border border-black p-2 text-center whitespace-nowrap">
                                        {group.tanggal}
                                    </td>
                                    <td className="border border-black p-2">
                                        <ul className="list-disc pl-4 space-y-1">
                                            {group.items.map((item, idx) => (
                                                <li key={idx}>
                                                    <span className="whitespace-pre-line">{item.kegiatan}</span>
                                                    {item.keterangan && (
                                                        <span className="block italic text-gray-600 whitespace-pre-line">
                                                            {item.keterangan}
                                                        </span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                {/* Table: Perilaku Kerja */}
                <table className="w-full border-collapse border border-black">
                    <thead>
                        <tr>
                            <th colSpan={2} className="border border-black bg-gray-100 p-2 text-center font-bold uppercase">
                                Perilaku Kerja (Di Isi Oleh Atasan Langsung)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-black p-2 font-semibold w-1/2">Disiplin Kehadiran</td>
                            <td className="border border-black p-2 text-gray-500">(Baik / Sedang / Cukup / Kurang)</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 font-semibold">Kerjasama</td>
                            <td className="border border-black p-2 text-gray-500">(Baik / Sedang / Cukup / Tidak Baik)</td>
                        </tr>
                    </tbody>
                </table>

                {/* Footer / Signatures */}
                <div className="mt-8 flex justify-between">
                    <div className="text-center">
                        <p className="mb-1">Yang di Nilai</p>
                        <p className="mt-16 font-semibold underline">{user.name}</p>
                    </div>
                    <div className="text-center">
                        <p className="mb-1">Atasan Langsung</p>
                        <p className="mt-16 font-semibold underline">dr. Dedi Rudi Komara, M.M</p>
                    </div>
                </div>

                {/* Print Controls */}
                <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
                    <div className="flex items-center gap-2">
                        <label htmlFor="font-size" className="text-sm font-medium text-gray-700">
                            Ukuran Font Cetak
                        </label>
                        <select
                            id="font-size"
                            value={fontSize}
                            onChange={(e) => setFontSize(Number(e.target.value))}
                            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                        >
                            <option value={10}>Kecil (10px)</option>
                            <option value={12}>Normal (12px)</option>
                            <option value={14}>Sedang (14px)</option>
                            <option value={16}>Besar (16px)</option>
                            <option value={18}>Sangat Besar (18px)</option>
                        </select>
                    </div>
                    <button
                        onClick={() => window.print()}
                        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                        Cetak / Save as PDF
                    </button>
                </div>
            </div>
        </>
    );
}

VisumCetak.layout = { breadcrumbs };
