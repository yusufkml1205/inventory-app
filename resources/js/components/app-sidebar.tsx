import { Link } from '@inertiajs/react';
import { 
    BookOpen, 
    FolderGit2, 
    LayoutGrid, 
    Database, 
    ShoppingCart, 
    PackagePlus, 
    Factory, 
    Truck,
    BarChart3 
} from 'lucide-react';
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
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Master Data',
        href: '/masterdata',
        icon: Database,
    },
    {
        title: 'Transaksi Pembelian',
        href: '/transaksi',
        icon: ShoppingCart,
    },
    {
        title: 'Adjust Stock',
        href: '/adjust',
        icon: PackagePlus,
    },
    {
        title: 'Transaksi Produksi',
        href: '/produksi',
        icon: Factory,
    },
    {
        title: 'Transaksi Penjualan',
        href: '/penjualan',
        icon: Truck,
    },
    {
        title: 'Laporan',
        href: '/laporan',
        icon: BarChart3,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
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
