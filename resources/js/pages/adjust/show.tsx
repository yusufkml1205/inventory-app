import { Head, Link, router } from '@inertiajs/react';
import { ChevronLeft, Download, FileText, Pencil, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

interface Material {
    code: string;
    name: string;
    unit: string;
    current_stock: number;
}

interface StockAdjustment {
    id: number;
    adjustment_number: string;
    material: Material;
    transaction_type: string;
    quantity: number;
    reason: string;
    notes: string | null;
    supporting_document: string | null;
    adjusted_by: string;
    adjustment_date: string;
    created_at: string;
}

interface Props {
    stockAdjustment: StockAdjustment;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Adjust Stock', href: '/adjust' },
    { title: 'Detail', href: '#' },
];

export default function ShowStockAdjustment({ stockAdjustment }: Props) {
    const getTransactionTypeBadge = (type: string) => {
        const typeMap: Record<string, { variant: 'default' | 'destructive'; label: string }> = {
            'Stock In': { variant: 'default', label: 'Stock In' },
            'Stock Out': { variant: 'destructive', label: 'Stock Out' },
        };

        const typeInfo = typeMap[type] || { variant: 'default', label: type };
        return <Badge variant={typeInfo.variant}>{typeInfo.label}</Badge>;
    };

    const handleDelete = () => {
        if (confirm(`Apakah Anda yakin ingin menghapus Stock Adjustment "${stockAdjustment.adjustment_number}"?`)) {
            router.delete(`/adjust/${stockAdjustment.id}`);
        }
    };

    const handleDownloadDocument = () => {
        if (stockAdjustment.supporting_document) {
            window.open(stockAdjustment.supporting_document, '_blank');
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Detail Stock Adjustment - ${stockAdjustment.adjustment_number}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/adjust">
                            <Button variant="ghost" size="sm">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold">{stockAdjustment.adjustment_number}</h1>
                            <p className="text-muted-foreground">
                                Detail informasi penyesuaian stock
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Link href={`/adjust/${stockAdjustment.id}/edit`}>
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

                {/* Card 1: Adjustment Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Informasi Penyesuaian</CardTitle>
                        <CardDescription>Detail informasi penyesuaian stock</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Nomor Adjustment</p>
                                <p className="text-lg font-semibold">{stockAdjustment.adjustment_number}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Tanggal Adjustment</p>
                                <p className="text-lg">{stockAdjustment.adjustment_date}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Disesuaikan Oleh</p>
                                <p className="text-lg">{stockAdjustment.adjusted_by}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Dibuat Pada</p>
                                <p className="text-lg">{stockAdjustment.created_at}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Card 2: Material Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Informasi Material</CardTitle>
                        <CardDescription>Detail material yang disesuaikan</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Kode Material</p>
                                <p className="text-lg font-semibold">{stockAdjustment.material.code}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Nama Material</p>
                                <p className="text-lg font-semibold">{stockAdjustment.material.name}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Satuan</p>
                                <p className="text-lg">{stockAdjustment.material.unit}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Stock Saat Ini</p>
                                <p className="text-lg font-semibold">{stockAdjustment.material.current_stock.toLocaleString('id-ID')}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Card 3: Adjustment Details */}
                <Card>
                    <CardHeader>
                        <CardTitle>Detail Penyesuaian</CardTitle>
                        <CardDescription>Informasi perubahan stock</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-3">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Jenis Transaksi</p>
                                <div className="mt-1">
                                    {getTransactionTypeBadge(stockAdjustment.transaction_type)}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Jumlah</p>
                                <p className="text-lg font-semibold">{stockAdjustment.quantity.toLocaleString('id-ID')}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Alasan</p>
                                <p className="text-lg">{stockAdjustment.reason}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Card 4: Notes (if available) */}
                {stockAdjustment.notes && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Catatan</CardTitle>
                            <CardDescription>Catatan tambahan penyesuaian</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm whitespace-pre-wrap">{stockAdjustment.notes}</p>
                        </CardContent>
                    </Card>
                )}

                {/* Card 5: Supporting Document (if available) */}
                {stockAdjustment.supporting_document && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Dokumen Pendukung</CardTitle>
                            <CardDescription>File/dokumen pendukung penyesuaian</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                                    <FileText className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">Dokumen pendukung tersedia</p>
                                    <p className="text-xs text-muted-foreground">Klik tombol download untuk melihat</p>
                                </div>
                                <Button onClick={handleDownloadDocument}>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppLayout>
    );
}
