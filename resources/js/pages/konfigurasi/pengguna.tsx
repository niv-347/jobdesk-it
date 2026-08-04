import { Head, useForm } from '@inertiajs/react';
import { Edit2, Loader2, Trash2, UserPlus, Users, X } from 'lucide-react';
import { useState } from 'react';

import { konfigurasi } from '@/routes';
import { pengguna } from '@/routes/konfigurasi';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Konfigurasi', href: konfigurasi() },
    { title: 'Pengguna', href: pengguna() },
];

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    users?: User[];
}

export default function Pengguna({ users = [] }: Props) {
    // State Modal
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);

    // Form Tambah
    const createForm = useForm({
        name: '',
        email: '',
        password: '',
    });

    // Form Edit
    const editForm = useForm({
        name: '',
        email: '',
        password: '',
    });

    // Form Hapus (menggunakan instance form untuk handling status processing)
    const deleteForm = useForm({});

    // Handler Tambah
    const handleCreateSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createForm.post('/konfigurasi/pengguna', {
            onSuccess: () => {
                setIsCreateOpen(false);
                createForm.reset();
            },
        });
    };

    // Handler Buka Edit Modal
    const openEditModal = (user: User) => {
        setEditingUser(user);
        editForm.setData({
            name: user.name,
            email: user.email,
            password: '', // Biarkan kosong jika tidak ingin mengubah password
        });
        editForm.clearErrors();
    };

    // Handler Edit Submit
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

    // Handler Hapus
    const handleDelete = (user: User) => {
        if (confirm(`Apakah Anda yakin ingin menghapus pengguna "${user.name}"?`)) {
            deleteForm.delete(`/konfigurasi/pengguna/${user.id}`);
        }
    };

    return (
        <>
            <Head title="Manajemen Pengguna" />

            <div className="flex h-full flex-1 flex-col gap-6 p-6 bg-white">
                {/* Header Page */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
                            <Users className="w-6 h-6 text-indigo-600" />
                            Manajemen Pengguna
                        </h1>
                        <p className="text-sm text-slate-500 mt-1">
                            Kelola daftar pengguna dan hak akses sistem di sini.
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            createForm.reset();
                            createForm.clearErrors();
                            setIsCreateOpen(true);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm cursor-pointer"
                    >
                        <UserPlus className="w-4 h-4" />
                        Tambah Pengguna
                    </button>
                </div>

                {/* Table Container */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                    <table className="w-full text-left text-sm text-slate-600">
                        <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                            <tr>
                                <th className="p-4">Nama</th>
                                <th className="p-4">Email</th>
                                <th className="p-4 text-right">Aksi</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user.id} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="p-4 font-medium text-slate-900">{user.name}</td>
                                        <td className="p-4 text-slate-600">{user.email}</td>
                                        <td className="p-4 text-right space-x-2">
                                            <button
                                                onClick={() => openEditModal(user)}
                                                className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer"
                                            >
                                                <Edit2 className="w-3.5 h-3.5" />
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(user)}
                                                disabled={deleteForm.processing}
                                                className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 transition-colors cursor-pointer disabled:opacity-50"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="p-8 text-center text-slate-400">
                                        Belum ada data pengguna yang tersedia.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Form Tambah */}
            {isCreateOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md border border-slate-200 overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                            <h3 className="text-lg font-semibold text-slate-900">Tambah Pengguna Baru</h3>
                            <button
                                onClick={() => setIsCreateOpen(false)}
                                className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleCreateSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                                <input
                                    type="text"
                                    value={createForm.data.name}
                                    onChange={(e) => createForm.setData('name', e.target.value)}
                                    placeholder="Masukkan nama pengguna"
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-600"
                                />
                                {createForm.errors.name && <p className="text-xs text-red-500 mt-1">{createForm.errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Alamat Email</label>
                                <input
                                    type="email"
                                    value={createForm.data.email}
                                    onChange={(e) => createForm.setData('email', e.target.value)}
                                    placeholder="contoh@email.com"
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-600"
                                />
                                {createForm.errors.email && <p className="text-xs text-red-500 mt-1">{createForm.errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Kata Sandi</label>
                                <input
                                    type="password"
                                    value={createForm.data.password}
                                    onChange={(e) => createForm.setData('password', e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-600"
                                />
                                {createForm.errors.password && <p className="text-xs text-red-500 mt-1">{createForm.errors.password}</p>}
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setIsCreateOpen(false)}
                                    className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors cursor-pointer"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={createForm.processing}
                                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer disabled:opacity-60"
                                >
                                    {createForm.processing && <Loader2 className="w-4 h-4 animate-spin" />}
                                    Simpan Pengguna
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal Form Edit */}
            {editingUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md border border-slate-200 overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                            <h3 className="text-lg font-semibold text-slate-900">Edit Pengguna</h3>
                            <button
                                onClick={() => setEditingUser(null)}
                                className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleEditSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                                <input
                                    type="text"
                                    value={editForm.data.name}
                                    onChange={(e) => editForm.setData('name', e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-600"
                                />
                                {editForm.errors.name && <p className="text-xs text-red-500 mt-1">{editForm.errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Alamat Email</label>
                                <input
                                    type="email"
                                    value={editForm.data.email}
                                    onChange={(e) => editForm.setData('email', e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-600"
                                />
                                {editForm.errors.email && <p className="text-xs text-red-500 mt-1">{editForm.errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Kata Sandi Baru <span className="text-slate-400 font-normal">(Opsional)</span>
                                </label>
                                <input
                                    type="password"
                                    value={editForm.data.password}
                                    onChange={(e) => editForm.setData('password', e.target.value)}
                                    placeholder="Biarkan kosong jika tidak diubah"
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-indigo-600"
                                />
                                {editForm.errors.password && <p className="text-xs text-red-500 mt-1">{editForm.errors.password}</p>}
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setEditingUser(null)}
                                    className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors cursor-pointer"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={editForm.processing}
                                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer disabled:opacity-60"
                                >
                                    {editForm.processing && <Loader2 className="w-4 h-4 animate-spin" />}
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

Pengguna.layout = {
    breadcrumbs,
};
