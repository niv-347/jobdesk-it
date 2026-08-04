import { Link } from '@inertiajs/react';
import { Briefcase, LayoutGrid, Settings } from 'lucide-react';
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
import { dashboard, konfigurasi, sop } from '@/routes';
import { pengguna } from '@/routes/konfigurasi';
import { buatsop } from '@/routes/sop';
import troubleshootIndex from '@/routes/troubleshoot';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
   },

    {
        title: 'Konfigurasi',
        href: konfigurasi(),
        icon: Settings,
        items: [
            {
                title: 'Pengguna',
                href: pengguna(),
                icon: Briefcase,
            },
            {
                title: 'Role Akses',
                href: '/konfigurasi/role',
                icon: Briefcase,
            },
        ],
    },

    {
        title: 'SOP',
        href: sop(),
        icon: LayoutGrid,
        items: [
            {
                title: 'Buat SOP',
                href: buatsop(),
                icon: Briefcase,
            },
        ],
    },

    {
        title: 'Troubleshooting',
        href: troubleshootIndex.index(),
        icon: LayoutGrid,
        items: [
            {
                title: 'Kejadian',
                href: troubleshootIndex.kejadian(),
                icon: Briefcase,
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
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

