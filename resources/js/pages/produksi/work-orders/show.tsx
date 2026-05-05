import { Head, Link, router } from '@inertiajs/react';
import { ChevronLeft, Pencil, Trash2, Package, PackageOpen } from 'lucide-react';
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

interface MaterialIssue {
    id: number;
    material_id: number;
    material_code: string;
    material_name: string;
    unit: string;
    quantity_issued: number;
    issued_date: string;
    issued_by: string;
}

interface FinishedGood {
    id: number;
    product_name: string;
    quantity_completed: number;
    quantity_available: number;
    unit_cost: number;
    production_date: string;
    storage_location: string | null;
}

interface WorkOrder {
    id: number;
    wo_number: string;
    product_name: string;
    quantity_to_produce: number;
    quantity_completed: number;
    target_completion_date: string;
    actual_completion_date: string | null;
    reference: string | null;
    notes: string | null;
    status: string;
    created_by: string | null;
    created_at: string;
    total_material_cost: number;
    variance: number;
    material_issues: MaterialIssue[];
    finished_goods: FinishedGood[];
}

interface Props {
    workOrder: WorkOrder;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Produksi', href: '/produksi' },
    { title: 'Work Orders', href: '/produksi/work-orders' },
    { title: 'Detail', href: '#' },
];

export default function ShowWorkOrder({ workOrder }: Props) {
    const handleDelete = () => {
        if (confirm(`Apakah Anda yakin ingin menghapus work order "${workOrder.wo_number}"?`)) {
            router.delete(`/produksi/work-orders/${workOrder.id}`, {
                onSuccess: () => {
                    router.visit('/produksi/work-orders');
                },
            });
        }
    };

    const getStatusBadge = (status: string) => {
        const statusMap: Record<string, { variant: 'default' | 'secondary' | 'destructive'; label: string }> = {
            'Planning': { variant: 'secondary', label: 'Planning' },
            'In Progress': { variant: 'default', label: 'In Progress' },
            'Completed': { variant: 'default', label: 'Completed' },
            'Cancelled': { variant: 'destructive', label: 'Cancelled' },
        };

        const statusInfo = statusMap[status] || { variant: 'default', label: status };
        return <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>;
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const getCompletionPercentage = () => {
        if (workOrder.quantity_to_produce === 0) return 0;
        return Math.round((workOrder.quantity_completed / workOrder.quantity_to_produce) * 100);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Work Order - ${workOrder.wo_number}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/produksi/work-orders">
                            <Button variant="ghost" size="sm">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold">{workOrder.wo_number}</h1>
                            <p className="text-muted-foreground">
                                Detail informasi work order
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Link href={`/produksi/work-orders/${workOrder.id}/edit`}>
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

                {/* Work Order Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Informasi Work Order</CardTitle>
                        <CardDescription>Detail work order produksi</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-3">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">WO Number</p>
                                <p className="text-lg font-semibold">{workOrder.wo_number}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Nama Produk</p>
                                <p className="text-lg font-semibold">{workOrder.product_name}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Status</p>
                                <div className="mt-1">
                                    {getStatusBadge(workOrder.status)}
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-4">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Target Produksi</p>
                                <p className="text-lg font-semibold">{workOrder.quantity_to_produce.toLocaleString('id-ID')}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Selesai</p>
                                <p className="text-lg font-semibold">{workOrder.quantity_completed.toLocaleString('id-ID')}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Progress</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary transition-all"
                                            style={{ width: `${getCompletionPercentage()}%` }}
                                        />
                                    </div>
                                    <span className="text-sm font-medium">{getCompletionPercentage()}%</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Variance</p>
                                <p className={`text-lg font-semibold ${workOrder.variance < 0 ? 'text-red-600' : 'text-green-600'}`}>
                                    {workOrder.variance > 0 ? '+' : ''}{workOrder.variance.toLocaleString('id-ID')}
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Target Selesai</p>
                                <p className="text-base">{workOrder.target_completion_date}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Aktual Selesai</p>
                                <p className="text-base">{workOrder.actual_completion_date || '-'}</p>
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Referensi</p>
                                <p className="text-base">{workOrder.reference || '-'}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Total Biaya Material</p>
                                <p className="text-lg font-semibold">{formatCurrency(workOrder.total_material_cost)}</p>
                            </div>
                        </div>

                        {workOrder.notes && (
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Catatan</p>
                                <p className="text-base whitespace-pre-wrap mt-1">{workOrder.notes}</p>
                            </div>
                        )}

                        <div className="grid gap-4 md:grid-cols-2 pt-4 border-t">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Dibuat Oleh</p>
                                <p className="text-base">{workOrder.created_by || '-'}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Dibuat Pada</p>
                                <p className="text-base">{workOrder.created_at}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Material Issues */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="flex items-center gap-2">
                                    <PackageOpen className="h-5 w-5" />
                                    Material Issues
                                </CardTitle>
                                <CardDescription>Daftar material yang digunakan</CardDescription>
                            </div>
                            {workOrder.status !== 'Completed' && workOrder.status !== 'Cancelled' && (
                                <Link href="/produksi/material-issues/create">
                                    <Button size="sm">
                                        Tambah Material Issue
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </CardHeader>
                    <CardContent>
                        {workOrder.material_issues.length === 0 ? (
                            <p className="text-center text-muted-foreground py-8">
                                Belum ada material issue untuk work order ini
                            </p>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Kode Material</TableHead>
                                        <TableHead>Nama Material</TableHead>
                                        <TableHead>Satuan</TableHead>
                                        <TableHead className="text-right">Qty Issued</TableHead>
                                        <TableHead>Tanggal Issue</TableHead>
                                        <TableHead>Issued By</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {workOrder.material_issues.map((issue) => (
                                        <TableRow key={issue.id}>
                                            <TableCell className="font-medium">{issue.material_code}</TableCell>
                                            <TableCell>{issue.material_name}</TableCell>
                                            <TableCell>{issue.unit}</TableCell>
                                            <TableCell className="text-right font-medium">
                                                {issue.quantity_issued.toLocaleString('id-ID')}
                                            </TableCell>
                                            <TableCell>{issue.issued_date}</TableCell>
                                            <TableCell>{issue.issued_by}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                    </CardContent>
                </Card>

                {/* Finished Goods */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="flex items-center gap-2">
                                    <Package className="h-5 w-5" />
                                    Finished Goods
                                </CardTitle>
                                <CardDescription>Barang jadi dari work order ini</CardDescription>
                            </div>
                            {workOrder.status !== 'Cancelled' && workOrder.material_issues.length > 0 && (
                                <Link href="/produksi/finished-goods/create">
                                    <Button size="sm">
                                        Tambah Finished Good
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </CardHeader>
                    <CardContent>
                        {workOrder.finished_goods.length === 0 ? (
                            <p className="text-center text-muted-foreground py-8">
                                Belum ada finished good untuk work order ini
                            </p>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nama Produk</TableHead>
                                        <TableHead className="text-right">Qty Completed</TableHead>
                                        <TableHead className="text-right">Qty Available</TableHead>
                                        <TableHead className="text-right">Unit Cost</TableHead>
                                        <TableHead>Tanggal Produksi</TableHead>
                                        <TableHead>Lokasi Penyimpanan</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {workOrder.finished_goods.map((fg) => (
                                        <TableRow key={fg.id}>
                                            <TableCell className="font-medium">{fg.product_name}</TableCell>
                                            <TableCell className="text-right">
                                                {fg.quantity_completed.toLocaleString('id-ID')}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                {fg.quantity_available.toLocaleString('id-ID')}
                                            </TableCell>
                                            <TableCell className="text-right font-medium">
                                                {formatCurrency(fg.unit_cost)}
                                            </TableCell>
                                            <TableCell>{fg.production_date}</TableCell>
                                            <TableCell>{fg.storage_location || '-'}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
