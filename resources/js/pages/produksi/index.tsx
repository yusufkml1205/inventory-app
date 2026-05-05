import { Head, Link } from '@inertiajs/react';
import { Factory, FileText, PackageOpen, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Transaksi Produksi',
        href: '/produksi',
    },
];

const produksiModules = [
    {
        title: 'Work Order',
        description: 'Kelola work order produksi furniture',
        icon: FileText,
        href: '/produksi/work-orders',
        count: 15,
    },
    {
        title: 'Material Issue',
        description: 'Pencatatan penggunaan material untuk produksi',
        icon: PackageOpen,
        href: '/produksi/material-issues',
        count: 45,
    },
    {
        title: 'Finished Goods',
        description: 'Barang jadi hasil produksi',
        icon: Package,
        href: '/produksi/finished-goods',
        count: 12,
    },
];

export default function TransaksiProduksi() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Transaksi Produksi" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Transaksi Produksi</h1>
                        <p className="text-muted-foreground">
                            Kelola work order, material issue, dan finished goods
                        </p>
                    </div>
                    <Link href="/produksi/work-orders/create">
                        <Button>
                            <Factory className="mr-2 h-4 w-4" />
                            Work Order Baru
                        </Button>
                    </Link>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {produksiModules.map((module) => {
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
