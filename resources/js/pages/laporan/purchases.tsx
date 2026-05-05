import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Calendar, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { useState } from 'react';

interface PurchaseOrder {
    po_number: string;
    order_date: string;
    supplier_name: string;
    status: string;
    grand_total: number;
}

interface Props {
    purchaseOrders: PurchaseOrder[];
    totalPurchases: number;
    completedOrders: number;
    startDate: string;
    endDate: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Laporan', href: '/laporan' },
    { title: 'Laporan Pembelian', href: '#' },
];

const statusColors: Record<string, string> = {
    'Draft': 'bg-gray-500',
    'Sent to Supplier': 'bg-blue-500',
    'In Transit': 'bg-yellow-500',
    'Partially Received': 'bg-orange-500',
    'Received': 'bg-green-500',
    'Cancelled': 'bg-red-500',
};

export default function PurchasesReport({ purchaseOrders, totalPurchases, completedOrders, startDate, endDate }: Props) {
    const [filters, setFilters] = useState({
        start_date: startDate,
        end_date: endDate,
    });

    const handleFilter = () => {
        router.get('/laporan/purchases', filters);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Laporan Pembelian" />
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
                        <h1 className="text-3xl font-bold">Laporan Pembelian</h1>
                        <p className="text-muted-foreground">
                            Laporan purchase order dan pembelian material
                        </p>
                    </div>
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

                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Total Purchase Orders</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{purchaseOrders.length}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                PO dalam periode
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Total Purchases</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">
                                Rp {totalPurchases.toLocaleString('id-ID', { minimumFractionDigits: 2 })}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Total pembelian
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Completed Orders</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-green-600">{completedOrders}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                PO yang selesai
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Purchase Orders</CardTitle>
                        <CardDescription>
                            Daftar purchase order dalam periode terpilih
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>PO Number</TableHead>
                                    <TableHead>Order Date</TableHead>
                                    <TableHead>Supplier</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Grand Total</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {purchaseOrders.map((po, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{po.po_number}</TableCell>
                                        <TableCell>{po.order_date}</TableCell>
                                        <TableCell>{po.supplier_name}</TableCell>
                                        <TableCell>
                                            <Badge className={statusColors[po.status] || 'bg-gray-500'}>
                                                {po.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            Rp {po.grand_total.toLocaleString('id-ID', { minimumFractionDigits: 2 })}
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
