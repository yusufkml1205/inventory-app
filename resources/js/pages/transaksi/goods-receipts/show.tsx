import { Head, Link, router } from '@inertiajs/react';
import { ChevronLeft, Trash2 } from 'lucide-react';
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
}

interface GoodsReceiptItem {
    material_code: string;
    material_name: string;
    unit: string;
    quantity_ordered: number;
    quantity_received: number;
}

interface GoodsReceipt {
    id: number;
    gr_number: string;
    po_number: string;
    supplier: Supplier;
    receipt_date: string;
    received_by: string;
    notes: string | null;
    created_at: string;
    items: GoodsReceiptItem[];
}

interface Props {
    goodsReceipt: GoodsReceipt;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Transaksi Pembelian', href: '/transaksi' },
    { title: 'Goods Receipts', href: '/transaksi/goods-receipts' },
    { title: 'Detail Goods Receipt', href: '#' },
];

export default function ShowGoodsReceipt({ goodsReceipt }: Props) {
    const handleDelete = () => {
        if (confirm(`Apakah Anda yakin ingin menghapus Goods Receipt "${goodsReceipt.gr_number}"?`)) {
            router.delete(`/transaksi/goods-receipts/${goodsReceipt.id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Detail Goods Receipt - ${goodsReceipt.gr_number}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/transaksi/goods-receipts">
                            <Button variant="ghost" size="sm">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold">{goodsReceipt.gr_number}</h1>
                            <p className="text-muted-foreground">
                                Detail informasi penerimaan barang
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="destructive" onClick={handleDelete}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                        </Button>
                    </div>
                </div>

                {/* Card 1: GR Header Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Informasi Goods Receipt</CardTitle>
                        <CardDescription>Detail informasi penerimaan barang</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Nomor GR</p>
                                <p className="text-lg font-semibold">{goodsReceipt.gr_number}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Nomor PO</p>
                                <p className="text-lg font-semibold">{goodsReceipt.po_number}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Tanggal Terima</p>
                                <p className="text-lg">{goodsReceipt.receipt_date}</p>
                            </div>
                        </div>

                        <div className="border-t pt-4">
                            <h3 className="mb-3 font-semibold">Informasi Supplier</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Nama Supplier</p>
                                    <p className="text-lg font-semibold">{goodsReceipt.supplier.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Kode Supplier</p>
                                    <p className="text-lg">{goodsReceipt.supplier.code}</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t pt-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Diterima Oleh</p>
                                    <p className="text-sm">{goodsReceipt.received_by}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Dibuat Pada</p>
                                    <p className="text-sm">{goodsReceipt.created_at}</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Card 2: Items Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Item Penerimaan Barang</CardTitle>
                        <CardDescription>Daftar material yang diterima</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Material</TableHead>
                                        <TableHead>Unit</TableHead>
                                        <TableHead className="text-right">Qty Ordered</TableHead>
                                        <TableHead className="text-right">Qty Received</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {goodsReceipt.items.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <div>
                                                    <p className="font-medium">{item.material_name}</p>
                                                    <p className="text-sm text-muted-foreground">{item.material_code}</p>
                                                </div>
                                            </TableCell>
                                            <TableCell>{item.unit}</TableCell>
                                            <TableCell className="text-right">{item.quantity_ordered}</TableCell>
                                            <TableCell className="text-right">
                                                <span className={item.quantity_received >= item.quantity_ordered ? 'text-green-600 font-medium' : 'text-amber-600 font-medium'}>
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

                {/* Card 3: Notes (if available) */}
                {goodsReceipt.notes && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Catatan</CardTitle>
                            <CardDescription>Catatan tambahan penerimaan barang</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm whitespace-pre-wrap">{goodsReceipt.notes}</p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppLayout>
    );
}
