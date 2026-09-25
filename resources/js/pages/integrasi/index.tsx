import { Head } from '@inertiajs/react';
import { Link, RefreshCw, Webhook, Cloud, ArrowRightLeft } from 'lucide-react';
import { useState } from 'react';
import type { BreadcrumbItem } from '@/types';
import MonitorClientContent from './monitorclient';
import SatuSehatContent from './satusehat';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Integrasi', href: '/integrasi' },
];

const menuItems = [
    {
        id: 'simrs',
        title: 'SIMRS',
        description:
            'Integrasi data pasien dan kunjungan dengan SIMRS Bedas Kertasari',
        icon: Link,
    },
    {
        id: 'satusehat',
        title: 'Satu Sehat',
        description: 'Sinkronisasi data dengan platform Satu Sehat',
        icon: Webhook,
    },
    {
        id: 'monitorclient',
        title: 'Monitor Client',
        description: 'Integrasi data untuk monitoring sistem',
        icon: Cloud,
    },
    {
        id: 'radiologi',
        title: 'Radiologi',
        description: 'Transfer hasil pemeriksaan radiologi',
        icon: ArrowRightLeft,
    },
    {
        id: 'barcode',
        title: 'Barcode / QR',
        description: 'Generate dan scan barcode untuk identitas pasien',
        icon: RefreshCw,
    },
];

const menuContent: Record<string, React.ComponentType> = {
    satusehat: SatuSehatContent,
    monitorclient: MonitorClientContent,
};

export default function IntegrasiIndex() {
    const [activeMenu, setActiveMenu] = useState(menuItems[0].id);

    const activeItem =
        menuItems.find((item) => item.id === activeMenu) ?? menuItems[0];
    const ActiveContent = menuContent[activeMenu] ?? null;

    return (
        <>
            <Head title="Integrasi" />
            <div className="flex flex-col gap-6">
                <div className="sticky top-0 z-20 bg-white px-4 pt-4 md:px-6 md:pt-6">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                            Integrasi Sistem
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            Pilih modul integrasi di bawah untuk melihat dan
                            mengelola koneksi sistem.
                        </p>
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeMenu === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveMenu(item.id)}
                                    className={`rounded-xl border p-4 text-left transition-all hover:shadow-md ${
                                        isActive
                                            ? 'border-indigo-500 bg-indigo-50 shadow-md ring-1 ring-indigo-500'
                                            : 'border-slate-200 bg-white hover:border-indigo-300'
                                    }`}
                                >
                                    <div
                                        className={`inline-flex rounded-lg p-2 ${isActive ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-600'}`}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-3 text-sm font-semibold text-slate-900">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 line-clamp-2 text-xs text-slate-500">
                                        {item.description}
                                    </p>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="px-4 pb-4 md:px-6 md:pb-6">
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                        <div className="sticky top-0 z-10 bg-white p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-lg bg-indigo-100 p-2 text-indigo-700">
                                        <activeItem.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold text-slate-900">
                                            {activeItem.title}
                                        </h2>
                                        <p className="text-sm text-slate-500">
                                            {activeItem.description}
                                        </p>
                                    </div>
                                </div>
                                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                                    Terhubung
                                </span>
                            </div>
                        </div>

                        <div className="p-6 pt-0">
                            {ActiveContent ? (
                                <ActiveContent />
                            ) : (
                                <div className="rounded-lg border border-slate-100 bg-slate-50 p-6 text-sm text-slate-500">
                                    Konten modul{' '}
                                    <span className="font-semibold text-slate-700">
                                        {activeItem.title}
                                    </span>{' '}
                                    akan ditampilkan di sini.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

IntegrasiIndex.layout = { breadcrumbs };
