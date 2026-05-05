import { Head, Link, router } from '@inertiajs/react';
import { Plus, Eye, Trash2 } from 'lucide-react';
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

interface FinishedGood {
    id: number;
    wo_number: string;
    product_name: string;
    quantity_completed: number;
    quantity_available: number;
    unit_cost: number;
    production_date: string;
    storage_location: string | null;
}

interface Props {
    finishedGoods: FinishedGood[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Produksi', href: '/produksi' },
    { title: 'Finished Goods', href: '/produksi/finished-goods' },
];

export default function FinishedGoodIndex({ finishedGoods }: Props) {
    const handleDelete = (id: number, productName: string) => {
        if (confirm(`Apakah Anda yakin ingin menghapus finished good "${productName}"?`)) {
            router.delete(`/produksi/finished-goods/${id}`, {
                onSuccess: () => {
                    router.visit('/produksi/finished-goods');
                },
            });
        }
    };

    const formatDate = (dateString: string) => {
        return new Intl.DateTimeFormat('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }).format(new Date(dateString));
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        }).format(amount);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Finished Goods" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Finished Goods</h1>
                        <p className="text-muted-foreground">
                            Barang jadi hasil produksi
                        </p>
                    </div>
                    <Link href="/produksi/finished-goods/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Finished Good
                        </Button>
                    </Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Daftar Finished Goods</CardTitle>
                        <CardDescription>
                            Total {finishedGoods.length} finished good terdaftar
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>WO Number</TableHead>
                                        <TableHead>Product</TableHead>
                                        <TableHead className="text-right">Qty Completed</TableHead>
                                        <TableHead className="text-right">Qty Available</TableHead>
                                        <TableHead className="text-right">Unit Cost</TableHead>
                                        <TableHead>Production Date</TableHead>
                                        <TableHead>Storage Location</TableHead>
                                        <TableHead className="text-center">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {finishedGoods.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                                                Belum ada data finished good
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        finishedGoods.map((fg) => (
                                            <TableRow key={fg.id}>
                                                <TableCell className="font-medium">
                                                    {fg.wo_number}
                                                </TableCell>
                                                <TableCell className="font-medium">
                                                    {fg.product_name}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    {fg.quantity_completed.toLocaleString('id-ID')}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    {fg.quantity_available.toLocaleString('id-ID')}
                                                </TableCell>
                                                <TableCell className="text-right font-medium">
                                                    {formatCurrency(fg.unit_cost)}
                                                </TableCell>
                                                <TableCell>{formatDate(fg.production_date)}</TableCell>
                                                <TableCell>{fg.storage_location || '-'}</TableCell>
                                                <TableCell>
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link href={`/produksi/finished-goods/${fg.id}`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Eye className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => handleDelete(fg.id, fg.product_name)}
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
