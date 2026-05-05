import { Head, Link, router } from '@inertiajs/react';
import { ChevronLeft, Pencil, Trash2, Building2, Phone, Mail, User, MapPin, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

interface Customer {
    id: number;
    code: string;
    name: string;
    address: string | null;
    city: string | null;
    country: string | null;
    phone: string | null;
    email: string | null;
    contact_person: string | null;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

interface Props {
    customer: Customer;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Master Data', href: '/masterdata' },
    { title: 'Customer', href: '/masterdata/customers' },
    { title: 'Detail Customer', href: '#' },
];

export default function ShowCustomer({ customer }: Props) {
    const handleDelete = () => {
        if (confirm('Apakah Anda yakin ingin menghapus customer ini?')) {
            router.delete(`/masterdata/customers/${customer.id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Detail Customer - ${customer.name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/masterdata/customers">
                            <Button variant="ghost" size="sm">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold">{customer.name}</h1>
                            <p className="text-muted-foreground">
                                Detail informasi customer
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Link href={`/masterdata/customers/${customer.id}/edit`}>
                            <Button>
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit Customer
                            </Button>
                        </Link>
                        <Button variant="destructive" onClick={handleDelete}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Hapus
                        </Button>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Umum</CardTitle>
                            <CardDescription>Data dasar customer</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Building2 className="h-5 w-5 text-muted-foreground mt-0.5" />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-muted-foreground">Kode Customer</p>
                                    <p className="text-base font-semibold">{customer.code}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Building2 className="h-5 w-5 text-muted-foreground mt-0.5" />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-muted-foreground">Nama Customer</p>
                                    <p className="text-base font-semibold">{customer.name}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-muted-foreground">Kota</p>
                                    <p className="text-base">{customer.city || '-'}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-muted-foreground">Negara</p>
                                    <p className="text-base">{customer.country || '-'}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                                    <div className="mt-1">
                                        {customer.is_active ? (
                                            <Badge variant="default">Aktif</Badge>
                                        ) : (
                                            <Badge variant="secondary">Tidak Aktif</Badge>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Kontak</CardTitle>
                            <CardDescription>Data kontak customer</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-3">
                                <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-muted-foreground">Contact Person</p>
                                    <p className="text-base">{customer.contact_person || '-'}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-muted-foreground">Telepon</p>
                                    <p className="text-base">{customer.phone || '-'}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                                    <p className="text-base">{customer.email || '-'}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Alamat</CardTitle>
                            <CardDescription>Alamat lengkap customer</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-base whitespace-pre-wrap">{customer.address || '-'}</p>
                        </CardContent>
                    </Card>

                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Informasi Sistem</CardTitle>
                            <CardDescription>Metadata dan timestamp</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4 md:grid-cols-2">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Dibuat Pada</p>
                                <p className="text-base">{customer.created_at}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Terakhir Diupdate</p>
                                <p className="text-base">{customer.updated_at}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
