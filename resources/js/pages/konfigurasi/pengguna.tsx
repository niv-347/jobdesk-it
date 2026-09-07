import { Head, useForm } from '@inertiajs/react';
import { Edit, Loader2, Trash2, X } from 'lucide-react';
import { useState } from 'react';

import { konfigurasi } from '@/routes';
import { pengguna } from '@/routes/konfigurasi';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Konfigurasi', href: konfigurasi() },
    { title: 'Daftar Pegawai', href: pengguna() },
];

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
}

interface Props {
    users: {
        data: User[];
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
}

export default function Pegawai({ users, search = '' }: Props) {
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [searchQuery, setSearchQuery] = useState(search);

    const editForm = useForm({
        name: '',
        email: '',
        password: '',
    });

    const deleteForm = useForm({});

    const openEditModal = (user: User) => {
        setEditingUser(user);
        editForm.setData({
            name: user.name,
            email: user.email,
            password: '',
        });
        editForm.clearErrors();
    };

    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!editingUser) {
            return;
        }

        editForm.put(`/konfigurasi/pengguna/${editingUser.id}`, {
            onSuccess: () => {
                setEditingUser(null);
                editForm.reset();
            },
        });
    };

    const handleDelete = (user: User) => {
        if (
            confirm(`Apakah Anda yakin ingin menghapus pegawai "${user.name}"?`)
        ) {
            deleteForm.delete(`/konfigurasi/pengguna/${user.id}`);
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
                </div>

                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="border-b border-slate-200 p-4">
                        <form onSubmit={handleSearch} className="flex gap-2">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Cari nama atau email..."
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

                    <table className="w-full text-left text-sm text-slate-600">
                        <thead className="border-b border-slate-200 bg-slate-50 font-semibold text-slate-700">
                            <tr>
                                <th className="p-4">Nama</th>
                                <th className="p-4">Email</th>
                                <th className="p-4">Email Terverifikasi</th>
                                <th className="p-4 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {users.data.length > 0 ? (
                                users.data.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="transition-colors hover:bg-slate-50/80"
                                    >
                                        <td className="p-4 font-medium text-slate-900">
                                            {user.name}
                                        </td>
                                        <td className="p-4 text-slate-600">
                                            {user.email}
                                        </td>
                                        <td className="p-4 text-slate-600">
                                            {user.email_verified_at ? (
                                                <span className="text-emerald-600">
                                                    Terverifikasi
                                                </span>
                                            ) : (
                                                <span className="text-slate-400">
                                                    Belum diverifikasi
                                                </span>
                                            )}
                                        </td>
                                        <td className="space-x-2 p-4 text-center">
                                            <button
                                                onClick={() =>
                                                    openEditModal(user)
                                                }
                                                className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
                                            >
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(user)
                                                }
                                                disabled={deleteForm.processing}
                                                className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-red-600 transition-colors hover:text-red-700 disabled:opacity-50"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={4}
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

                    {users.last_page > 1 && (
                        <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3">
                            <div className="text-sm text-slate-600">
                                Menampilkan {users.data.length} dari{' '}
                                {users.total} pegawai
                            </div>
                            <div className="flex gap-2">
                                {users.links.map((link, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            link.url &&
                                            (window.location.href = link.url)
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
                    <div className="w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
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

                        <form
                            onSubmit={handleEditSubmit}
                            className="space-y-4 p-6"
                        >
                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    value={editForm.data.name}
                                    onChange={(e) =>
                                        editForm.setData('name', e.target.value)
                                    }
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                />
                                {editForm.errors.name && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {editForm.errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">
                                    Alamat Email
                                </label>
                                <input
                                    type="email"
                                    value={editForm.data.email}
                                    onChange={(e) =>
                                        editForm.setData(
                                            'email',
                                            e.target.value,
                                        )
                                    }
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                />
                                {editForm.errors.email && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {editForm.errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">
                                    Kata Sandi Baru{' '}
                                    <span className="font-normal text-slate-400">
                                        (Opsional)
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    value={editForm.data.password}
                                    onChange={(e) =>
                                        editForm.setData(
                                            'password',
                                            e.target.value,
                                        )
                                    }
                                    placeholder="Biarkan kosong jika tidak diubah"
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                                />
                                {editForm.errors.password && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {editForm.errors.password}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setEditingUser(null)}
                                    className="cursor-pointer rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={editForm.processing}
                                    className="flex cursor-pointer items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-60"
                                >
                                    {editForm.processing && (
                                        <Loader2 className="h-4 animate-spin" />
                                    )}
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

Pegawai.layout = {
    breadcrumbs,
};
