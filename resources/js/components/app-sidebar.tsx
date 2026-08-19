import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { LayoutDashboard, Share2, Users, ShieldPlus, Wrench, Files, Speech, Settings, FilePlusIcon, CalendarIcon, FileText, LayoutGrid } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard, konfigurasi } from '@/routes';
import { pengguna } from '@/routes/konfigurasi';
import troubleshootIndex from '@/routes/troubleshoot';
import verifikatorRoutes from '@/routes/verifikator';
import type { NavItem } from '@/types';


const mainNavItems: NavItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutDashboard,
   },

    {
        id: 'konfigurasi',
        title: 'Konfigurasi',
        href: konfigurasi(),
        icon: Settings,
        items: [
            {
                id: 'pengguna',
                title: 'Pengguna',
                href: pengguna(),
                icon: Users,
            },
            {
                id: 'role',
                title: 'Role Akses',
                href: '/konfigurasi/role',
                icon: ShieldPlus,
            },
        ],
    },

    {
        id: 'sop',
        title: 'SOP',
        href: '/sop',
        icon: Files,
        items: [
            {
                id: 'buatsop',
                title: 'Buat SOP',
                href: '/sop/buatsop',
                icon: FilePlusIcon,
            },
        ],
    },

    {
        id: 'troubleshooting',
        title: 'Troubleshooting',
        href: troubleshootIndex.index(),
        icon: Wrench,
        items: [
            {
                id: 'kejadian',
                title: 'Kejadian',
                href: troubleshootIndex.kejadian(),
                icon: Speech,
            },
        ],
    },

    {
        id: 'visum',
        title: 'Visum',
        href: '/visum',
        icon: CalendarIcon,
        items: [
            {
                id: 'formvisum',
                title: 'Form Visum',
                href: '/visum',
                icon: FileText,
            },
        ],
    },

    {
        id: 'asset',
        title: 'Asset',
        href: '/asset/dataasset',
        icon: LayoutGrid,
        items: [
            {
                id: 'dataasset',
                title: 'Data Asset',
                href: '/asset/dataasset',
                icon: FilePlusIcon,
            },
            {
                id: 'laporan',
                title: 'Laporan',
                href: '/asset/laporan',
                icon: FileText,
            },
        ],
    },

    {
        id: 'radiologi',
        title: 'Radiologi',
        href: '/radiologi/ekpertise',
        icon: LayoutGrid,
        items: [
            {
                id: 'ekpertise',
                title: 'Ekspertise',
                href: '/radiologi/ekpertise',
                icon: FileText,
            },
            {
                id: 'share',
                title: 'Share',
                href: '/radiologi/share',
                icon: Share2,
            },
        ],
    },

    {
        id: 'verifikator',
        title: 'Verifikator',
        href: verifikatorRoutes.verifsop(),
        icon: ShieldPlus,
        items: [
            {
                id: 'verifsop',
                title: 'Verifikasi SOP',
                href: verifikatorRoutes.verifsop(),
                icon: Files,
            },
        ],
    },
];

const footerNavItems: NavItem[] = [
    // {
    //     title: 'Repository',
    //     href: 'https://github.com/laravel/react-starter-kit',
    //     icon: FolderGit2,
    // },
    // {
    //     title: 'Documentation',
    //     href: 'https://laravel.com/docs/starter-kits#react',
    //     icon: BookOpen,
    // },
];

export function AppSidebar() {
    const { props } = usePage();
    const menuPermissions: Record<string, boolean> = (props.menuPermissions as Record<string, boolean>) ?? {};
    const hasAnyPermission = Object.keys(menuPermissions).length > 0;

    const filteredMainNavItems = mainNavItems.map((item) => {
        if (item.items && item.items.length > 0) {
            const visibleChildren = item.items.filter((child) =>
                hasAnyPermission ? menuPermissions[`${item.id}.${child.id}`] === true : true,
            );

            const hasVisibleChild = visibleChildren.length > 0;
            const parentAllowed = menuPermissions[item.id!] === true;
            const showParent = hasAnyPermission ? (hasVisibleChild || parentAllowed) : true;

            if (!showParent) {
                return null;
            }

            return {
                ...item,
                items: visibleChildren,
            };
        }

        const showItem = hasAnyPermission ? menuPermissions[item.id!] === true : true;

        return showItem ? item : null;
    }).filter(Boolean) as NavItem[];

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={filteredMainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

