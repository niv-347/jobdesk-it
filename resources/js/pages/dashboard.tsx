import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import exportRoutes from '@/routes/export';
import type { BreadcrumbItem } from '@/types';

interface DashboardProps {
    stats: {
        total_users: number;
        total_sops: number;
        total_troubleshoots: number;
        active_tickets: number;
    };
    recentSops: Array<{
        id: number;
        nomor_sop: string;
        judul: string;
        kategori: string;
        created_at: string;
    }>;
    recentTickets: Array<{
        id: number;
        kode_tiketing: string;
        judul_masalah: string;
        status: string;
        tingkat_urgensi: string;
        created_at: string;
    }>;
    sopByCategory: Array<{ label: string; value: number }>;
    ticketByStatus: Array<{ label: string; value: number }>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
    },
];

/**
 * Professional Dashboard Page
 * 
 * Features:
 * - Statistics cards with icons
 * - Recent SOPs list
 * - Recent troubleshooting tickets
 * - CSS-only bar charts for visual data
 * - Clean, modern layout
 * 
 * @param {DashboardProps} props - Component props
 */
export default function Dashboard({ stats, recentSops, recentTickets, sopByCategory, ticketByStatus }: DashboardProps) {
    return (
        <>
            <Head title="Dashboard" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4 md:p-6">
                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <StatCard
                        title="Total Pengguna"
                        value={stats.total_users}
                        icon="users"
                        color="blue"
                    />
                    <StatCard
                        title="Total SOP"
                        value={stats.total_sops}
                        icon="document"
                        color="green"
                    />
                    <StatCard
                        title="Total Troubleshoot"
                        value={stats.total_troubleshoots}
                        icon="tool"
                        color="orange"
                    />
                    <StatCard
                        title="Tiket Aktif"
                        value={stats.active_tickets}
                        icon="alert"
                        color="red"
                    />
                </div>

                {/* Charts and Lists */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* SOP by Category Chart */}
                    <div className="lg:col-span-1 rounded-xl border border-sidebar-border/70 bg-white p-6 dark:border-sidebar-border dark:bg-slate-800">
                        <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                            SOP per Kategori
                        </h3>
                        <div className="space-y-3">
                            {sopByCategory.map((item) => (
                                <div key={item.label} className="space-y-1">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-slate-600 dark:text-slate-300">{item.label}</span>
                                        <span className="font-medium text-slate-900 dark:text-white">{item.value}</span>
                                    </div>
                                    <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                                        <div
                                            className="h-full rounded-full bg-indigo-500 transition-all duration-500"
                                            style={{
                                                width: `${Math.max(5, (item.value / Math.max(1, ...sopByCategory.map(i => i.value))) * 100)}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                            {sopByCategory.length === 0 && (
                                <p className="text-sm text-slate-500 dark:text-slate-400">Belum ada data SOP</p>
                            )}
                        </div>
                    </div>

                    {/* Ticket by Status Chart */}
                    <div className="lg:col-span-1 rounded-xl border border-sidebar-border/70 bg-white p-6 dark:border-sidebar-border dark:bg-slate-800">
                        <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                            Status Tiket
                        </h3>
                        <div className="space-y-3">
                            {ticketByStatus.map((item) => (
                                <div key={item.label} className="space-y-1">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-slate-600 dark:text-slate-300">{item.label}</span>
                                        <span className="font-medium text-slate-900 dark:text-white">{item.value}</span>
                                    </div>
                                    <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                                        <div
                                            className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                                            style={{
                                                width: `${Math.max(5, (item.value / Math.max(1, ...ticketByStatus.map(i => i.value))) * 100)}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                            {ticketByStatus.length === 0 && (
                                <p className="text-sm text-slate-500 dark:text-slate-400">Belum ada tiket</p>
                            )}
                        </div>
                    </div>

                    {/* Recent SOPs */}
                    <div className="lg:col-span-1 rounded-xl border border-sidebar-border/70 bg-white p-6 dark:border-sidebar-border dark:bg-slate-800">
                        <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                            SOP Terbaru
                        </h3>
                        <div className="space-y-3">
                            {recentSops.map((sop) => (
                                <div
                                    key={sop.id}
                                    className="flex items-start justify-between rounded-lg border border-slate-100 p-3 dark:border-slate-700"
                                >
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white line-clamp-1">
                                            {sop.judul}
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                            {sop.nomor_sop} • {sop.kategori}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            {recentSops.length === 0 && (
                                <p className="text-sm text-slate-500 dark:text-slate-400">Belum ada SOP</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Recent Tickets */}
                <div className="rounded-xl border border-sidebar-border/70 bg-white p-6 dark:border-sidebar-border dark:bg-slate-800">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                            Tiket Troubleshooting Terbaru
                        </h3>
                        <button
                            onClick={() => window.location.href = exportRoutes.troubleshoots.url()}
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
                        >
                            Export CSV
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-700">
                                    <th className="pb-2 font-medium text-slate-600 dark:text-slate-300">Kode</th>
                                    <th className="pb-2 font-medium text-slate-600 dark:text-slate-300">Judul</th>
                                    <th className="pb-2 font-medium text-slate-600 dark:text-slate-300">Status</th>
                                    <th className="pb-2 font-medium text-slate-600 dark:text-slate-300">Urgensi</th>
                                    <th className="pb-2 font-medium text-slate-600 dark:text-slate-300">Tanggal</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {recentTickets.map((ticket) => (
                                    <tr key={ticket.id}>
                                        <td className="py-3 font-mono text-xs text-slate-600 dark:text-slate-300">
                                            {ticket.kode_tiketing}
                                        </td>
                                        <td className="py-3 text-slate-900 dark:text-white line-clamp-1">
                                            {ticket.judul_masalah}
                                        </td>
                                        <td className="py-3">
                                            <StatusBadge status={ticket.status} />
                                        </td>
                                        <td className="py-3">
                                            <UrgencyBadge urgency={ticket.tingkat_urgensi} />
                                        </td>
                                        <td className="py-3 text-slate-500 dark:text-slate-400">
                                            {new Date(ticket.created_at).toLocaleDateString('id-ID')}
                                        </td>
                                    </tr>
                                ))}
                                {recentTickets.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="py-6 text-center text-slate-500 dark:text-slate-400">
                                            Belum ada tiket troubleshooting
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

Dashboard.layout = { breadcrumbs };

function StatCard({ title, value, icon, color }: { title: string; value: number; icon: string; color: string }) {
    const colorClasses = {
        blue: {
            card: 'border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-900/10',
            icon: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
            title: 'text-blue-600 dark:text-blue-400',
            value: 'text-blue-900 dark:text-blue-300',
        },
        green: {
            card: 'border-l-4 border-l-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/10',
            icon: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
            title: 'text-emerald-600 dark:text-emerald-400',
            value: 'text-emerald-900 dark:text-emerald-300',
        },
        orange: {
            card: 'border-l-4 border-l-orange-500 bg-orange-50/50 dark:bg-orange-900/10',
            icon: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
            title: 'text-orange-600 dark:text-orange-400',
            value: 'text-orange-900 dark:text-orange-300',
        },
        red: {
            card: 'border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-900/10',
            icon: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
            title: 'text-red-600 dark:text-red-400',
            value: 'text-red-900 dark:text-red-300',
        },
    };

    const iconSvgs = {
        users: (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        document: (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        tool: (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        alert: (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
    };

    const theme = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

    return (
        <div className={`rounded-xl border border-sidebar-border/70 p-6 dark:border-sidebar-border ${theme.card}`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className={`text-sm font-medium ${theme.title}`}>{title}</p>
                    <p className={`mt-2 text-3xl font-bold ${theme.value}`}>{value}</p>
                </div>
                <div className={`rounded-lg p-3 ${theme.icon}`}>
                    {iconSvgs[icon as keyof typeof iconSvgs]}
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const styles: Record<string, string> = {
        open: 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
        in_progress: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
        resolved: 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400',
        closed: 'bg-slate-50 text-slate-700 dark:bg-slate-900/20 dark:text-slate-400',
    };

    const labels: Record<string, string> = {
        open: 'Open',
        in_progress: 'In Progress',
        resolved: 'Resolved',
        closed: 'Closed',
    };

    return (
        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status] || 'bg-slate-100 text-slate-800'}`}>
            {labels[status] || status}
        </span>
    );
}

function UrgencyBadge({ urgency }: { urgency: string }) {
    const styles: Record<string, string> = {
        low: 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400',
        medium: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
        high: 'bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400',
        critical: 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400',
    };

    const labels: Record<string, string> = {
        low: 'Rendah',
        medium: 'Sedang',
        high: 'Tinggi',
        critical: 'Kritis',
    };

    return (
        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[urgency] || 'bg-slate-100 text-slate-800'}`}>
            {labels[urgency] || urgency}
        </span>
    );
}
