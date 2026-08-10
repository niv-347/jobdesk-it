import { Head, useForm, Link, router } from '@inertiajs/react';
import { ArrowLeft, Save, Clock, Plus } from 'lucide-react';
import type { FormEvent } from 'react';

import { create, index, store, update } from '@/routes/troubleshoot';
import type { BreadcrumbItem, TroubleshootData } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Troubleshoot', href: index() },
    { title: 'Tambah / Edit Troubleshoot', href: create() },
];

interface Props {
    troubleshoot?: TroubleshootData;
}

interface TroubleshootFormData {
    kategori_sistem: string;
    judul_masalah: string;
    deskripsi_masalah: string;
    gejala: string;
    penyebab: string;
    solusi_langkah: string;
    unit_pelapor: string;
    status: string;
    tingkat_urgensi: string;
    petugas_it: string;
}

export default function Form({ troubleshoot }: Props) {
    const isEdit = !!troubleshoot;

    const { data, setData, post, put, processing, errors } = useForm<TroubleshootFormData>({
        kategori_sistem: troubleshoot?.kategori_sistem || 'SIMRS',
        judul_masalah: troubleshoot?.judul_masalah || '',
        deskripsi_masalah: troubleshoot?.deskripsi_masalah || '',
        gejala: troubleshoot?.gejala || '',
        penyebab: troubleshoot?.penyebab || '',
        solusi_langkah: troubleshoot?.solusi_langkah || '',
        unit_pelapor: troubleshoot?.unit_pelapor || '',
        status: troubleshoot?.status || 'Selesai',
        tingkat_urgensi: troubleshoot?.tingkat_urgensi || 'Sedang',
        petugas_it: troubleshoot?.petugas_it || '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (isEdit) {
            put(update.url(troubleshoot.id));
        } else {
            post(store.url());
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <Head title={isEdit ? 'Edit Troubleshoot' : 'Tambah Troubleshoot'} />

            <div className="mx-auto max-w-4xl">
                <div className="mb-6 flex items-center justify-between">
                    <Link
                        href={index()}
                        className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Kembali ke List
                    </Link>
                    <h1 className="text-xl font-bold text-slate-800">
                        {isEdit ? `Edit Troubleshoot (${troubleshoot.kode_tiketing})` : 'Tambah Record Troubleshoot Baru'}
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Kategori Sistem</label>
                            <select
                                value={data.kategori_sistem}
                                onChange={(e) => setData('kategori_sistem', e.target.value)}
                                className="w-full rounded-lg border border-slate-300 p-2.5 text-sm"
                            >
                                <option value="SIMRS">SIMRS</option>
                                <option value="Jaringan / Network">Jaringan / Network</option>
                                <option value="Hardware / PC">Hardware / PC</option>
                                <option value="LIS (Laboratorium)">LIS (Laboratorium)</option>
                                <option value="PACS (Radiologi)">PACS (Radiologi)</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Status</label>
                            <select
                                value={data.status}
                                onChange={(e) => setData('status', e.target.value as any)}
                                className="w-full rounded-lg border border-slate-300 p-2.5 text-sm"
                            >
                                <option value="Pending">Pending</option>
                                <option value="Proses">Proses</option>
                                <option value="Selesai">Selesai</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Tingkat Urgensi</label>
                            <select
                                value={data.tingkat_urgensi}
                                onChange={(e) => setData('tingkat_urgensi', e.target.value as any)}
                                className="w-full rounded-lg border border-slate-300 p-2.5 text-sm"
                            >
                                <option value="Rendah">Rendah</option>
                                <option value="Sedang">Sedang</option>
                                <option value="Tinggi">Tinggi</option>
                                <option value="Kritis">Kritis</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Judul Masalah</label>
                        <input
                            type="text"
                            value={data.judul_masalah}
                            onChange={(e) => setData('judul_masalah', e.target.value)}
                            placeholder="Contoh: Error Gagal Simpan Resep Obat di SIMRS"
                            className="w-full rounded-lg border border-slate-300 p-2.5 text-sm"
                        />
                        {errors.judul_masalah && <p className="mt-1 text-xs text-red-500">{errors.judul_masalah}</p>}
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Unit Pelapor</label>
                            <input
                                type="text"
                                value={data.unit_pelapor}
                                onChange={(e) => setData('unit_pelapor', e.target.value)}
                                placeholder="Misal: Farmasi / Rawat Jalan"
                                className="w-full rounded-lg border border-slate-300 p-2.5 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Petugas IT Penanggung Jawab</label>
                            <input
                                type="text"
                                value={data.petugas_it}
                                onChange={(e) => setData('petugas_it', e.target.value)}
                                placeholder="Nama Petugas IT"
                                className="w-full rounded-lg border border-slate-300 p-2.5 text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Deskripsi Masalah</label>
                        <textarea
                            rows={3}
                            value={data.deskripsi_masalah}
                            onChange={(e) => setData('deskripsi_masalah', e.target.value)}
                            className="w-full rounded-lg border border-slate-300 p-2.5 text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Analisis Penyebab</label>
                        <textarea
                            rows={2}
                            value={data.penyebab}
                            onChange={(e) => setData('penyebab', e.target.value)}
                            className="w-full rounded-lg border border-slate-300 p-2.5 text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Langkah Solusi / Troubleshooting</label>
                        <textarea
                            rows={4}
                            value={data.solusi_langkah}
                            onChange={(e) => setData('solusi_langkah', e.target.value)}
                            className="w-full rounded-lg border border-slate-300 p-2.5 text-sm"
                        />
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-indigo-700"
                        >
                            <Save className="h-4 w-4" />
                            Simpan Data
                        </button>
                    </div>
                </form>

                {/* Timeline Section */}
                {isEdit && troubleshoot.timeline && troubleshoot.timeline.length > 0 && (
                    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-slate-900">
                            <Clock className="h-5 w-5 text-indigo-600" />
                            Timeline Aktivitas
                        </h3>
                        <div className="space-y-4">
                            {troubleshoot.timeline.map((item, index) => (
                                <div key={index} className="flex gap-4 border-l-2 border-indigo-200 pl-4 pb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-slate-900">{item.aksi}</span>
                                            <span className="text-xs text-slate-500">
                                                {new Date(item.timestamp).toLocaleString('id-ID')}
                                            </span>
                                        </div>
                                        {item.catatan && (
                                            <p className="mt-1 text-sm text-slate-600">{item.catatan}</p>
                                        )}
                                        <p className="mt-1 text-xs text-slate-400">oleh {item.user}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Add Timeline Form */}
                {isEdit && (
                    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-slate-900">
                            <Plus className="h-5 w-5 text-indigo-600" />
                            Tambah Timeline
                        </h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target as HTMLFormElement);
                                router.post(`/troubleshoot/${troubleshoot.id}/timeline`, {
                                    aksi: formData.get('aksi'),
                                    catatan: formData.get('catatan'),
                                });
                            }}
                            className="space-y-4"
                        >
                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">Aksi</label>
                                <input
                                    type="text"
                                    name="aksi"
                                    required
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                    placeholder="Contoh: Update status, Hubungi user, dll"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">Catatan</label>
                                <textarea
                                    name="catatan"
                                    rows={2}
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                    placeholder="Catatan tambahan..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700"
                            >
                                <Plus className="h-4 w-4" />
                                Tambah Timeline
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

Form.layout = {
    breadcrumbs,
};

