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

interface MaterialIssue {
    id: number;
    wo_number: string;
    product_name: string;
    material_name: string;
    quantity_issued: number;
    issued_date: string;
    issued_by: string;
}

interface Props {
    materialIssues: MaterialIssue[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Produksi', href: '/produksi' },
    { title: 'Material Issues', href: '/produksi/material-issues' },
];

export default function MaterialIssueIndex({ materialIssues }: Props) {
    const handleDelete = (id: number, woNumber: string) => {
        if (confirm(`Apakah Anda yakin ingin menghapus material issue untuk WO "${woNumber}"?`)) {
            router.delete(`/produksi/material-issues/${id}`, {
                onSuccess: () => {
                    router.visit('/produksi/material-issues');
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

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Material Issues" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Material Issues</h1>
                        <p className="text-muted-foreground">
                            Pencatatan penggunaan material untuk produksi
                        </p>
                    </div>
                    <Link href="/produksi/material-issues/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Material Issue
                        </Button>
                    </Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Daftar Material Issues</CardTitle>
                        <CardDescription>
                            Total {materialIssues.length} material issue terdaftar
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>WO Number</TableHead>
                                        <TableHead>Product</TableHead>
                                        <TableHead>Material</TableHead>
                                        <TableHead className="text-right">Quantity Issued</TableHead>
                                        <TableHead>Issue Date</TableHead>
                                        <TableHead>Issued By</TableHead>
                                        <TableHead className="text-center">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {materialIssues.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                                                Belum ada data material issue
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        materialIssues.map((issue) => (
                                            <TableRow key={issue.id}>
                                                <TableCell className="font-medium">
                                                    {issue.wo_number}
                                                </TableCell>
                                                <TableCell>
                                                    {issue.product_name}
                                                </TableCell>
                                                <TableCell className="font-medium">
                                                    {issue.material_name}
                                                </TableCell>
                                                <TableCell className="text-right font-medium">
                                                    {issue.quantity_issued.toLocaleString('id-ID')}
                                                </TableCell>
                                                <TableCell>{formatDate(issue.issued_date)}</TableCell>
                                                <TableCell>{issue.issued_by}</TableCell>
                                                <TableCell>
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link href={`/produksi/material-issues/${issue.id}`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Eye className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => handleDelete(issue.id, issue.wo_number)}
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
