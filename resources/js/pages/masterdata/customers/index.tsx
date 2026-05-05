import { Head, Link, router } from '@inertiajs/react';
import { Plus, Pencil, Trash2, Eye, Users } from 'lucide-react';
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

interface Customer {
    id: number;
    code: string;
    name: string;
    city: string | null;
    country: string | null;
    phone: string | null;
    email: string | null;
    contact_person: string | null;
    is_active: boolean;
}

interface Props {
    customers: Customer[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Master Data', href: '/masterdata' },
    { title: 'Customer', href: '/masterdata/customers' },
];

export default function CustomerIndex({ customers }: Props) {
    const handleDelete = (id: number, name: string) => {
        if (confirm(`Apakah Anda yakin ingin menghapus customer "${name}"?`)) {
            router.delete(`/masterdata/customers/${id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Master Data Customer" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Master Data Customer</h1>
                        <p className="text-muted-foreground">
                            Kelola data customer dan pelanggan
                        </p>
                    </div>
                    <Link href="/masterdata/customers/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Customer
                        </Button>
                    </Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Daftar Customer</CardTitle>
                        <CardDescription>
                            Total {customers.length} customer terdaftar
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Kode</TableHead>
                                        <TableHead>Nama Customer</TableHead>
                                        <TableHead>Kota</TableHead>
                                        <TableHead>Negara</TableHead>
                                        <TableHead>Contact Person</TableHead>
                                        <TableHead>Telepon</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-center">Aksi</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {customers.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                                                Belum ada data customer
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        customers.map((customer) => (
                                            <TableRow key={customer.id}>
                                                <TableCell className="font-medium">
                                                    {customer.code}
                                                </TableCell>
                                                <TableCell>{customer.name}</TableCell>
                                                <TableCell>{customer.city || '-'}</TableCell>
                                                <TableCell>{customer.country || '-'}</TableCell>
                                                <TableCell>{customer.contact_person || '-'}</TableCell>
                                                <TableCell>{customer.phone || '-'}</TableCell>
                                                <TableCell>{customer.email || '-'}</TableCell>
                                                <TableCell>
                                                    {customer.is_active ? (
                                                        <Badge variant="default">Aktif</Badge>
                                                    ) : (
                                                        <Badge variant="secondary">Tidak Aktif</Badge>
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link href={`/masterdata/customers/${customer.id}`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Eye className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Link href={`/masterdata/customers/${customer.id}/edit`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Pencil className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => handleDelete(customer.id, customer.name)}
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
