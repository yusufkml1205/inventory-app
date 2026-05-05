import { Head, Link } from '@inertiajs/react';
import { BarChart3, Package, ShoppingCart, Factory, Truck, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Laporan',
        href: '/laporan',
    },
];

const laporanModules = [
    {
        title: 'Laporan Persediaan',
        description: 'Laporan inventory dan stok material',
        icon: Package,
        href: '/laporan/inventory',
    },
    {
        title: 'Laporan Pembelian',
        description: 'Laporan purchase order dan pembelian',
        icon: ShoppingCart,
        href: '/laporan/purchases',
    },
    {
        title: 'Laporan Produksi',
        description: 'Laporan work order dan produksi',
        icon: Factory,
        href: '/laporan/production',
    },
    {
        title: 'Laporan Penjualan',
        description: 'Laporan delivery order dan penjualan',
        icon: Truck,
        href: '/laporan/sales',
    },
    {
        title: 'Laporan Profit',
        description: 'Analisis keuntungan dan profit margin',
        icon: TrendingUp,
        href: '/laporan/profit',
    },
    {
        title: 'Dashboard Analytics',
        description: 'Dashboard dan analitik bisnis',
        icon: BarChart3,
        href: '/dashboard',
    },
];

export default function Laporan() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Laporan" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold">Laporan & Dashboard</h1>
                    <p className="text-muted-foreground">
                        Akses berbagai laporan dan analitik bisnis
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {laporanModules.map((module) => {
                        const Icon = module.icon;
                        return (
                            <Link key={module.href} href={module.href}>
                                <Card className="cursor-pointer transition-all hover:shadow-lg hover:border-primary">
                                    <CardHeader>
                                        <div className="flex items-center gap-2">
                                            <div className="rounded-lg bg-primary/10 p-2">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <CardTitle>{module.title}</CardTitle>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            {module.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </AppLayout>
    );
}
