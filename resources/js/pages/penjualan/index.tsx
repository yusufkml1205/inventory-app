import { Head, Link } from '@inertiajs/react';
import { Truck, FileText, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Transaksi Penjualan',
        href: '/penjualan',
    },
];

export default function TransaksiPenjualan() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Transaksi Penjualan" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Transaksi Penjualan</h1>
                        <p className="text-muted-foreground">
                            Kelola delivery order dan penjualan produk furniture
                        </p>
                    </div>
                    <Link href="/penjualan/delivery-orders/create">
                        <Button>
                            <Truck className="mr-2 h-4 w-4" />
                            Delivery Order Baru
                        </Button>
                    </Link>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileText className="h-5 w-5 text-blue-600" />
                                Total DO
                            </CardTitle>
                            <CardDescription>
                                Total delivery orders
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">45</p>
                            <p className="text-xs text-muted-foreground">Bulan ini</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-green-600" />
                                Total Revenue
                            </CardTitle>
                            <CardDescription>
                                Pendapatan penjualan
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">Rp 2.5M</p>
                            <p className="text-xs text-muted-foreground">Bulan ini</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Truck className="h-5 w-5 text-orange-600" />
                                In Transit
                            </CardTitle>
                            <CardDescription>
                                Sedang dalam pengiriman
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">12</p>
                            <p className="text-xs text-muted-foreground">Delivery orders</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Placeholder for DO list */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Delivery Orders</CardTitle>
                        <CardDescription>
                            Daftar delivery order terkini
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-center text-muted-foreground py-8">
                            Data akan ditampilkan di sini
                        </p>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
