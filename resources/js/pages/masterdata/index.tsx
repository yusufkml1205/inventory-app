import { Head, Link } from '@inertiajs/react';
import { Database, Package, Users, Warehouse, ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Master Data',
        href: '/masterdata',
    },
];

const masterDataModules = [
    {
        title: 'Material',
        description: 'Kelola data material dan bahan baku',
        icon: Package,
        href: '/masterdata/materials',
        count: 30,
    },
    {
        title: 'Produk',
        description: 'Kelola data produk furniture jadi',
        icon: ShoppingBag,
        href: '/masterdata/products',
        count: 20,
    },
    {
        title: 'Supplier',
        description: 'Kelola data supplier dan vendor',
        icon: Warehouse,
        href: '/masterdata/suppliers',
        count: 10,
    },
    {
        title: 'Customer',
        description: 'Kelola data customer dan pelanggan',
        icon: Users,
        href: '/masterdata/customers',
        count: 15,
    },
];

export default function MasterData() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Master Data" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold">Master Data</h1>
                    <p className="text-muted-foreground">
                        Kelola data master untuk operasional CV Posteak Furniture
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {masterDataModules.map((module) => {
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
