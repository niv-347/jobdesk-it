export default function SatuSehatContent() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
                <ConnectionCard
                    title="Koneksi API"
                    status="Terhubung"
                    description="Endpoint produksi aktif"
                />
                <ConnectionCard
                    title="Token Akses"
                    status="Valid"
                    description="Berakhir dalam 28 hari"
                />
                <ConnectionCard
                    title="Sinkronisasi"
                    status="Siap"
                    description="Terakhir: 10 menit lalu"
                />
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                    Log Sinkronisasi
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                    Riwayat transaksi terakhir dengan platform Satu Sehat.
                </p>

                <div className="mt-4 space-y-3">
                    <SyncLogItem
                        time="10 menit lalu"
                        action="Sinkronisasi data pasien"
                        status="success"
                    />
                    <SyncLogItem
                        time="1 jam lalu"
                        action="Kirim data kunjungan"
                        status="success"
                    />
                    <SyncLogItem
                        time="3 jam lalu"
                        action="Update token akses"
                        status="warning"
                    />
                </div>
            </div>
        </div>
    );
}

function ConnectionCard({
    title,
    status,
    description,
}: {
    title: string;
    status: string;
    description: string;
}) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-medium text-slate-600">{title}</p>
            <p className="mt-2 text-xl font-bold text-slate-900">{status}</p>
            <p className="mt-1 text-xs text-slate-500">{description}</p>
        </div>
    );
}

function SyncLogItem({
    time,
    action,
    status,
}: {
    time: string;
    action: string;
    status: string;
}) {
    const styles: Record<string, string> = {
        success: 'bg-emerald-50 text-emerald-700',
        warning: 'bg-yellow-50 text-yellow-700',
        error: 'bg-red-50 text-red-700',
    };

    const labels: Record<string, string> = {
        success: 'Berhasil',
        warning: 'Peringatan',
        error: 'Gagal',
    };

    return (
        <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3">
            <div>
                <p className="text-sm font-medium text-slate-900">{action}</p>
                <p className="text-xs text-slate-500">{time}</p>
            </div>
            <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status] || styles.success}`}
            >
                {labels[status] || status}
            </span>
        </div>
    );
}
