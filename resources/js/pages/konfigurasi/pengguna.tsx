import { Head, useForm } from '@inertiajs/react';
import { Edit, Loader2, Plus, Trash2, X } from 'lucide-react';
import { useState } from 'react';

import { konfigurasi } from '@/routes';
import type { BreadcrumbItem, Pegawai, User } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Konfigurasi', href: konfigurasi() },
    { title: 'Daftar Pegawai', href: '/konfigurasi/pengguna' },
];

interface Props {
    users: {
        data: (User & { pegawai: Pegawai | null })[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
    };
    search?: string;
    roles?: Array<{ id: number; name: string; slug: string }>;
}

const genderLabel = (v: string | null | undefined) => {
    if (!v) return '-';
    return v === 'L' ? 'Laki-laki' : 'Perempuan';
};

const statusLabel = (v: string | null | undefined) => {
    if (!v) return '-';
    return v === 'aktif'
        ? <span className="text-emerald-600">Aktif</span>
        : <span className="text-red-600">Nonaktif</span>;
};

export default function Pegawai({ users, search = '', roles = [] }: Props) {
    const [editingUser, setEditingUser] = useState<(User & { pegawai: Pegawai | null }) | null>(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState(search);

    const editForm = useForm({
        name: '',
        email: '',
        password: '',
        nip: '',
        nik: '',
        tempat_lahir: '',
        tanggal_lahir: '',
        jenis_kelamin: '',
        agama: '',
        alamat: '',
        no_telepon: '',
        jabatan: '',
        unit_kerja: '',
        golongan: '',
        pangkat: '',
        status: 'aktif',
    });

    const createForm = useForm({
        name: '',
        email: '',
        password: '',
        role_id: '',
        nip: '',
        nik: '',
        tempat_lahir: '',
        tanggal_lahir: '',
        jenis_kelamin: '',
        agama: '',
        alamat: '',
        no_telepon: '',
        jabatan: '',
        unit_kerja: '',
        golongan: '',
        pangkat: '',
        status: 'aktif',
    });

    const deleteForm = useForm({});

    const openEditModal = (user: User & { pegawai: Pegawai | null }) => {
        setEditingUser(user);
        const peg = user.pegawai;
        editForm.setData({
            name: user.name,
            email: user.email,
            password: '',
            nip: peg?.nip ?? '',
            nik: peg?.nik ?? '',
            tempat_lahir: peg?.tempat_lahir ?? '',
            tanggal_lahir: peg?.tanggal_lahir ?? '',
            jenis_kelamin: peg?.jenis_kelamin ?? '',
            agama: peg?.agama ?? '',
            alamat: peg?.alamat ?? '',
            no_telepon: peg?.no_telepon ?? '',
            jabatan: peg?.jabatan ?? '',
            unit_kerja: peg?.unit_kerja ?? '',
            golongan: peg?.golongan ?? '',
            pangkat: peg?.pangkat ?? '',
            status: peg?.status ?? 'aktif',
        });
        editForm.clearErrors();
    };

    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingUser) return;
        editForm.put(`/konfigurasi/pengguna/${editingUser.id}`, {
            onSuccess: () => {
                setEditingUser(null);
                editForm.reset();
            },
        });
    };

    const handleDelete = (user: User) => {
        if (confirm(`Apakah Anda yakin ingin menghapus pegawai "${user.name}"?`)) {
            deleteForm.delete(`/konfigurasi/pengguna/${user.id}`, {
                onSuccess: () => {
                    setEditingUser(null);
                },
            });
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const url = new URL(window.location.href);
        if (searchQuery) {
            url.searchParams.set('search', searchQuery);
        } else {
            url.searchParams.delete('search');
        }
        window.location.href = url.toString();
    };

    return (
        <>
            <Head title="Daftar Pegawai" />

            <div className="flex h-full flex-1 flex-col gap-6 bg-white p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                            Daftar Pegawai
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            Kelola data pegawai dan akun sistem di sini.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            setShowCreateModal(true);
                            createForm.reset();
                            createForm.clearErrors();
                        }}
                        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
                    >
                        <Plus className="h-4 w-4" />
                        Tambah Pegawai
                    </button>
                </div>

                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="border-b border-slate-200 p-4">
                        <form onSubmit={handleSearch} className="flex gap-2">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Cari nama, email, NIP, NIK, jabatan, unit kerja..."
                                className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
                            >
                                Cari
                            </button>
                        </form>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600">
                            <thead className="border-b border-slate-200 bg-slate-50 font-semibold text-slate-700">
                                <tr>
                                    <th className="p-3 whitespace-nowrap">Nama</th>
                                    <th className="p-3 whitespace-nowrap">Email</th>
                                    <th className="p-3 whitespace-nowrap">NIP</th>
                                    <th className="p-3 whitespace-nowrap">NIK</th>
                                    <th className="p-3 whitespace-nowrap">Tempat/Tgl Lahir</th>
                                    <th className="p-3 whitespace-nowrap">Jenis Kelamin</th>
                                    <th className="p-3 whitespace-nowrap">Agama</th>
                                    <th className="p-3 whitespace-nowrap">Jabatan</th>
                                    <th className="p-3 whitespace-nowrap">Unit Kerja</th>
                                    <th className="p-3 whitespace-nowrap">Gol/Pang</th>
                                    <th className="p-3 whitespace-nowrap">No Telp</th>
                                    <th className="p-3 whitespace-nowrap">Status</th>
                                    <th className="p-3 text-center whitespace-nowrap">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {users.data.length > 0 ? (
                                    users.data.map((user) => {
                                        const peg = user.pegawai;
                                        return (
                                            <tr
                                                key={user.id}
                                                className="transition-colors hover:bg-slate-50/80"
                                            >
                                                <td className="p-3 font-medium text-slate-900">
                                                    {user.name}
                                                </td>
                                                <td className="p-3 text-slate-600">
                                                    {user.email}
                                                </td>
                                                <td className="p-3 whitespace-nowrap">
                                                    {peg?.nip ?? <span className="text-slate-400">-</span>}
                                                </td>
                                                <td className="p-3 whitespace-nowrap">
                                                    {peg?.nik ?? <span className="text-slate-400">-</span>}
                                                </td>
                                                <td className="p-3 whitespace-nowrap">
                                                    {peg
                                                        ? [peg.tempat_lahir, peg.tanggal_lahir].filter(Boolean).join(' / ')
                                                        : <span className="text-slate-400">-</span>}
                                                </td>
                                                <td className="p-3 whitespace-nowrap">
                                                    {peg ? genderLabel(peg.jenis_kelamin) : <span className="text-slate-400">-</span>}
                                                </td>
                                                <td className="p-3 whitespace-nowrap">
                                                    {peg?.agama ?? <span className="text-slate-400">-</span>}
                                                </td>
                                                <td className="p-3 whitespace-nowrap">
                                                    {peg?.jabatan ?? <span className="text-slate-400">-</span>}
                                                </td>
                                                <td className="p-3 whitespace-nowrap">
                                                    {peg?.unit_kerja ?? <span className="text-slate-400">-</span>}
                                                </td>
                                                <td className="p-3 whitespace-nowrap">
                                                    {peg ? (
                                                        <span>
                                                            {peg.golongan ? <span>{peg.golongan}</span> : null}
                                                            {peg.pangkat && peg.golongan ? ' / ' + peg.pangkat : peg.pangkat || null}
                                                        </span>
                                                    ) : <span className="text-slate-400">-</span>}
                                                </td>
                                                <td className="p-3 whitespace-nowrap">
                                                    {peg?.no_telepon ?? <span className="text-slate-400">-</span>}
                                                </td>
                                                <td className="p-3 whitespace-nowrap">
                                                    {peg ? statusLabel(peg.status) : <span className="text-slate-400">-</span>}
                                                </td>
                                                <td className="p-3 text-center whitespace-nowrap">
                                                    <div className="space-x-2">
                                                        <button
                                                            onClick={() => openEditModal(user)}
                                                            className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
                                                        >
                                                            <Edit className="h-4 w-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(user)}
                                                            disabled={deleteForm.processing}
                                                            className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-red-600 transition-colors hover:text-red-700 disabled:opacity-50"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={13}
                                            className="p-8 text-center text-slate-400"
                                        >
                                            {search
                                                ? 'Tidak ada pegawai yang sesuai dengan pencarian.'
                                                : 'Belum ada data pegawai yang tersedia.'}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {users.last_page > 1 && (
                        <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3">
                            <div className="text-sm text-slate-600">
                                Menampilkan {users.data.length} dari {users.total} pegawai
                            </div>
                            <div className="flex gap-2">
                                {users.links.map((link, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            link.url && (window.location.href = link.url)
                                        }
                                        disabled={!link.url}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                        className={`rounded px-3 py-1 text-sm ${
                                            link.active
                                                ? 'bg-indigo-600 text-white'
                                                : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                                        } ${!link.url ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {editingUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
                    <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                            <h3 className="text-lg font-semibold text-slate-900">
                                Edit Pegawai
                            </h3>
                            <button
                                onClick={() => setEditingUser(null)}
                                className="cursor-pointer text-slate-400 transition-colors hover:text-slate-600"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleEditSubmit} className="space-y-4 p-6">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        value={editForm.data.name}
                                        onChange={(e) => editForm.setData('name', e.target.value)}
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                    />
                                    {editForm.errors.name && <p className="mt-1 text-xs text-red-500">{editForm.errors.name}</p>}
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Alamat Email</label>
                                    <input
                                        type="email"
                                        value={editForm.data.email}
                                        onChange={(e) => editForm.setData('email', e.target.value)}
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                    />
                                    {editForm.errors.email && <p className="mt-1 text-xs text-red-500">{editForm.errors.email}</p>}
                                </div>
                            </div>

                            <div className="border-t border-slate-200 pt-4">
                                <h4 className="mb-3 text-sm font-semibold text-slate-700">Data Identitas Pegawai</h4>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">NIP</label>
                                        <input type="text" value={editForm.data.nip} onChange={(e) => editForm.setData('nip', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                        {editForm.errors.nip && <p className="mt-1 text-xs text-red-500">{editForm.errors.nip}</p>}
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">NIK</label>
                                        <input type="text" value={editForm.data.nik} onChange={(e) => editForm.setData('nik', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                        {editForm.errors.nik && <p className="mt-1 text-xs text-red-500">{editForm.errors.nik}</p>}
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Tempat Lahir</label>
                                        <input type="text" value={editForm.data.tempat_lahir} onChange={(e) => editForm.setData('tempat_lahir', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Tanggal Lahir</label>
                                        <input type="date" value={editForm.data.tanggal_lahir} onChange={(e) => editForm.setData('tanggal_lahir', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Jenis Kelamin</label>
                                        <select value={editForm.data.jenis_kelamin} onChange={(e) => editForm.setData('jenis_kelamin', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none">
                                            <option value="">-- Pilih --</option>
                                            <option value="L">Laki-laki</option>
                                            <option value="P">Perempuan</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Agama</label>
                                        <input type="text" value={editForm.data.agama} onChange={(e) => editForm.setData('agama', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Alamat</label>
                                        <textarea value={editForm.data.alamat} onChange={(e) => editForm.setData('alamat', e.target.value)} rows={2} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">No. Telepon</label>
                                        <input type="text" value={editForm.data.no_telepon} onChange={(e) => editForm.setData('no_telepon', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Jabatan</label>
                                        <input type="text" value={editForm.data.jabatan} onChange={(e) => editForm.setData('jabatan', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Unit Kerja</label>
                                        <input type="text" value={editForm.data.unit_kerja} onChange={(e) => editForm.setData('unit_kerja', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Golongan</label>
                                        <input type="text" value={editForm.data.golongan} onChange={(e) => editForm.setData('golongan', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Pangkat</label>
                                        <input type="text" value={editForm.data.pangkat} onChange={(e) => editForm.setData('pangkat', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Status</label>
                                        <select value={editForm.data.status} onChange={(e) => editForm.setData('status', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none">
                                            <option value="aktif">Aktif</option>
                                            <option value="nonaktif">Nonaktif</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">Kata Sandi Baru <span className="font-normal text-slate-400">(Opsional)</span></label>
                                <input type="password" value={editForm.data.password} onChange={(e) => editForm.setData('password', e.target.value)} placeholder="Biarkan kosong jika tidak diubah" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                {editForm.errors.password && <p className="mt-1 text-xs text-red-500">{editForm.errors.password}</p>}
                            </div>

                            <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
                                <button type="button" onClick={() => setEditingUser(null)} className="cursor-pointer rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50">Batal</button>
                                <button type="submit" disabled={editForm.processing} className="flex cursor-pointer items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-60">
                                    {editForm.processing && <Loader2 className="h-4 animate-spin" />}
                                    Simpan Perubahan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {showCreateModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
                    <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                            <h3 className="text-lg font-semibold text-slate-900">Tambah Pegawai Baru</h3>
                            <button type="button" onClick={() => setShowCreateModal(false)} className="cursor-pointer text-slate-400 transition-colors hover:text-slate-600">
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); createForm.post('/konfigurasi/pengguna', { onSuccess: () => { setShowCreateModal(false); createForm.reset(); } }); }} className="space-y-4 p-6">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Nama Lengkap</label>
                                    <input type="text" value={createForm.data.name} onChange={(e) => createForm.setData('name', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    {createForm.errors.name && <p className="mt-1 text-xs text-red-500">{createForm.errors.name}</p>}
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Alamat Email</label>
                                    <input type="email" value={createForm.data.email} onChange={(e) => createForm.setData('email', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    {createForm.errors.email && <p className="mt-1 text-xs text-red-500">{createForm.errors.email}</p>}
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
                                    <input type="password" value={createForm.data.password} onChange={(e) => createForm.setData('password', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    {createForm.errors.password && <p className="mt-1 text-xs text-red-500">{createForm.errors.password}</p>}
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Role</label>
                                    <select value={createForm.data.role_id} onChange={(e) => createForm.setData('role_id', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none">
                                        <option value="">-- Pilih role --</option>
                                        {(roles ?? []).map((role) => (
                                            <option key={role.id} value={role.id}>
                                                {role.name}
                                            </option>
                                        ))}
                                    </select>
                                    {createForm.errors.role_id && <p className="mt-1 text-xs text-red-500">{createForm.errors.role_id}</p>}
                                </div>
                            </div>

                            <div className="border-t border-slate-200 pt-4">
                                <h4 className="mb-3 text-sm font-semibold text-slate-700">Data Identitas Pegawai</h4>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">NIP</label>
                                        <input type="text" value={createForm.data.nip} onChange={(e) => createForm.setData('nip', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                        {createForm.errors.nip && <p className="mt-1 text-xs text-red-500">{createForm.errors.nip}</p>}
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">NIK</label>
                                        <input type="text" value={createForm.data.nik} onChange={(e) => createForm.setData('nik', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                        {createForm.errors.nik && <p className="mt-1 text-xs text-red-500">{createForm.errors.nik}</p>}
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Tempat Lahir</label>
                                        <input type="text" value={createForm.data.tempat_lahir} onChange={(e) => createForm.setData('tempat_lahir', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Tanggal Lahir</label>
                                        <input type="date" value={createForm.data.tanggal_lahir} onChange={(e) => createForm.setData('tanggal_lahir', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Jenis Kelamin</label>
                                        <select value={createForm.data.jenis_kelamin} onChange={(e) => createForm.setData('jenis_kelamin', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none">
                                            <option value="">-- Pilih --</option>
                                            <option value="L">Laki-laki</option>
                                            <option value="P">Perempuan</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Agama</label>
                                        <input type="text" value={createForm.data.agama} onChange={(e) => createForm.setData('agama', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Alamat</label>
                                        <textarea value={createForm.data.alamat} onChange={(e) => createForm.setData('alamat', e.target.value)} rows={2} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">No. Telepon</label>
                                        <input type="text" value={createForm.data.no_telepon} onChange={(e) => createForm.setData('no_telepon', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Jabatan</label>
                                        <input type="text" value={createForm.data.jabatan} onChange={(e) => createForm.setData('jabatan', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Unit Kerja</label>
                                        <input type="text" value={createForm.data.unit_kerja} onChange={(e) => createForm.setData('unit_kerja', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Golongan</label>
                                        <input type="text" value={createForm.data.golongan} onChange={(e) => createForm.setData('golongan', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Pangkat</label>
                                        <input type="text" value={createForm.data.pangkat} onChange={(e) => createForm.setData('pangkat', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Status</label>
                                        <select value={createForm.data.status} onChange={(e) => createForm.setData('status', e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none">
                                            <option value="aktif">Aktif</option>
                                            <option value="nonaktif">Nonaktif</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
                                <button type="button" onClick={() => setShowCreateModal(false)} className="cursor-pointer rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50">Batal</button>
                                <button type="submit" disabled={createForm.processing} className="flex cursor-pointer items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-60">
                                    {createForm.processing && <Loader2 className="h-4 animate-spin" />}
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

Pegawai.layout = {
    breadcrumbs,
};