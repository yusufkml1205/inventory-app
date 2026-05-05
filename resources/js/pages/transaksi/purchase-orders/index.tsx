import { Head, Link, router } from '@inertiajs/react';
import { Plus, Pencil, Trash2, Eye, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

interface PurchaseOrder {
    id: number;
    po_number: string;
    supplier_name: string;
    order_date: string;
    status: string;
    grand_total: number;
    items_count: number;
}

interface Props {
    purchaseOrders: PurchaseOrder[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Transaksi Pembelian', href: '/transaksi' },
    { title: 'Purchase Orders', href: '/transaksi/purchase-orders' },
];

export default function PurchaseOrderIndex({ purchaseOrders }: Props) {
    const handleDelete = (id: number, poNumber: string) => {
        if (confirm(`Apakah Anda yakin ingin menghapus PO "${poNumber}"?`)) {
            router.delete(`/transaksi/purchase-orders/${id}`);
        }
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value);
    };

    const getStatusBadgeVariant = (status: string) => {
        switch (status) {
            case 'Draft':
                return 'secondary';
            case 'Sent to Supplier':
                return 'default';
            case 'In Transit':
                return 'outline';
            case 'Partially Received':
                return 'outline';
            case 'Received':
                return 'default';
            case 'Cancelled':
                return 'destructive';
            default:
                return 'secondary';
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Purchase Orders" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Purchase Orders</h1>
                        <p className="text-muted-foreground">
                            Kelola data purchase order material
                        </p>
                    </div>
                    <Link href="/transaksi/purchase-orders/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Purchase Order
                        </Button>
                    </Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Daftar Purchase Order</CardTitle>
                        <CardDescription>
                            Total {purchaseOrders.length} purchase order terdaftar
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nomor PO</TableHead>
                                        <TableHead>Supplier</TableHead>
                                        <TableHead>Tanggal Order</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Jumlah Item</TableHead>
                                        <TableHead className="text-right">Grand Total</TableHead>
                                        <TableHead className="text-center">Aksi</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {purchaseOrders.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                                                Belum ada data purchase order
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        purchaseOrders.map((po) => (
                                            <TableRow key={po.id}>
                                                <TableCell className="font-medium">
                                                    {po.po_number}
                                                </TableCell>
                                                <TableCell>{po.supplier_name}</TableCell>
                                                <TableCell>{po.order_date}</TableCell>
                                                <TableCell>
                                                    <Badge variant={getStatusBadgeVariant(po.status)}>
                                                        {po.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>{po.items_count} item</TableCell>
                                                <TableCell className="text-right font-semibold">
                                                    {formatCurrency(po.grand_total)}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link href={`/transaksi/purchase-orders/${po.id}`}>
                                                            <Button variant="ghost" size="sm" title="Lihat Detail">
                                                                <Eye className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Link href={`/transaksi/purchase-orders/${po.id}/edit`}>
                                                            <Button variant="ghost" size="sm" title="Edit">
                                                                <Pencil className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            title="Hapus"
                                                            onClick={() => handleDelete(po.id, po.po_number)}
                                                        >
                                                            <Trash2 className="h-4 w-4 text-red-600" />
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
