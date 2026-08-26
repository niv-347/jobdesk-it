import { Head, useForm } from '@inertiajs/react';
import { Plus, UserCog, X } from 'lucide-react';
import { useMemo, useState } from 'react';

import { getDefaultMenuItems, getPermissionLabels } from '@/config/menu';
import type { MenuItemConfig } from '@/config/menu';
import { konfigurasi } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Konfigurasi', href: konfigurasi() },
    { title: 'Role & Akses Menu', href: '/konfigurasi/role' },
];

interface User {
    id: number;
    name: string;
    email: string;
}

interface RoleData {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    permissions: { id: number; name: string; label: string; group: string }[];
}

interface UserRole {
    id: number;
    name: string;
    email: string;
    roles: { id: number; name: string; slug: string }[];
    permissions: string[];
}

interface Props {
    users: User[];
    roles: RoleData[];
    userRoles: UserRole[];
}

export default function Role({ roles = [], userRoles = [] }: Props) {
    const [showAddRoleModal, setShowAddRoleModal] = useState(false);
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [menuItems, setMenuItems] = useState<MenuItemConfig[]>(getDefaultMenuItems());

    const roleForm = useForm({
        name: '',
        slug: '',
        description: '',
        permissions: [] as string[],
    });

    const userForm = useForm({
        name: '',
        email: '',
        password: '',
        role_id: '',
        permissions: {} as Record<string, boolean>,
    });



    const togglePermissionInRoleForm = (permName: string) => {
        const current = roleForm.data.permissions;

        if (current.includes(permName)) {
            roleForm.setData('permissions', current.filter((p) => p !== permName));
        } else {
            roleForm.setData('permissions', [...current, permName]);
        }
    };

    const collectMenuPermissions = (items: MenuItemConfig[]): Record<string, boolean> => {
        const permissions: Record<string, boolean> = {};
        items.forEach((item) => {
            permissions[item.id] = item.enabled;
            item.children?.forEach((child) => {
                permissions[`${item.id}.${child.id}`] = child.enabled;
            });
        });

        return permissions;
    };


    const toggleMenuItem = (path: string) => {
        setMenuItems((prev) =>
            prev.map((item) => {
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
            }),
        );
    };




    const handleAddUser = () => {
        userForm.setData('permissions', collectMenuPermissions(menuItems));
        userForm.post('/konfigurasi/role/store-user', {
            onSuccess: () => {
                setShowAddUserModal(false);
                userForm.reset();
                setMenuItems(getDefaultMenuItems());
            },
        });
    };

    const handleAddRole = () => {
        roleForm.post('/konfigurasi/role/store', {
            onSuccess: () => {
                setShowAddRoleModal(false);
                roleForm.reset();
            },
        });
    };


    // Collect all permission names from roles for role form
    const allPermissionNames = useMemo(() => {
        return Array.from(
            new Set(roles.flatMap((r) => r.permissions.map((p) => p.name))),
        ).sort();
    }, [roles]);

    return (
        <>
            <Head title="Role & Akses Menu" />

            <div className="p-6">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Role & Akses Menu</h1>
                        <p className="mt-1 text-sm text-slate-500">
                            Kelola role, permission, dan hak akses menu pengguna.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() => setShowAddUserModal(true)}
                            className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-700"
                        >
                            <Plus className="h-4 w-4" />
                            Tambah Pengguna
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowAddRoleModal(true)}
                            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700"
                        >
                            <Plus className="h-4 w-4" />
                            Tambah Role
                        </button>
                    </div>
                </div>

                {/* Role List */}
                <div className="mb-8 rounded-lg border border-slate-200 bg-white p-4">
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-slate-900">Daftar Role</h2>
                        <p className="text-sm text-slate-500">
                            Total: {roles.length} role terdaftar.
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600">
                            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                                <tr>
                                    <th className="p-4">Nama Role</th>
                                    <th className="p-4">Slug</th>
                                    <th className="p-4">Deskripsi</th>
                                    <th className="p-4">Jumlah Permission</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {roles.map((role) => (
                                    <tr key={role.id} className="hover:bg-slate-50/80">
                                        <td className="p-4 font-medium text-slate-900">{role.name}</td>
                                        <td className="p-4 text-slate-600">{role.slug}</td>
                                        <td className="p-4 text-slate-600">
                                            {role.description || <span className="text-slate-400 italic">Tidak ada</span>}
                                        </td>
                                        <td className="p-4 text-slate-600">{role.permissions.length}</td>
                                    </tr>
                                ))}
                                {roles.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="p-6 text-center text-slate-400">
                                            Belum ada role. Tambahkan role pertama.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>


                {/* User-Role Table */}
                <div className="mt-8 rounded-lg border border-slate-200 bg-white">
                    <div className="p-4 border-b border-slate-200">
                        <h2 className="text-lg font-semibold text-slate-900">Daftar Role Pengguna</h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Menampilkan pengguna yang sudah memiliki role akses.
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600">
                            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                                <tr>
                                    <th className="p-4">Nama</th>
                                    <th className="p-4">Email</th>
                                    <th className="p-4">Role</th>
                                    <th className="p-4">Permission (Menu)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {userRoles.length > 0 ? (
                                    userRoles.map((ur) => (
                                        <tr key={ur.id} className="hover:bg-slate-50/80">
                                            <td className="p-4 font-medium text-slate-900">{ur.name}</td>
                                            <td className="p-4 text-slate-600">{ur.email}</td>
                                            <td className="p-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {(ur.roles ?? []).length > 0 ? (
                                                        ur.roles.map((role) => (
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
                                                    {(ur.permissions ?? []).length > 0 ? (
                                                        ur.permissions.map((perm) => (
                                                            <span
                                                                key={perm}
                                                                className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700"
                                                            >
                                                                {getPermissionLabels()[perm] || perm}
                                                            </span>
                                                        ))
                                                    ) : (
                                                        <span className="text-slate-400">Tidak ada</span>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="p-8 text-center text-slate-400">
                                            Belum ada pengguna yang memiliki role akses.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal: Tambah Role */}
            {showAddRoleModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-6 shadow-lg">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">Tambah Role Baru</h3>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowAddRoleModal(false);
                                    roleForm.reset();
                                }}
                                className="rounded-md p-1 text-slate-500 hover:bg-slate-100"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleAddRole();
                            }}
                            className="mt-4 grid gap-6"
                        >
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-slate-700">Nama Role</label>
                                    <input
                                        type="text"
                                        value={roleForm.data.name}
                                        onChange={(e) => roleForm.setData('name', e.target.value)}
                                        className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                                        required
                                    />
                                    {roleForm.errors.name && <p className="text-xs text-red-500">{roleForm.errors.name}</p>}
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-slate-700">Slug</label>
                                    <input
                                        type="text"
                                        value={roleForm.data.slug}
                                        onChange={(e) => roleForm.setData('slug', e.target.value)}
                                        className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                                        required
                                    />
                                    {roleForm.errors.slug && <p className="text-xs text-red-500">{roleForm.errors.slug}</p>}
                                </div>

                                <div className="sm:col-span-2 flex flex-col gap-2">
                                    <label className="text-sm font-medium text-slate-700">Deskripsi</label>
                                    <input
                                        type="text"
                                        value={roleForm.data.description ?? ''}
                                        onChange={(e) => roleForm.setData('description', e.target.value)}
                                        className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                                        placeholder="Opsional"
                                    />
                                    {roleForm.errors.description && <p className="text-xs text-red-500">{roleForm.errors.description}</p>}
                                </div>
                            </div>

                            <div className="border-t border-slate-200 pt-4">
                                <label className="text-sm font-medium text-slate-700">Permission (Menu Akses)</label>
                                <p className="text-xs text-slate-500 mb-2">
                                    Pilih permission yang bisa diakses oleh role ini.
                                </p>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {allPermissionNames.map((perm) => {
                                        const isSelected = roleForm.data.permissions.includes(perm);

                                        return (
                                            <div key={perm} className="flex items-center gap-3">
                                                <input
                                                    type="checkbox"
                                                    checked={isSelected}
                                                    onChange={() => togglePermissionInRoleForm(perm)}
                                                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <span className="text-sm text-slate-700">
                                                    {getPermissionLabels()[perm] || perm}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 border-t border-slate-200 pt-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowAddRoleModal(false);
                                        roleForm.reset();
                                    }}
                                    disabled={roleForm.processing}
                                    className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 disabled:opacity-60"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={roleForm.processing || !roleForm.data.name || !roleForm.data.slug}
                                    className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700 disabled:opacity-60"
                                >
                                    {roleForm.processing && <UserCog className="h-4 w-4 animate-spin" />}
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal: Tambah Pengguna */}
            {showAddUserModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-6 shadow-lg">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">Tambah Pengguna Baru</h3>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowAddUserModal(false);
                                    userForm.reset();
                                }}
                                className="rounded-md p-1 text-slate-500 hover:bg-slate-100"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleAddUser();
                            }}
                            className="mt-4 grid gap-6"
                        >
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="add-name" className="text-sm font-medium text-slate-700">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        id="add-name"
                                        type="text"
                                        value={userForm.data.name}
                                        onChange={(e) => userForm.setData('name', e.target.value)}
                                        className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                                        required
                                    />
                                    {userForm.errors.name && <p className="text-xs text-red-500">{userForm.errors.name}</p>}
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="add-email" className="text-sm font-medium text-slate-700">
                                        Email
                                    </label>
                                    <input
                                        id="add-email"
                                        type="email"
                                        value={userForm.data.email}
                                        onChange={(e) => userForm.setData('email', e.target.value)}
                                        className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                                        required
                                    />
                                    {userForm.errors.email && <p className="text-xs text-red-500">{userForm.errors.email}</p>}
                                </div>

                                <div className="sm:col-span-2 flex flex-col gap-2">
                                    <label htmlFor="add-password" className="text-sm font-medium text-slate-700">
                                        Password
                                    </label>
                                    <input
                                        id="add-password"
                                        type="password"
                                        value={userForm.data.password}
                                        onChange={(e) => userForm.setData('password', e.target.value)}
                                        className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                                        required
                                    />
                                    {userForm.errors.password && <p className="text-xs text-red-500">{userForm.errors.password}</p>}
                                </div>

                                <div className="sm:col-span-2 flex flex-col gap-2">
                                    <label htmlFor="add-role" className="text-sm font-medium text-slate-700">
                                        Role
                                    </label>
                                    <select
                                        id="add-role"
                                        value={userForm.data.role_id}
                                        onChange={(e) => userForm.setData('role_id', e.target.value)}
                                        className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                                        required
                                    >
                                        <option value="">-- Pilih role --</option>
                                        {roles.map((role) => (
                                            <option key={role.id} value={role.id}>
                                                {role.name}
                                            </option>
                                        ))}
                                    </select>
                                    {userForm.errors.role_id && <p className="text-xs text-red-500">{userForm.errors.role_id}</p>}
                                </div>
                            </div>

                            <div className="border-t border-slate-200 pt-4">
                                <label className="text-sm font-medium text-slate-700">Akses Menu Tambahan (Opsional)</label>
                                <p className="text-xs text-slate-500 mb-2">
                                    Override permission role untuk pengguna ini. Biarkan kosong untuk menggunakan permission dari role.
                                </p>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {menuItems.map((item) => (
                                        <div key={item.id} className="flex items-start gap-3">
                                            <input
                                                type="checkbox"
                                                checked={item.enabled}
                                                onChange={() => toggleMenuItem(item.id)}
                                                className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <span className="text-sm text-slate-700">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 border-t border-slate-200 pt-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowAddUserModal(false);
                                        userForm.reset();
                                    }}
                                    disabled={userForm.processing}
                                    className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 disabled:opacity-60"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={
                                        userForm.processing ||
                                        !userForm.data.name ||
                                        !userForm.data.email ||
                                        !userForm.data.password ||
                                        !userForm.data.role_id
                                    }
                                    className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700 disabled:opacity-60"
                                >
                                    {userForm.processing && <UserCog className="h-4 w-4 animate-spin" />}
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


Role.layout = { breadcrumbs };
