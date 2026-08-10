import { Head } from '@inertiajs/react';
import { User, Mail, Lock, Camera } from 'lucide-react';
import { useState } from 'react';

import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Profile', href: '/profile/edit' },
];

interface Props {
    user: {
        id: number;
        name: string;
        email: string;
    };
}

export default function ProfileEdit({ user }: Props) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [currentPassword, setCurrentPassword] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [showPasswords, setShowPasswords] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);

        if (currentPassword) {
formData.append('current_password', currentPassword);
}

        if (password) {
            formData.append('password', password);
            formData.append('password_confirmation', passwordConfirmation);
        }

        fetch('/profile/edit', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
            },
        }).then(() => {
            window.location.href = '/profile/edit';
        });
    };

    return (
        <>
            <Head title="Edit Profile" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4 md:p-6">
                <div className="mx-auto w-full max-w-2xl">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Edit Profile</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Avatar Section */}
                        <div className="flex items-center gap-4">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700">
                                <User className="h-8 w-8 text-slate-400" />
                            </div>
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                            >
                                <Camera className="h-4 w-4" />
                                Ganti Foto
                            </button>
                        </div>

                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Nama Lengkap
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Alamat Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                                />
                            </div>
                        </div>

                        {/* Password Section */}
                        <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-700">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                                Ubah Kata Sandi
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                                Biarkan kosong jika tidak ingin mengubah kata sandi
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="current_password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Kata Sandi Saat Ini
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                        <input
                                            id="current_password"
                                            type={showPasswords ? 'text' : 'password'}
                                            value={currentPassword}
                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Kata Sandi Baru
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                        <input
                                            id="password"
                                            type={showPasswords ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password_confirmation" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Konfirmasi Kata Sandi Baru
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                        <input
                                            id="password_confirmation"
                                            type={showPasswords ? 'text' : 'password'}
                                            value={passwordConfirmation}
                                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <input
                                        id="show_passwords"
                                        type="checkbox"
                                        checked={showPasswords}
                                        onChange={(e) => setShowPasswords(e.target.checked)}
                                        className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="show_passwords" className="text-sm text-slate-700 dark:text-slate-300">
                                        Tampilkan kata sandi
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3">
                            <a
                                href={'/profile/edit'}
                                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                            >
                                Batal
                            </a>
                            <button
                                type="submit"
                                className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                            >
                                Simpan Perubahan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

ProfileEdit.layout = { breadcrumbs };
