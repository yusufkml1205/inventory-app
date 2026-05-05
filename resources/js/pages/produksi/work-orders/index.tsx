import { Head, Link, router } from '@inertiajs/react';
import { Plus, Eye, Pencil, Trash2 } from 'lucide-react';
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

interface WorkOrder {
    id: number;
    wo_number: string;
    product_name: string;
    quantity_to_produce: number;
    quantity_completed: number;
    target_completion_date: string;
    status: string;
    created_by: string | null;
}

interface Props {
    workOrders: WorkOrder[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Produksi', href: '/produksi' },
    { title: 'Work Orders', href: '/produksi/work-orders' },
];

export default function WorkOrderIndex({ workOrders }: Props) {
    const handleDelete = (id: number, woNumber: string) => {
        if (confirm(`Apakah Anda yakin ingin menghapus work order "${woNumber}"?`)) {
            router.delete(`/produksi/work-orders/${id}`, {
                onSuccess: () => {
                    router.visit('/produksi/work-orders');
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

    const getCompletionPercentage = (completed: number, total: number) => {
        if (total === 0) return 0;
        return Math.round((completed / total) * 100);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Work Orders" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Work Orders</h1>
                        <p className="text-muted-foreground">
                            Kelola work order produksi furniture
                        </p>
                    </div>
                    <Link href="/produksi/work-orders/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Work Order
                        </Button>
                    </Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Daftar Work Orders</CardTitle>
                        <CardDescription>
                            Total {workOrders.length} work order terdaftar
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>WO Number</TableHead>
                                        <TableHead>Product</TableHead>
                                        <TableHead className="text-right">Target Qty</TableHead>
                                        <TableHead className="text-right">Completed</TableHead>
                                        <TableHead className="text-center">Progress</TableHead>
                                        <TableHead>Target Date</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Created By</TableHead>
                                        <TableHead className="text-center">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {workOrders.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                                                Belum ada data work order
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        workOrders.map((wo) => {
                                            const percentage = getCompletionPercentage(wo.quantity_completed, wo.quantity_to_produce);
                                            return (
                                                <TableRow key={wo.id}>
                                                    <TableCell className="font-medium">
                                                        {wo.wo_number}
                                                    </TableCell>
                                                    <TableCell className="font-medium">
                                                        {wo.product_name}
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        {wo.quantity_to_produce.toLocaleString('id-ID')}
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        {wo.quantity_completed.toLocaleString('id-ID')}
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                                <div
                                                                    className="h-full bg-primary transition-all"
                                                                    style={{ width: `${percentage}%` }}
                                                                />
                                                            </div>
                                                            <span className="text-xs text-muted-foreground w-10 text-right">
                                                                {percentage}%
                                                            </span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>{formatDate(wo.target_completion_date)}</TableCell>
                                                    <TableCell>{getStatusBadge(wo.status)}</TableCell>
                                                    <TableCell>{wo.created_by || '-'}</TableCell>
                                                    <TableCell>
                                                        <div className="flex items-center justify-center gap-2">
                                                            <Link href={`/produksi/work-orders/${wo.id}`}>
                                                                <Button variant="ghost" size="sm">
                                                                    <Eye className="h-4 w-4" />
                                                                </Button>
                                                            </Link>
                                                            <Link href={`/produksi/work-orders/${wo.id}/edit`}>
                                                                <Button variant="ghost" size="sm">
                                                                    <Pencil className="h-4 w-4" />
                                                                </Button>
                                                            </Link>
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                onClick={() => handleDelete(wo.id, wo.wo_number)}
                                                            >
                                                                <Trash2 className="h-4 w-4 text-red-600" />
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })
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
