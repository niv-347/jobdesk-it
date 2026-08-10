import { Head } from '@inertiajs/react';

import { visum } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Visum', href: visum() },
];

export default function Visum() {
    return (
        <>
            <Head title="Visum" />

            <div className="p-6">
                <h1 className="text-2xl font-bold text-slate-900">Visum</h1>
                <p className="mt-1 text-sm text-slate-500">Halaman visum.</p>
            </div>
        </>
    );
}

Visum.layout = { breadcrumbs };
