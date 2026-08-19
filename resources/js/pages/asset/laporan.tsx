import { Head } from '@inertiajs/react';

import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Asset', href: '/asset/dataasset' },
    { title: 'Laporan', href: '/asset/laporan' },
];

interface AssetItem {
    id: number;
    kode_barang: string;
    nama_barang: string;
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
}

interface Props {
    assets: AssetItem[];
}

const KATEGORI_LABELS: Record<string, string> = {
    'Komputer': 'Komputer',
    'Laptop': 'Laptop',
    'Printer': 'Printer',
    'Scanner': 'Scanner',
    'Server': 'Server',
    'Network': 'Network',
    'Monitor': 'Monitor',
    'UPS': 'UPS',
    'Furniture': 'Furniture',
    'Kendaraan': 'Kendaraan',
    'Lainnya': 'Lainnya',
};

const STATUS_LABELS: Record<string, string> = {
    'aktif': 'Aktif',
    'rusak': 'Rusak',
    'diperbaiki': 'Diperbaiki',
    'dijual': 'Dijual',
};

export default function LaporanAsset({ assets }: Props) {
    const totalAssets = assets.length;
    const totalValue = assets.reduce((sum, asset) => sum + parseFloat(asset.harga_perolehan || '0'), 0);

    const kategoriStats = assets.reduce((acc, asset) => {
        acc[asset.kategori] = (acc[asset.kategori] || 0) + 1;

        return acc;
    }, {} as Record<string, number>);

    const statusStats = assets.reduce((acc, asset) => {
        acc[asset.status] = (acc[asset.status] || 0) + 1;

        return acc;
    }, {} as Record<string, number>);

    return (
        <>
            <Head title="Laporan Asset" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4 md:p-6">
                {/* Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Laporan Asset
                        </h1>
                        <p className="text-sm text-slate-500 mt-1">
                            Ringkasan dan statistik asset inventaris
                        </p>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-sm font-medium text-slate-600">Total Asset</p>
                        <p className="mt-2 text-3xl font-bold text-slate-900">{totalAssets}</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-sm font-medium text-slate-600">Total Nilai Asset</p>
                        <p className="mt-2 text-3xl font-bold text-slate-900">
                            Rp {totalValue.toLocaleString('id-ID')}
                        </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-sm font-medium text-slate-600">Kategori</p>
                        <p className="mt-2 text-3xl font-bold text-slate-900">
                            {Object.keys(kategoriStats).length}
                        </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-sm font-medium text-slate-600">Asset Aktif</p>
                        <p className="mt-2 text-3xl font-bold text-slate-900">
                            {statusStats['aktif'] || 0}
                        </p>
                    </div>
                </div>

                {/* Charts */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Kategori Chart */}
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-lg font-semibold text-slate-900">Asset per Kategori</h3>
                        <div className="space-y-3">
                            {Object.entries(kategoriStats).map(([kategori, count]) => {
                                const percentage = totalAssets > 0 ? (count / totalAssets) * 100 : 0;

                                return (
                                    <div key={kategori} className="space-y-1">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-slate-600">{KATEGORI_LABELS[kategori] || kategori}</span>
                                            <span className="font-medium text-slate-900">{count}</span>
                                        </div>
                                        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                                            <div
                                                className="h-full rounded-full bg-indigo-500 transition-all duration-500"
                                                style={{ width: `${percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                            {Object.keys(kategoriStats).length === 0 && (
                                <p className="text-sm text-slate-500">Belum ada data asset</p>
                            )}
                        </div>
                    </div>

                    {/* Status Chart */}
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-lg font-semibold text-slate-900">Status Asset</h3>
                        <div className="space-y-3">
                            {Object.entries(statusStats).map(([status, count]) => {
                                const percentage = totalAssets > 0 ? (count / totalAssets) * 100 : 0;
                                const colors: Record<string, string> = {
                                    'aktif': 'bg-green-500',
                                    'rusak': 'bg-red-500',
                                    'diperbaiki': 'bg-yellow-500',
                                    'dijual': 'bg-slate-500',
                                };

                                return (
                                    <div key={status} className="space-y-1">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-slate-600">{STATUS_LABELS[status] || status}</span>
                                            <span className="font-medium text-slate-900">{count}</span>
                                        </div>
                                        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                                            <div
                                                className={`h-full rounded-full transition-all duration-500 ${colors[status] || 'bg-slate-500'}`}
                                                style={{ width: `${percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                            {Object.keys(statusStats).length === 0 && (
                                <p className="text-sm text-slate-500">Belum ada data asset</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Detail Table */}
                <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="p-4 border-b border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-900">Detail Asset</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600">
                            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                                <tr>
                                    <th className="p-4">Kode Barang</th>
                                    <th className="p-4">Nama Barang</th>
                                    <th className="p-4">Kategori</th>
                                    <th className="p-4">Merk/Tipe</th>
                                    <th className="p-4">Serial Number</th>
                                    <th className="p-4">Harga Perolehan</th>
                                    <th className="p-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {assets.length > 0 ? (
                                    assets.map((asset) => (
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
                                            <td className="p-4 font-mono text-xs">{asset.serial_number || '-'}</td>
                                            <td className="p-4">
                                                {asset.harga_perolehan ? `Rp ${parseFloat(asset.harga_perolehan).toLocaleString('id-ID')}` : '-'}
                                            </td>
                                            <td className="p-4">
                                                <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                    asset.status === 'aktif' ? 'bg-green-50 text-green-700' :
                                                    asset.status === 'rusak' ? 'bg-red-50 text-red-700' :
                                                    asset.status === 'diperbaiki' ? 'bg-yellow-50 text-yellow-700' :
                                                    'bg-slate-50 text-slate-700'
                                                }`}>
                                                    {STATUS_LABELS[asset.status] || asset.status}
                                                </span>
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
                </div>
            </div>
        </>
    );
}

LaporanAsset.layout = { breadcrumbs };
