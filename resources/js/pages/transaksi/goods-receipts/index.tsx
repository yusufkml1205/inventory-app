import { Head, Link, router } from '@inertiajs/react';
import { Plus, Trash2, Eye } from 'lucide-react';
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

interface GoodsReceipt {
    id: number;
    gr_number: string;
    po_number: string;
    supplier_name: string;
    receipt_date: string;
    received_by: string;
    items_count: number;
}

interface Props {
    goodsReceipts: GoodsReceipt[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Transaksi Pembelian', href: '/transaksi' },
    { title: 'Goods Receipts', href: '/transaksi/goods-receipts' },
];

export default function GoodsReceiptIndex({ goodsReceipts }: Props) {
    const handleDelete = (id: number, grNumber: string) => {
        if (confirm(`Apakah Anda yakin ingin menghapus Goods Receipt "${grNumber}"?`)) {
            router.delete(`/transaksi/goods-receipts/${id}`);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Goods Receipts" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Goods Receipts</h1>
                        <p className="text-muted-foreground">
                            Kelola data penerimaan barang dari supplier
                        </p>
                    </div>
                    <Link href="/transaksi/goods-receipts/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Goods Receipt
                        </Button>
                    </Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Daftar Goods Receipt</CardTitle>
                        <CardDescription>
                            Total {goodsReceipts.length} penerimaan barang terdaftar
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nomor GR</TableHead>
                                        <TableHead>Nomor PO</TableHead>
                                        <TableHead>Supplier</TableHead>
                                        <TableHead>Tanggal Terima</TableHead>
                                        <TableHead>Diterima Oleh</TableHead>
                                        <TableHead>Jumlah Item</TableHead>
                                        <TableHead className="text-center">Aksi</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {goodsReceipts.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                                                Belum ada data penerimaan barang
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        goodsReceipts.map((gr) => (
                                            <TableRow key={gr.id}>
                                                <TableCell className="font-medium">
                                                    {gr.gr_number}
                                                </TableCell>
                                                <TableCell>{gr.po_number}</TableCell>
                                                <TableCell>{gr.supplier_name}</TableCell>
                                                <TableCell>{formatDate(gr.receipt_date)}</TableCell>
                                                <TableCell>{gr.received_by}</TableCell>
                                                <TableCell>{gr.items_count} item</TableCell>
                                                <TableCell>
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link href={`/transaksi/goods-receipts/${gr.id}`}>
                                                            <Button variant="ghost" size="sm" title="Lihat Detail">
                                                                <Eye className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            title="Hapus"
                                                            onClick={() => handleDelete(gr.id, gr.gr_number)}
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
