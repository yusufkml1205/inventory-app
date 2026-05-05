import { Head, Link } from '@inertiajs/react';
import { ChevronLeft, Pencil, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

interface Material {
    id: number;
    code: string;
    name: string;
    category: string;
    unit: string;
    price_per_unit: number;
    min_stock: number;
    current_stock: number;
    is_low_stock: boolean;
    is_active: boolean;
    description: string | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    material: Material;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Master Data', href: '/masterdata' },
    { title: 'Material', href: '/masterdata/materials' },
    { title: 'Detail Material', href: '#' },
];

export default function ShowMaterial({ material }: Props) {
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Detail Material - ${material.name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/masterdata/materials">
                            <Button variant="ghost" size="sm">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold">{material.name}</h1>
                            <p className="text-muted-foreground">
                                Detail informasi material
                            </p>
                        </div>
                    </div>
                    <Link href={`/masterdata/materials/${material.id}/edit`}>
                        <Button>
                            <Pencil className="mr-2 h-4 w-4" />
                            Edit Material
                        </Button>
                    </Link>
                </div>

                {material.is_low_stock && (
                    <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Peringatan Stok Rendah!</AlertTitle>
                        <AlertDescription>
                            Stok material ini sudah mencapai atau di bawah batas minimum ({material.min_stock} {material.unit}).
                            Segera lakukan purchase order.
                        </AlertDescription>
                    </Alert>
                )}

                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Dasar</CardTitle>
                            <CardDescription>Detail informasi material</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Kode Material</p>
                                    <p className="text-lg font-semibold">{material.code}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Kategori</p>
                                    <Badge variant="outline" className="mt-1">{material.category}</Badge>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Satuan</p>
                                    <p className="text-lg">{material.unit}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                                    {material.is_active ? (
                                        <Badge variant="default" className="mt-1">Aktif</Badge>
                                    ) : (
                                        <Badge variant="secondary" className="mt-1">Tidak Aktif</Badge>
                                    )}
                                </div>
                            </div>

                            {material.description && (
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Deskripsi</p>
                                    <p className="mt-1 text-sm">{material.description}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Stok & Harga</CardTitle>
                            <CardDescription>Detail stok dan harga material</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Harga per Satuan</p>
                                    <p className="text-lg font-semibold text-green-600">
                                        {formatCurrency(material.price_per_unit)}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Stok Minimum</p>
                                    <p className="text-lg">{material.min_stock} {material.unit}</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-sm font-medium text-muted-foreground">Stok Saat Ini</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <p className={`text-2xl font-bold ${material.is_low_stock ? 'text-red-600' : 'text-green-600'}`}>
                                            {material.current_stock} {material.unit}
                                        </p>
                                        {material.is_low_stock && (
                                            <AlertTriangle className="h-5 w-5 text-red-600" />
                                        )}
                                    </div>
                                    {material.is_low_stock && (
                                        <p className="text-sm text-red-600 mt-1">
                                            Stok di bawah minimum!
                                        </p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Informasi Tambahan</CardTitle>
                        <CardDescription>Metadata material</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Dibuat Pada</p>
                                <p className="text-sm">{material.created_at}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Terakhir Diupdate</p>
                                <p className="text-sm">{material.updated_at}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
