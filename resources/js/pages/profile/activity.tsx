import { Head } from '@inertiajs/react';
import { Activity } from 'lucide-react';

import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Profile', href: '/profile/edit' },
    { title: 'Activity Log', href: '/profile/activity' },
];

interface Log {
    id: number;
    action: string;
    description: string;
    ip_address: string;
    user_agent: string;
    created_at: string;
    user?: {
        name: string;
        email: string;
    };
}

interface Props {
    logs: {
        data: Log[];
        current_page: number;
        last_page: number;
        total: number;
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
    };
}

export default function ActivityLog({ logs }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const getActionColor = (action: string) => {
        switch (action) {
            case 'login':
                return 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400';
            case 'logout':
                return 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400';
            case 'profile_update':
                return 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400';
            case 'create':
                return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400';
            case 'update':
                return 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400';
            case 'delete':
                return 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400';
            default:
                return 'bg-slate-50 text-slate-700 dark:bg-slate-900/20 dark:text-slate-400';
        }
    };

    return (
        <>
            <Head title="Activity Log" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4 md:p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <Activity className="h-6 w-6 text-indigo-600" />
                            Activity Log
                        </h1>
                        <p className="text-sm text-slate-500 mt-1">
                            Riwayat aktivitas pengguna dalam sistem
                        </p>
                    </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600">
                            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200 dark:bg-slate-700 dark:text-slate-300">
                                <tr>
                                    <th className="p-4">Waktu</th>
                                    <th className="p-4">Aksi</th>
                                    <th className="p-4">Deskripsi</th>
                                    <th className="p-4">IP Address</th>
                                    <th className="p-4">User Agent</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {logs.data.length > 0 ? (
                                    logs.data.map((log) => (
                                        <tr key={log.id} className="hover:bg-slate-50/80 transition-colors dark:hover:bg-slate-700/50">
                                            <td className="p-4 text-slate-600 dark:text-slate-300 whitespace-nowrap">
                                                {formatDate(log.created_at)}
                                            </td>
                                            <td className="p-4">
                                                <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getActionColor(log.action)}`}>
                                                    {log.action}
                                                </span>
                                            </td>
                                            <td className="p-4 text-slate-900 dark:text-white">
                                                {log.description}
                                            </td>
                                            <td className="p-4 font-mono text-xs text-slate-600 dark:text-slate-300">
                                                {log.ip_address}
                                            </td>
                                            <td className="p-4 text-xs text-slate-500 dark:text-slate-400 max-w-xs truncate">
                                                {log.user_agent}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="p-8 text-center text-slate-400">
                                            Belum ada activity log
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {logs.last_page > 1 && (
                        <div className="flex items-center justify-between px-4 py-3 border-t border-slate-200 dark:border-slate-700">
                            <div className="text-sm text-slate-600 dark:text-slate-300">
                                Menampilkan {logs.data.length} dari {logs.total} logs
                            </div>
                            <div className="flex gap-2">
                                {logs.links.map((link, index) => (
                                    <button
                                        key={index}
                                        onClick={() => link.url && (window.location.href = link.url)}
                                        disabled={!link.url}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        className={`px-3 py-1 rounded text-sm ${
                                            link.active
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300'
                                        } ${!link.url ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

ActivityLog.layout = { breadcrumbs };
