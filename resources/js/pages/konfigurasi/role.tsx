import { Head, useForm } from '@inertiajs/react';
import { Briefcase, LayoutGrid, Save, Settings, Trash2, UserCog } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useState } from 'react';

import { konfigurasi } from '@/routes';
import type { BreadcrumbItem } from '@/types';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Role {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    permissions: { id: number; key: string; label: string; group: string }[];
}

interface MenuItemConfig {
    id: string;
    label: string;
    icon: LucideIcon;
    enabled: boolean;
    children?: MenuItemConfig[];
}

const defaultMenuItems: MenuItemConfig[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, enabled: true },
    {
        id: 'konfigurasi',
        label: 'Konfigurasi',
        icon: Settings,
        enabled: true,
        children: [
            { id: 'pengguna', label: 'Pengguna', icon: Briefcase, enabled: true },
            { id: 'role', label: 'Role Akses', icon: Briefcase, enabled: true },
        ],
    },
    {
        id: 'sop',
        label: 'SOP',
        icon: LayoutGrid,
        enabled: true,
        children: [{ id: 'buatsop', label: 'Buat SOP', icon: Briefcase, enabled: true }],
    },
    {
        id: 'troubleshooting',
        label: 'Troubleshooting',
        icon: LayoutGrid,
        enabled: true,
        children: [{ id: 'kejadian', label: 'Kejadian', icon: Briefcase, enabled: true }],
    },
    {
        id: 'visum',
        label: 'Visum',
        icon: LayoutGrid,
        enabled: true,
    },
];

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Konfigurasi', href: konfigurasi() },
    { title: 'Role Akses', href: '/konfigurasi/role' },
];

const permissionLabels: Record<string, string> = {
    dashboard: 'Dashboard',
    konfigurasi: 'Konfigurasi',
    'konfigurasi.pengguna': 'Manajemen Pengguna',
    'konfigurasi.role': 'Role Akses',
    sop: 'SOP',
    'sop.buatsop': 'Buat SOP',
    troubleshooting: 'Troubleshooting',
    'troubleshooting.kejadian': 'Kejadian',
    visum: 'Visum',
};

interface Props {
    users?: User[];
    roles?: Role[];
    userRoles?: Array<{
        id: number;
        name: string;
        email: string;
        roles: { id: number; name: string; slug: string }[];
        permissions: string[];
    }>;
    menuPermissions?: Record<string, boolean>;
}

export default function Role({ users = [], roles = [], userRoles = [], menuPermissions = {} }: Props) {
    const [selectedUserId, setSelectedUserId] = useState<string>('');
    const [selectedRoleId, setSelectedRoleId] = useState<string>('');
    const [menuItems, setMenuItems] = useState<MenuItemConfig[]>(() =>
        defaultMenuItems.map((item) => ({
            ...item,
            enabled: menuPermissions[item.id] ?? item.enabled,
            children: item.children?.map((c) => ({
                ...c,
                enabled: menuPermissions[`${item.id}.${c.id}`] ?? c.enabled,
            })),
        })),
    );
    const [loading, setLoading] = useState(false);
    const [editUser, setEditUser] = useState<{ id: number; name: string; email: string } | null>(null);
    const [editRoleId, setEditRoleId] = useState<string>('');
    const [saving, setSaving] = useState(false);

    const { post, processing, wasSuccessful, setData } = useForm({
        user_id: '',
        role_id: '',
    });

    const applyPermissions = (permissions: Record<string, boolean>) => {
        setMenuItems(
            defaultMenuItems.map((item) => ({
                ...item,
                enabled: permissions[item.id] ?? item.enabled,
                children: item.children?.map((c) => ({
                    ...c,
                    enabled: permissions[`${item.id}.${c.id}`] ?? c.enabled,
                })),
            })),
        );
    };

    const handleUserChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const userId = e.target.value;
        setSelectedUserId(userId);
        setSelectedRoleId('');

        if (!userId) {
            return;
        }

        setLoading(true);

        try {
            const res = await fetch(`/konfigurasi/role/permissions/${userId}`, {
                headers: { 'Accept': 'application/json' },
            });
            const data: Record<string, boolean> = await res.json();
            applyPermissions(data);
        } finally {
            setLoading(false);
        }
    };

    const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const roleId = e.target.value;
        setSelectedRoleId(roleId);

        if (!roleId) {
            return;
        }

        const role = roles.find((r) => r.id === Number(roleId));

        if (!role) {
            return;
        }

        const rolePerms: Record<string, boolean> = {};
        role.permissions.forEach((p) => {
            rolePerms[p.key] = true;
        });

        applyPermissions(rolePerms);
    };

    const toggleItem = (path: string) => {
        setMenuItems((prev) => updateItem(prev, path));
    };

    const handleSave = () => {
        if (!selectedUserId || !selectedRoleId) {
            return;
        }

        setData('user_id', selectedUserId);
        setData('role_id', selectedRoleId);
        post('/konfigurasi/role/permissions');
    };

    const resetAll = () => {
        setMenuItems(
            defaultMenuItems.map((item) => ({
                ...item,
                enabled: true,
                children: item.children?.map((c) => ({ ...c, enabled: true })),
            })),
        );
    };

    const openEditDialog = (userRole: { id: number; name: string; email: string; roles: { id: number }[] }) => {
        setEditUser({ id: userRole.id, name: userRole.name, email: userRole.email });
        setEditRoleId(userRole.roles[0]?.id?.toString() ?? '');
    };

    return (
        <>
            <Head title="Role & Akses Menu" />

            <div className="p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-900">Role & Akses Menu</h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Pilih pengguna, pilih role, dan atur menu mana saja yang ditampilkan di sidebar aplikasi.
                    </p>
                </div>

                <div className="mb-6 flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                        <div className="flex flex-1 flex-col gap-2">
                            <label htmlFor="user-select" className="text-sm font-medium text-slate-700">
                                Pilih Pengguna
                            </label>
                            <select
                                id="user-select"
                                value={selectedUserId}
                                onChange={handleUserChange}
                                className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                            >
                                <option value="">-- Pilih pengguna --</option>
                                {users.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name} ({user.email})
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-1 flex-col gap-2">
                            <label htmlFor="role-select" className="text-sm font-medium text-slate-700">
                                Pilih Role
                            </label>
                            <select
                                id="role-select"
                                value={selectedRoleId}
                                onChange={handleRoleChange}
                                className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                            >
                                <option value="">-- Pilih role --</option>
                                {roles.map((role) => (
                                    <option key={role.id} value={role.id}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-end gap-2">
                            <button
                                type="button"
                                onClick={resetAll}
                                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                            >
                                <Trash2 className="h-4 w-4" />
                                Reset
                            </button>
                            <button
                                type="button"
                                onClick={handleSave}
                                disabled={!selectedUserId || !selectedRoleId || processing}
                                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700 disabled:opacity-60"
                            >
                                {processing && <UserCog className="h-4 w-4 animate-spin" />}
                                <Save className="h-4 w-4" />
                                Simpan
                            </button>
                        </div>
                    </div>
                </div>

                {wasSuccessful && (
                    <div className="mb-4 rounded-md bg-green-50 p-3 text-sm text-green-700">
                        Hak akses menu berhasil disimpan.
                    </div>
                )}

                {!selectedUserId || !selectedRoleId ? (
                    <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
                        Pilih pengguna dan role terlebih dahulu untuk mengatur hak akses menu.
                    </div>
                ) : loading ? (
                    <div className="rounded-lg border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">
                        Memuat data hak akses...
                    </div>
                ) : (
                    <div className="space-y-4">
                        {menuItems.map((item) => (
                            <MenuItemCard key={item.id} item={item} onToggle={toggleItem} />
                        ))}
                    </div>
                )}

                <div className="mb-6 rounded-lg border border-slate-200 bg-white">
                    <div className="p-4 border-b border-slate-200">
                        <h2 className="text-lg font-semibold text-slate-900">Daftar Role Pengguna</h2>
                        <p className="text-sm text-slate-500 mt-1">Menampilkan pengguna yang sudah memiliki role akses.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600">
                            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                                <tr>
                                    <th className="p-4">Nama</th>
                                    <th className="p-4">Email</th>
                                    <th className="p-4">Role</th>
                                    <th className="p-4">Menu Yang Dapat Diakses</th>
                                    <th className="p-4">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {userRoles.length > 0 ? (
                                    userRoles.map((userRole) => (
                                        <tr key={userRole.id} className="hover:bg-slate-50/80 transition-colors">
                                            <td className="p-4 font-medium text-slate-900">{userRole.name}</td>
                                            <td className="p-4 text-slate-600">{userRole.email}</td>
                                            <td className="p-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {userRole.roles.length > 0 ? (
                                                        userRole.roles.map((role) => (
                                                            <span
                                                                key={role.id}
                                                                className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700"
                                                            >
                                                                {role.name}
                                                            </span>
                                                        ))
                                                    ) : (
                                                        <span className="text-slate-400">Belum ada role</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {userRole.permissions.length > 0 ? (
                                                        userRole.permissions.map((perm) => (
                                                            <span
                                                                key={perm}
                                                                className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700"
                                                            >
                                                                {permissionLabels[perm] || perm}
                                                            </span>
                                                        ))
                                                    ) : (
                                                        <span className="text-slate-400">Tidak ada</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <button
                                                    type="button"
                                                    onClick={() => openEditDialog(userRole)}
                                                    className="inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50"
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="p-8 text-center text-slate-400">
                                            Belum ada pengguna yang memiliki role akses.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {editUser && (
                    <form
                        action="/konfigurasi/role/permissions"
                        method="post"
                        onSubmit={() => setSaving(true)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    >
                        <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''} />
                        <input type="hidden" name="user_id" value={editUser.id.toString()} />
                        <div className="w-full max-w-lg rounded-lg border border-slate-200 bg-white p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-slate-900">Edit Hak Akses</h3>
                            <p className="mt-1 text-sm text-slate-500">
                                Ubah role untuk pengguna <strong>{editUser.name}</strong> ({editUser.email}).
                            </p>

                            <div className="mt-4 grid gap-4">
                                <div className="grid gap-2">
                                    <label htmlFor="edit-role" className="text-sm font-medium text-slate-700">
                                        Pilih Role
                                    </label>
                                    <select
                                        id="edit-role"
                                        name="role_id"
                                        value={editRoleId}
                                        onChange={(e) => setEditRoleId(e.target.value)}
                                        className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                                    >
                                        <option value="">-- Pilih role --</option>
                                        {roles.map((role) => (
                                            <option key={role.id} value={role.id.toString()}>
                                                {role.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-slate-700">
                                        Menu Yang Dapat Diakses
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {(() => {
                                            const selectedRole = roles.find((r) => r.id === Number(editRoleId));

                                            if (!selectedRole || selectedRole.permissions.length === 0) {
                                                return <span className="text-sm text-slate-400">Pilih role untuk melihat menu.</span>;
                                            }

                                            return selectedRole.permissions.map((perm) => (
                                                <span
                                                    key={perm.id}
                                                    className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700"
                                                >
                                                    {permissionLabels[perm.key] || perm.label}
                                                </span>
                                            ));
                                        })()}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => {
 setEditUser(null); setEditRoleId(''); 
}}
                                    disabled={saving}
                                    className="inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 disabled:opacity-60"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={!editRoleId || saving}
                                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700 disabled:opacity-60"
                                >
                                    {saving && <UserCog className="mr-2 h-4 w-4 animate-spin" />}
                                    Simpan
                                </button>
                            </div>
                        </div>
                    </form>
                )}

            </div>
        </>
    );
}

Role.layout = { breadcrumbs };

function MenuItemCard({
    item,
    onToggle,
}: {
    item: MenuItemConfig;
    onToggle: (path: string) => void;
}) {
    const Icon = item.icon;

    return (
        <div className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3 font-semibold">
                <input
                    type="checkbox"
                    checked={item.enabled}
                    onChange={() => onToggle(item.id)}
                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <Icon className="h-5 w-5 text-slate-600" />
                <span className="text-slate-800">{item.label}</span>
            </div>

            {item.children && item.children.length > 0 && (
                <div className={`ml-6 mt-2 space-y-2 ${!item.enabled ? 'opacity-50' : ''}`}>
                    {item.children.map((child) => {
                        const ChildIcon = child.icon;

                        return (
                            <div
                                key={child.id}
                                className="flex items-center gap-3"
                            >
                                <input
                                    type="checkbox"
                                    checked={item.enabled && child.enabled}
                                    disabled={!item.enabled}
                                    onChange={() => onToggle(`${item.id}.${child.id}`)}
                                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <ChildIcon className="h-4 w-4 text-slate-500" />
                                <span className="text-sm text-slate-700">{child.label}</span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

function updateItem(items: MenuItemConfig[], path: string): MenuItemConfig[] {
    return items.map((item) => {
        if (item.id === path) {
            return { ...item, enabled: !item.enabled };
        }

        if (item.children?.some((c) => c.id === path)) {
            return {
                ...item,
                children: item.children.map((c) =>
                    c.id === path ? { ...c, enabled: !c.enabled } : c,
                ),
            };
        }

        return item;
    });
}
