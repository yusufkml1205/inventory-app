import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Calendar, Download, Truck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { useState } from 'react';

interface DeliveryOrder {
    do_number: string;
    delivery_date: string;
    customer_name: string;
    status: string;
    grand_total: number;
    profit: number;
}

interface Props {
    deliveryOrders: DeliveryOrder[];
    totalRevenue: number;
    totalProfit: number;
    totalOrders: number;
    startDate: string;
    endDate: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Laporan', href: '/laporan' },
    { title: 'Laporan Penjualan', href: '#' },
];

const statusColors: Record<string, string> = {
    'Pending': 'bg-yellow-500',
    'Approved': 'bg-blue-500',
    'In Transit': 'bg-purple-500',
    'Delivered': 'bg-green-500',
    'Cancelled': 'bg-red-500',
};

export default function SalesReport({ deliveryOrders, totalRevenue, totalProfit, totalOrders, startDate, endDate }: Props) {
    const [filters, setFilters] = useState({
        start_date: startDate,
        end_date: endDate,
    });

    const handleFilter = () => {
        router.get('/laporan/sales', filters);
    };

    const profitMargin = totalRevenue > 0 ? ((totalProfit / totalRevenue) * 100).toFixed(1) : '0.0';

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Laporan Penjualan" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Link href="/laporan">
                                <Button variant="ghost" size="sm">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Kembali
                                </Button>
                            </Link>
                        </div>
                        <h1 className="text-3xl font-bold">Laporan Penjualan</h1>
                        <p className="text-muted-foreground">
                            Laporan delivery order dan penjualan produk
                        </p>
                    </div>
                    <a href={`/laporan/sales/pdf?start_date=${filters.start_date}&end_date=${filters.end_date}`} target="_blank">
                        <Button>
                            <Download className="h-4 w-4 mr-2" />
                            Export PDF
                        </Button>
                    </a>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Filter Periode</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-4 items-end">
                            <div className="flex-1">
                                <Label htmlFor="start_date">Tanggal Mulai</Label>
                                <Input
                                    id="start_date"
                                    type="date"
                                    value={filters.start_date}
                                    onChange={(e) => setFilters({ ...filters, start_date: e.target.value })}
                                />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="end_date">Tanggal Akhir</Label>
                                <Input
                                    id="end_date"
                                    type="date"
                                    value={filters.end_date}
                                    onChange={(e) => setFilters({ ...filters, end_date: e.target.value })}
                                />
                            </div>
                            <Button onClick={handleFilter}>
                                <Calendar className="h-4 w-4 mr-2" />
                                Filter
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Total Orders</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{totalOrders}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Delivery orders
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Total Revenue</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">
                                $ {totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Total pendapatan
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Total Profit</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-green-600">
                                $ {totalProfit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Total profit
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Profit Margin</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{profitMargin}%</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Margin keuntungan
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Delivery Orders</CardTitle>
                        <CardDescription>
                            Daftar delivery order dalam periode terpilih
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>DO Number</TableHead>
                                    <TableHead>Delivery Date</TableHead>
                                    <TableHead>Customer</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Revenue</TableHead>
                                    <TableHead className="text-right">Profit</TableHead>
                                    <TableHead className="text-right">Margin</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {deliveryOrders.map((order, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{order.do_number}</TableCell>
                                        <TableCell>{order.delivery_date}</TableCell>
                                        <TableCell>{order.customer_name}</TableCell>
                                        <TableCell>
                                            <Badge className={statusColors[order.status] || 'bg-gray-500'}>
                                                {order.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            $ {order.grand_total.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            $ {order.profit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {order.grand_total > 0 ? ((order.profit / order.grand_total) * 100).toFixed(1) : 0}%
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
