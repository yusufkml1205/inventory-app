import { Head, Link, router } from '@inertiajs/react';
import { Plus, Pencil, Trash2, Eye, Warehouse } from 'lucide-react';
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
    id: number;
    code: string;
    name: string;
    city: string | null;
    phone: string | null;
    email: string | null;
    contact_person: string | null;
    is_active: boolean;
}

interface Props {
    suppliers: Supplier[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Master Data', href: '/masterdata' },
    { title: 'Supplier', href: '/masterdata/suppliers' },
];

export default function SupplierIndex({ suppliers }: Props) {
    const handleDelete = (id: number, name: string) => {
        if (confirm(`Apakah Anda yakin ingin menghapus supplier "${name}"?`)) {
            router.delete(`/masterdata/suppliers/${id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Master Data Supplier" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Master Data Supplier</h1>
                        <p className="text-muted-foreground">
                            Kelola data supplier dan vendor
                        </p>
                    </div>
                    <Link href="/masterdata/suppliers/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Supplier
                        </Button>
                    </Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Daftar Supplier</CardTitle>
                        <CardDescription>
                            Total {suppliers.length} supplier terdaftar
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Kode</TableHead>
                                        <TableHead>Nama Supplier</TableHead>
                                        <TableHead>Kota</TableHead>
                                        <TableHead>Contact Person</TableHead>
                                        <TableHead>Telepon</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-center">Aksi</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {suppliers.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                                                Belum ada data supplier
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        suppliers.map((supplier) => (
                                            <TableRow key={supplier.id}>
                                                <TableCell className="font-medium">
                                                    {supplier.code}
                                                </TableCell>
                                                <TableCell>{supplier.name}</TableCell>
                                                <TableCell>{supplier.city || '-'}</TableCell>
                                                <TableCell>{supplier.contact_person || '-'}</TableCell>
                                                <TableCell>{supplier.phone || '-'}</TableCell>
                                                <TableCell>{supplier.email || '-'}</TableCell>
                                                <TableCell>
                                                    {supplier.is_active ? (
                                                        <Badge variant="default">Aktif</Badge>
                                                    ) : (
                                                        <Badge variant="secondary">Tidak Aktif</Badge>
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link href={`/masterdata/suppliers/${supplier.id}`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Eye className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Link href={`/masterdata/suppliers/${supplier.id}/edit`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Pencil className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => handleDelete(supplier.id, supplier.name)}
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
