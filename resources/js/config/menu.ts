import type { LucideIcon } from 'lucide-react';
import {
    Briefcase,
    CalendarIcon,
    FileText,
    LayoutGrid,
    Settings,
    Share2,
    Files,
    FilePlusIcon,
    Wrench,
    Speech,
    ShieldPlus,
} from 'lucide-react';
import { dashboard, konfigurasi } from '@/routes';
import { pengguna } from '@/routes/konfigurasi';
import troubleshootIndex from '@/routes/troubleshoot';
import verifikatorRoutes from '@/routes/verifikator';
import type { NavItem } from '@/types';

interface BaseMenuItem {
    id: string;
    title: string;
    icon: LucideIcon;
    href: string;
    children?: BaseMenuItem[];
}

const baseMenuItems: BaseMenuItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        icon: LayoutGrid,
        href: dashboard(),
    },
    {
        id: 'konfigurasi',
        title: 'Konfigurasi',
        icon: Settings,
        href: konfigurasi(),
        children: [
            { id: 'pengguna', title: 'Pengguna', icon: Briefcase, href: pengguna() },
            { id: 'role', title: 'Role Akses', icon: Briefcase, href: '/konfigurasi/role' },
        ],
    },
    {
        id: 'sop',
        title: 'SOP',
        icon: Files,
        href: '/sop',
        children: [
            { id: 'buatsop', title: 'Buat SOP', icon: FilePlusIcon, href: '/sop/buatsop' },
        ],
    },
    {
        id: 'troubleshooting',
        title: 'Troubleshooting',
        icon: Wrench,
        href: troubleshootIndex.index(),
        children: [
            { id: 'kejadian', title: 'Kejadian', icon: Speech, href: troubleshootIndex.kejadian() },
        ],
    },
    {
        id: 'visum',
        title: 'Visum',
        icon: CalendarIcon,
        href: '/visum',
        children: [
            { id: 'formvisum', title: 'Form Visum', icon: FileText, href: '/visum' },
        ],
    },
    {
        id: 'asset',
        title: 'Asset',
        icon: LayoutGrid,
        href: '/asset/dataasset',
        children: [
            { id: 'dataasset', title: 'Data Asset', icon: FilePlusIcon, href: '/asset/dataasset' },
            { id: 'laporan', title: 'Laporan', icon: FileText, href: '/asset/laporan' },
        ],
    },
    {
        id: 'radiologi',
        title: 'Radiologi',
        icon: LayoutGrid,
        href: '/radiologi/ekpertise',
        children: [
            { id: 'ekpertise', title: 'Ekspertise', icon: FileText, href: '/radiologi/ekpertise' },
            { id: 'share', title: 'Share', icon: Share2, href: '/radiologi/share' },
        ],
    },
    {
        id: 'verifikator',
        title: 'Verifikator',
        icon: ShieldPlus,
        href: verifikatorRoutes.verifsop(),
        children: [
            { id: 'verifsop', title: 'Verifikasi SOP', icon: Files, href: verifikatorRoutes.verifsop() },
        ],
    },
];

export function getMainNavItems(): NavItem[] {
    return baseMenuItems.map((item) => ({
        id: item.id,
        title: item.title,
        href: item.href,
        icon: item.icon,
        items: item.children?.map((child) => ({
            id: child.id,
            title: child.title,
            href: child.href,
            icon: child.icon,
        })),
    }));
}

export function getHeaderNavItems(): NavItem[] {
    return baseMenuItems
        .filter((item) => item.id === 'dashboard')
        .map((item) => ({
            title: item.title,
            href: item.href,
            icon: item.icon,
        })) as NavItem[];
}

export interface MenuItemConfig {
    id: string;
    label: string;
    icon: LucideIcon;
    enabled: boolean;
    children?: MenuItemConfig[];
}

export function getDefaultMenuItems(): MenuItemConfig[] {
    return baseMenuItems.map((item) => ({
        id: item.id,
        label: item.title,
        icon: item.icon,
        enabled: true,
        children: item.children?.map((child) => ({
            id: child.id,
            label: child.title,
            icon: child.icon,
            enabled: true,
        })),
    }));
}

export function getPermissionLabels(): Record<string, string> {
    const labels: Record<string, string> = {};

    baseMenuItems.forEach((item) => {
        labels[item.id] = item.title;
        item.children?.forEach((child) => {
            labels[`${item.id}.${child.id}`] = child.title;
        });
    });

    return labels;
}
