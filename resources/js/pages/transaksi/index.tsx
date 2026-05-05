import { Head, Link } from '@inertiajs/react';
import { ShoppingCart, FileText, PackageCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Transaksi Pembelian',
        href: '/transaksi',
    },
];

const transaksiModules = [
    {
        title: 'Purchase Order',
        description: 'Kelola purchase order dan pembelian material',
        icon: ShoppingCart,
        href: '/transaksi/purchase-orders',
        count: 30,
    },
    {
        title: 'Goods Receipt',
        description: 'Pencatatan penerimaan barang dari supplier',
        icon: PackageCheck,
        href: '/transaksi/goods-receipts',
        count: 25,
    },
];

export default function TransaksiPembelian() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Transaksi Pembelian" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold">Transaksi Pembelian Material</h1>
                    <p className="text-muted-foreground">
                        Kelola purchase order dan penerimaan barang
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {transaksiModules.map((module) => {
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
                                                <CardDescription className="text-xs">
                                                    {module.count} records
                                                </CardDescription>
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
