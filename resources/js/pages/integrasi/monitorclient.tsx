import { MonitorSmartphone, Search, Wifi, WifiOff } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

interface Client {
    id: string;
    name: string;
    ip: string;
    mac: string;
    status: 'online' | 'offline';
    lastSeen: string;
    os: string;
}

export default function MonitorClientContent() {
    const [query, setQuery] = useState('');
    const [clients, setClients] = useState<Client[]>([]);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const handler = (data: { clients: Client[] }) => {
            setClients(data.clients);
            setIsConnected(true);
        };

        window.Echo.private('monitor-client').listen('client.updated', handler);

        return () => {
            window.Echo.leave('monitor-client');
        };
    }, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();

        if (!q) {
            return clients;
        }

        return clients.filter((client) => {
            return (
                client.name.toLowerCase().includes(q) ||
                client.ip.includes(q) ||
                client.mac.toLowerCase().includes(q) ||
                client.os.toLowerCase().includes(q)
            );
        });
    }, [clients, query]);

    const total = clients.length;
    const online = clients.filter(
        (client) => client.status === 'online',
    ).length;
    const offline = total - online;

    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
                <StatCard
                    title="Total Client"
                    value={total.toString()}
                    helper="Perangkat di jaringan"
                    icon={<MonitorSmartphone className="h-5 w-5" />}
                    color="blue"
                />
                <StatCard
                    title="Online"
                    value={online.toString()}
                    helper="Perangkat aktif"
                    icon={<Wifi className="h-5 w-5" />}
                    color="green"
                />
                <StatCard
                    title="Offline"
                    value={offline.toString()}
                    helper="Perangkat tidak terdeteksi"
                    icon={<WifiOff className="h-5 w-5" />}
                    color="red"
                />
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
                <span
                    className={`h-2 w-2 rounded-full ${isConnected ? 'bg-emerald-500' : 'bg-amber-500'}`}
                />
                {isConnected
                    ? 'WebSocket terhubung'
                    : 'Menunggu data dari server...'}
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                            Daftar Client Jaringan
                        </h3>
                        <p className="text-sm text-slate-500">
                            Monitoring perangkat yang terhubung ke satu jaringan
                            internal.
                        </p>
                    </div>

                    <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
                        <label className="relative md:w-64">
                            <Search className="absolute top-2.5 left-3 h-4 w-4 text-slate-400" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Cari nama, IP, MAC, OS..."
                                className="w-full rounded-lg border border-slate-300 py-2 pr-3 pl-9 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                            />
                        </label>
                    </div>
                </div>

                <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-600">
                        <thead className="bg-slate-50 text-slate-700">
                            <tr className="border-b border-slate-200">
                                <th className="p-3 font-semibold">Nama</th>
                                <th className="p-3 font-semibold">
                                    IP Address
                                </th>
                                <th className="p-3 font-semibold">
                                    MAC Address
                                </th>
                                <th className="p-3 font-semibold">OS</th>
                                <th className="p-3 font-semibold">Status</th>
                                <th className="p-3 font-semibold">
                                    Terakhir Aktif
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filtered.length > 0 ? (
                                filtered.map((client) => (
                                    <tr
                                        key={client.id}
                                        className="hover:bg-slate-50/80"
                                    >
                                        <td className="p-3 font-medium text-slate-900">
                                            {client.name}
                                        </td>
                                        <td className="p-3 font-mono text-xs">
                                            {client.ip}
                                        </td>
                                        <td className="p-3 font-mono text-xs">
                                            {client.mac}
                                        </td>
                                        <td className="p-3">{client.os}</td>
                                        <td className="p-3">
                                            <StatusBadge
                                                status={client.status}
                                            />
                                        </td>
                                        <td className="p-3 text-xs text-slate-500">
                                            {client.lastSeen}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="p-6 text-center text-slate-500"
                                    >
                                        {clients.length === 0
                                            ? 'Menunggu data dari server...'
                                            : 'Tidak ada client yang sesuai dengan pencarian.'}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function StatCard({
    title,
    value,
    helper,
    icon,
    color,
}: {
    title: string;
    value: string;
    helper: string;
    icon: React.ReactNode;
    color: 'blue' | 'green' | 'red';
}) {
    const colors = {
        blue: 'border-l-blue-500 bg-blue-50/60',
        green: 'border-l-emerald-500 bg-emerald-50/60',
        red: 'border-l-red-500 bg-red-50/60',
    };

    const iconColors = {
        blue: 'bg-blue-100 text-blue-700',
        green: 'bg-emerald-100 text-emerald-700',
        red: 'bg-red-100 text-red-700',
    };

    return (
        <div
            className={`rounded-xl border border-l-4 border-slate-200 p-4 shadow-sm ${colors[color]}`}
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-600">
                        {title}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">
                        {value}
                    </p>
                    <p className="text-xs text-slate-500">{helper}</p>
                </div>
                <div className={`rounded-lg p-2 ${iconColors[color]}`}>
                    {icon}
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: 'online' | 'offline' }) {
    const isOnline = status === 'online';

    return (
        <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                isOnline
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'bg-slate-100 text-slate-600'
            }`}
        >
            <span
                className={`h-1.5 w-1.5 rounded-full ${
                    isOnline ? 'bg-emerald-500' : 'bg-slate-400'
                }`}
            />
            {isOnline ? 'Online' : 'Offline'}
        </span>
    );
}
