import { Head, Link, router } from '@inertiajs/react';
import { ChevronLeft, Pencil, Trash2 } from 'lucide-react';
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

interface Supplier {
    name: string;
    code: string;
    address: string;
    phone: string;
}

interface PurchaseOrderItem {
    material_code: string;
    material_name: string;
    unit: string;
    quantity: number;
    unit_price: number;
    subtotal: number;
    quantity_received: number;
}

interface GoodsReceipt {
    id: number;
    gr_number: string;
    receipt_date: string;
    items_count: number;
}

interface PurchaseOrder {
    id: number;
    po_number: string;
    supplier: Supplier;
    order_date: string;
    status: string;
    subtotal: number;
    grand_total: number;
    notes: string | null;
    created_by: string;
    created_at: string;
    items: PurchaseOrderItem[];
    goods_receipts: GoodsReceipt[];
}

interface Props {
    purchaseOrder: PurchaseOrder;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Transaksi', href: '/transaksi' },
    { title: 'Purchase Order', href: '/transaksi/purchase-orders' },
    { title: 'Detail Purchase Order', href: '#' },
];

export default function ShowPurchaseOrder({ purchaseOrder }: Props) {
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value);
    };

    const getStatusBadge = (status: string) => {
        const statusMap: Record<string, { variant: 'default' | 'secondary' | 'destructive' | 'outline'; label: string }> = {
            draft: { variant: 'secondary', label: 'Draft' },
            pending: { variant: 'outline', label: 'Pending' },
            approved: { variant: 'default', label: 'Approved' },
            received: { variant: 'default', label: 'Received' },
            cancelled: { variant: 'destructive', label: 'Cancelled' },
        };

        const statusInfo = statusMap[status.toLowerCase()] || { variant: 'outline', label: status };
        return <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>;
    };

    const handleDelete = () => {
        if (confirm(`Apakah Anda yakin ingin menghapus Purchase Order "${purchaseOrder.po_number}"?`)) {
            router.delete(`/transaksi/purchase-orders/${purchaseOrder.id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Detail Purchase Order - ${purchaseOrder.po_number}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/transaksi/purchase-orders">
                            <Button variant="ghost" size="sm">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold">{purchaseOrder.po_number}</h1>
                            <p className="text-muted-foreground">
                                Detail informasi purchase order
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Link href={`/transaksi/purchase-orders/${purchaseOrder.id}/edit`}>
                            <Button>
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit
                            </Button>
                        </Link>
                        <Button variant="destructive" onClick={handleDelete}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                        </Button>
                    </div>
                </div>

                {/* Card 1: PO Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Informasi Purchase Order</CardTitle>
                        <CardDescription>Detail informasi PO dan supplier</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Nomor PO</p>
                                <p className="text-lg font-semibold">{purchaseOrder.po_number}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Tanggal Order</p>
                                <p className="text-lg">{purchaseOrder.order_date}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Status</p>
                                <div className="mt-1">
                                    {getStatusBadge(purchaseOrder.status)}
                                </div>
                            </div>
                        </div>

                        <div className="border-t pt-4">
                            <h3 className="mb-3 font-semibold">Informasi Supplier</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Nama Supplier</p>
                                    <p className="text-lg font-semibold">{purchaseOrder.supplier.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Kode Supplier</p>
                                    <p className="text-lg">{purchaseOrder.supplier.code}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Alamat</p>
                                    <p className="text-sm">{purchaseOrder.supplier.address}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Telepon</p>
                                    <p className="text-sm">{purchaseOrder.supplier.phone}</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t pt-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Dibuat Oleh</p>
                                    <p className="text-sm">{purchaseOrder.created_by}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Dibuat Pada</p>
                                    <p className="text-sm">{purchaseOrder.created_at}</p>
                                </div>
                            </div>
                        </div>

                        {purchaseOrder.notes && (
                            <div className="border-t pt-4">
                                <p className="text-sm font-medium text-muted-foreground">Catatan</p>
                                <p className="mt-1 text-sm">{purchaseOrder.notes}</p>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Card 2: Items Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Item Purchase Order</CardTitle>
                        <CardDescription>Daftar material yang dipesan</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Material</TableHead>
                                        <TableHead>Unit</TableHead>
                                        <TableHead className="text-right">Qty</TableHead>
                                        <TableHead className="text-right">Unit Price</TableHead>
                                        <TableHead className="text-right">Subtotal</TableHead>
                                        <TableHead className="text-right">Qty Received</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {purchaseOrder.items.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <div>
                                                    <p className="font-medium">{item.material_name}</p>
                                                    <p className="text-sm text-muted-foreground">{item.material_code}</p>
                                                </div>
                                            </TableCell>
                                            <TableCell>{item.unit}</TableCell>
                                            <TableCell className="text-right">{item.quantity}</TableCell>
                                            <TableCell className="text-right">{formatCurrency(item.unit_price)}</TableCell>
                                            <TableCell className="text-right font-medium">{formatCurrency(item.subtotal)}</TableCell>
                                            <TableCell className="text-right">
                                                <span className={item.quantity_received >= item.quantity ? 'text-green-600 font-medium' : ''}>
                                                    {item.quantity_received}
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>

                {/* Card 3: Totals */}
                <Card>
                    <CardHeader>
                        <CardTitle>Total</CardTitle>
                        <CardDescription>Ringkasan nilai purchase order</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <p className="text-sm font-medium text-muted-foreground">Subtotal</p>
                                <p className="text-lg font-semibold">{formatCurrency(purchaseOrder.subtotal)}</p>
                            </div>
                            <div className="flex justify-between border-t pt-3">
                                <p className="text-base font-bold">Grand Total</p>
                                <p className="text-2xl font-bold text-green-600">{formatCurrency(purchaseOrder.grand_total)}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Card 4: Goods Receipts (if exist) */}
                {purchaseOrder.goods_receipts && purchaseOrder.goods_receipts.length > 0 && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Goods Receipts Terkait</CardTitle>
                            <CardDescription>Daftar penerimaan barang dari PO ini</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>GR Number</TableHead>
                                            <TableHead>Tanggal Terima</TableHead>
                                            <TableHead>Jumlah Item</TableHead>
                                            <TableHead className="text-right">Aksi</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {purchaseOrder.goods_receipts.map((gr) => (
                                            <TableRow key={gr.id}>
                                                <TableCell className="font-medium">{gr.gr_number}</TableCell>
                                                <TableCell>{gr.receipt_date}</TableCell>
                                                <TableCell>{gr.items_count} item(s)</TableCell>
                                                <TableCell className="text-right">
                                                    <Link href={`/transaksi/goods-receipts/${gr.id}`}>
                                                        <Button variant="outline" size="sm">
                                                            Lihat Detail
                                                        </Button>
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppLayout>
    );
}
