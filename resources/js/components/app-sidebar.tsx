import { Link, usePage } from '@inertiajs/react';
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
import { getMainNavItems } from '@/config/menu';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';


const mainNavItems: NavItem[] = getMainNavItems();

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

