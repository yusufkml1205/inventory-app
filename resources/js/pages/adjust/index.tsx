import { Head, Link, router } from '@inertiajs/react';
import { Plus, Pencil, Trash2, Eye } from 'lucide-react';
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

interface StockAdjustment {
    id: number;
    adjustment_number: string;
    material_code: string;
    material_name: string;
    transaction_type: 'Stock In' | 'Stock Out';
    quantity: number;
    reason: string;
    adjustment_date: string;
    adjusted_by: string;
}

interface Props {
    stockAdjustments: StockAdjustment[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Adjust Stock', href: '/adjust' },
    { title: 'Stock Adjustments', href: '/adjust' },
];

export default function StockAdjustmentIndex({ stockAdjustments }: Props) {
    const handleDelete = (id: number, adjustmentNumber: string) => {
        if (confirm(`Apakah Anda yakin ingin menghapus stock adjustment "${adjustmentNumber}"?`)) {
            router.delete(`/adjust/${id}`);
        }
    };

    const formatDate = (dateString: string) => {
        return new Intl.DateTimeFormat('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }).format(new Date(dateString));
    };

    const getTransactionTypeBadge = (type: 'Stock In' | 'Stock Out') => {
        if (type === 'Stock In') {
            return <Badge className="bg-green-500 hover:bg-green-600">Stock In</Badge>;
        }
        return <Badge variant="destructive">Stock Out</Badge>;
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Stock Adjustments" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Stock Adjustments</h1>
                        <p className="text-muted-foreground">
                            Kelola penyesuaian stok material
                        </p>
                    </div>
                    <Link href="/adjust/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Stock Adjustment
                        </Button>
                    </Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Daftar Stock Adjustments</CardTitle>
                        <CardDescription>
                            Total {stockAdjustments.length} stock adjustment terdaftar
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Adj Number</TableHead>
                                        <TableHead>Material</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead className="text-right">Quantity</TableHead>
                                        <TableHead>Reason</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Adjusted By</TableHead>
                                        <TableHead className="text-center">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {stockAdjustments.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                                                Belum ada data stock adjustment
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        stockAdjustments.map((adjustment) => (
                                            <TableRow key={adjustment.id}>
                                                <TableCell className="font-medium">
                                                    {adjustment.adjustment_number}
                                                </TableCell>
                                                <TableCell>
                                                    <div>
                                                        <div className="font-medium">{adjustment.material_name}</div>
                                                        <div className="text-sm text-muted-foreground">
                                                            {adjustment.material_code}
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    {getTransactionTypeBadge(adjustment.transaction_type)}
                                                </TableCell>
                                                <TableCell className="text-right font-medium">
                                                    {adjustment.quantity.toLocaleString('id-ID')}
                                                </TableCell>
                                                <TableCell>{adjustment.reason}</TableCell>
                                                <TableCell>{formatDate(adjustment.adjustment_date)}</TableCell>
                                                <TableCell>{adjustment.adjusted_by}</TableCell>
                                                <TableCell>
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link href={`/adjust/${adjustment.id}`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Eye className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Link href={`/adjust/${adjustment.id}/edit`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Pencil className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => handleDelete(adjustment.id, adjustment.adjustment_number)}
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
