import { Head, router, useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { BookOpen, Edit, FilePlus, FileText, Filter, Loader2, Printer, Search, Trash2, X } from 'lucide-react';
import { useState } from 'react';

interface SopItem {
    id: number;
    nomor_sop: string;
    judul: string;
    kategori: string;
    deskripsi?: string;
    status?: string;
    file_path?: string;
}

interface Props {
    sops?: SopItem[];
    filters?: {
        search?: string;
        kategori?: string;
    };
}

export default function BuatSop({ sops = [], filters = {} }: Props) {
    // State Filter & Search
    const [search, setSearch] = useState(filters.search || '');
    const [kategori, setKategori] = useState(filters.kategori || '');

    // State Modal
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [editingSop, setEditingSop] = useState<SopItem | null>(null);

    // Form Hooks
    const createForm = useForm({
        nomor_sop: '',
        judul: '',
        kategori: 'IT',
        deskripsi: '',
        file: null as File | null,
    });

    const editForm = useForm({
        nomor_sop: '',
        judul: '',
        kategori: 'IT',
        deskripsi: '',
        file: null as File | null,
    });

    const deleteForm = useForm({});

    // Handler Filter (Mengirim request otomatis saat search/kategori berubah)
    const handleFilter = (newSearch: string, newKategori: string) => {
        router.get(
            '/sop',
            { search: newSearch, kategori: newKategori },
            {
                preserveState: true,
                replace: true,
            },
        );
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setSearch(val);
        handleFilter(val, kategori);
    };

    const handleKategoriChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        setKategori(val);
        handleFilter(search, val);
    };

    const handleResetFilter = () => {
        setSearch('');
        setKategori('');
        router.get('/sop', {}, { preserveState: true, replace: true });
    };

    // Handler Actions
    const handleCreateSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createForm.post('/sop', {
            onSuccess: () => {
                setIsCreateOpen(false);
                createForm.reset();
            },
        });
    };

    const openEditModal = (sop: SopItem) => {
        setEditingSop(sop);
        editForm.setData({
            nomor_sop: sop.nomor_sop,
            judul: sop.judul,
            kategori: sop.kategori,
            deskripsi: sop.deskripsi || '',
        });
        editForm.clearErrors();
    };

    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingSop) {
            editForm.put(`/sop/${editingSop.id}`, {
                onSuccess: () => {
                    setEditingSop(null);
                    editForm.reset();
                },
            });
        }
    };

    const handleDelete = (sop: SopItem) => {
        if (confirm(`Apakah Anda yakin ingin menghapus SOP "${sop.judul}"?`)) {
            deleteForm.delete(`/sop/${sop.id}`);
        }
    };

    return (
        <>
            <Head title="Manajemen SOP" />

            <div className="flex h-full flex-1 flex-col gap-6 bg-white p-6">
                {/* Header Page */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900">
                            <BookOpen className="h-6 w-6 text-indigo-600" />
                            Daftar Standard Operating Procedure (SOP)
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            Kelola daftar dokumen dan prosedur operasional standar sistem di sini.
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            createForm.reset();
                            createForm.clearErrors();
                            setIsCreateOpen(true);
                        }}
                        className="flex cursor-pointer items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                    >
                        <FilePlus className="h-4 w-4" />
                        Tambah File SOP
                    </button>
                </div>

                {/* Bar Filter & Pencarian */}
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-1 items-center gap-3">
                        {/* Input Search */}
                        <div className="relative flex-1 max-w-xs">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                value={search}
                                onChange={handleSearchChange}
                                placeholder="Cari nomor atau judul SOP..."
                                className="w-full rounded-lg border border-slate-300 pl-9 pr-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                            />
                        </div>

                        {/* Dropdown Filter Kategori */}
                        <div className="relative flex items-center">
                            <Filter className="absolute left-3 h-4 w-4 text-slate-400" />
                            <select
                                value={kategori}
                                onChange={handleKategoriChange}
                                className="rounded-lg border border-slate-300 pl-9 pr-8 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none bg-white cursor-pointer"
                            >
                                <option value="">Semua Kategori</option>
                                <option value="IT">IT & SIMRS</option>
                                <option value="Pelayanan">Pelayanan</option>
                                <option value="Medis">Medis</option>
                                <option value="Umum">Umum</option>
                            </select>
                        </div>

                        {/* Tombol Reset Filter */}
                        {(search || kategori) && (
                            <button
                                onClick={handleResetFilter}
                                className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                            >
                                Reset Filter
                            </button>
                        )}
                    </div>
                </div>

                {/* Table SOP */}
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <table className="w-full text-left text-sm text-slate-600">
                        <thead className="border-b border-slate-200 bg-slate-50 font-semibold text-slate-700">
                            <tr>
                                <th className="p-4">Nomor SOP</th>
                                <th className="p-4">Judul SOP</th>
                                <th className="p-4">Kategori</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Deskripsi</th>
                                <th className="p-4 text-center">Aksi</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">
                            {sops.length > 0 ? (
                                sops.map((sop) => (
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
                                        <td className="p-4">
                                            <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium ${
                                                sop.status === 'approved' ? 'bg-green-50 text-green-700' :
                                                sop.status === 'rejected' ? 'bg-red-50 text-red-700' :
                                                'bg-yellow-50 text-yellow-700'
                                            }`}>
                                                {sop.status === 'approved' ? 'Disetujui' : sop.status === 'rejected' ? 'Ditolak' : 'Pending'}
                                            </span>
                                        </td>
                                        <td className="max-w-xs truncate p-4 text-slate-500">
                                            {sop.deskripsi || '-'}
                                        </td>
                                        <td className="space-x-2 p-4 text-center">
                                            {/* Tombol Isi SOP (Membuka Halaman Baru) */}
                                        <div className="flex items-center justify-center gap-2">
                                            <Link
                                                href={`/sop/${sop.id}/isisop`}
                                                className="rounded p-1.5 text-slate-600 hover:bg-slate-100 hover:text-amber-600"
                                            >
                                                <FileText className="h-4 w-4" />

                                            </Link>
                                            {/* Tombol Cetak (Membuka halaman cetak di tab baru) */}
                                                <a
                                                    href={`/sop/${sop.id}/cetak`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="rounded p-1.5 text-slate-600 hover:bg-slate-100 hover:text-amber-600"
                                                >
                                                    <Printer className="h-4 w-4" />

                                                </a>
                                            <button
                                                onClick={() => openEditModal(sop)}
                                                 className="rounded p-1.5 text-slate-600 hover:bg-slate-100 hover:text-amber-600"
                                                    title="Edit Data"
                                            >
                                                <Edit className="h-4 w-4" />

                                            </button>
                                            <button
                                                onClick={() => handleDelete(sop)}
                                                disabled={deleteForm.processing}
                                                className="rounded p-1.5 text-slate-600 hover:bg-slate-100 hover:text-rose-600"
                                            >
                                                <Trash2 className="h-4 w-4" />

                                            </button>
                                        </div>
                                        </td>

                                    </tr>
                                ))
                            ) : (
                                    <tr>
                                        <td colSpan={6} className="p-8 text-center text-slate-400">
                                            Data SOP tidak ditemukan.
                                        </td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Tambah SOP */}
            {isCreateOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
                    <div className="w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                            <h3 className="text-lg font-semibold text-slate-900">Tambah SOP Baru</h3>
                            <button
                                onClick={() => setIsCreateOpen(false)}
                                className="cursor-pointer text-slate-400 transition-colors hover:text-slate-600"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleCreateSubmit} className="space-y-4 p-6">
                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">Nomor SOP</label>
                                <input
                                    type="text"
                                    value={createForm.data.nomor_sop}
                                    onChange={(e) => createForm.setData('nomor_sop', e.target.value)}
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                />
                                {createForm.errors.nomor_sop && (
                                    <p className="mt-1 text-xs text-red-500">{createForm.errors.nomor_sop}</p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">Judul SOP</label>
                                <input
                                    type="text"
                                    value={createForm.data.judul}
                                    onChange={(e) => createForm.setData('judul', e.target.value)}
                                   // placeholder="Prosedur Backup Database"
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                />
                                {createForm.errors.judul && (
                                    <p className="mt-1 text-xs text-red-500">{createForm.errors.judul}</p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">Kategori</label>
                                <select
                                    value={createForm.data.kategori}
                                    onChange={(e) => createForm.setData('kategori', e.target.value)}
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                >
                                    <option value="IT">IT & SIMRS</option>
                                    <option value="Pelayanan">Pelayanan</option>
                                    <option value="Medis">Medis</option>
                                    <option value="Umum">Umum</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">Deskripsi</label>
                                <textarea
                                    value={createForm.data.deskripsi}
                                    onChange={(e) => createForm.setData('deskripsi', e.target.value)}
                                    rows={3}
                                    //placeholder="Catatan ringkas penanganan..."
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">Upload File (PDF, DOC, XLS)</label>
                                <input
                                    type="file"
                                    onChange={(e) => createForm.setData('file', e.target.files?.[0] || null)}
                                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                />
                                {createForm.errors.file && (
                                    <p className="mt-1 text-xs text-red-500">{createForm.errors.file}</p>
                                )}
                            </div>

                            <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsCreateOpen(false)}
                                    className="cursor-pointer rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={createForm.processing}
                                    className="flex cursor-pointer items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-60"
                                >
                                    {createForm.processing && <Loader2 className="h-4 w-4 animate-spin" />}
                                    Simpan SOP
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal Edit SOP */}
            {editingSop && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
                    <div className="w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                            <h3 className="text-lg font-semibold text-slate-900">Edit SOP</h3>
                            <button
                                onClick={() => setEditingSop(null)}
                                className="cursor-pointer text-slate-400 transition-colors hover:text-slate-600"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleEditSubmit} className="space-y-4 p-6">
                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">Nomor SOP</label>
                                <input
                                    type="text"
                                    value={editForm.data.nomor_sop}
                                    onChange={(e) => editForm.setData('nomor_sop', e.target.value)}
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                />
                                {editForm.errors.nomor_sop && (
                                    <p className="mt-1 text-xs text-red-500">{editForm.errors.nomor_sop}</p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">Judul SOP</label>
                                <input
                                    type="text"
                                    value={editForm.data.judul}
                                    onChange={(e) => editForm.setData('judul', e.target.value)}
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                />
                                {editForm.errors.judul && (
                                    <p className="mt-1 text-xs text-red-500">{editForm.errors.judul}</p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-semibold text-slate-700">Kategori</label>
                                <select
                                    value={editForm.data.kategori}
                                    onChange={(e) => editForm.setData('kategori', e.target.value)}
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                >
                                    <option value="IT">IT & SIMRS</option>
                                    <option value="Pelayanan">Pelayanan</option>
                                    <option value="Medis">Medis</option>
                                    <option value="Umum">Umum</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-semibold text-slate-700">Deskripsi</label>
                                <textarea
                                    value={editForm.data.deskripsi}
                                    onChange={(e) => editForm.setData('deskripsi', e.target.value)}
                                    rows={3}
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">Upload File (PDF, DOC, XLS)</label>
                                <input
                                    type="file"
                                    onChange={(e) => editForm.setData('file', e.target.files?.[0] || null)}
                                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                />
                                {editForm.errors.file && (
                                    <p className="mt-1 text-xs text-red-500">{editForm.errors.file}</p>
                                )}
                            </div>

                            <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setEditingSop(null)}
                                    className="cursor-pointer rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={editForm.processing}
                                    className="flex cursor-pointer items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-60"
                                >
                                    {editForm.processing && <Loader2 className="h-4 w-4 animate-spin" />}
                                    Simpan Perubahan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
