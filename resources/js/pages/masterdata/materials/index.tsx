import { Head, Link, router } from '@inertiajs/react';
import { Plus, Pencil, Trash2, AlertTriangle, Eye } from 'lucide-react';
import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
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
}

interface PaginatedMaterials {
    data: Material[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
}

interface Props {
    materials: PaginatedMaterials;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Master Data', href: '/masterdata' },
    { title: 'Material', href: '/masterdata/materials' },
];

export default function MaterialIndex({ materials }: Props) {
    const lowStockMaterials = (materials?.data || []).filter((m) => m.is_low_stock);

    const handleDelete = (id: number, name: string) => {
        if (confirm(`Apakah Anda yakin ingin menghapus material "${name}"?`)) {
            router.delete(`/masterdata/materials/${id}`);
        }
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Master Data Material" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Master Data Material</h1>
                        <p className="text-muted-foreground">
                            Kelola data material dan bahan baku
                        </p>
                    </div>
                    <Link href="/masterdata/materials/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Material
                        </Button>
                    </Link>
                </div>

                {lowStockMaterials.length > 0 && (
                    <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Peringatan Stok Rendah!</AlertTitle>
                        <AlertDescription>
                            Terdapat {lowStockMaterials.length} material dengan stok di bawah atau sama dengan minimum.
                            Segera lakukan purchase order untuk material berikut:{' '}
                            {lowStockMaterials.map((m) => m.name).join(', ')}.
                        </AlertDescription>
                    </Alert>
                )}

                <Card>
                    <CardHeader>
                        <CardTitle>Daftar Material</CardTitle>
                        <CardDescription>
                            Total {materials?.total || 0} material terdaftar (Halaman {materials?.current_page || 1} dari {materials?.last_page || 1})
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Kode</TableHead>
                                        <TableHead>Nama Material</TableHead>
                                        <TableHead>Kategori</TableHead>
                                        <TableHead>Satuan</TableHead>
                                        <TableHead className="text-right">Harga/Unit</TableHead>
                                        <TableHead className="text-right">Stok Min</TableHead>
                                        <TableHead className="text-right">Stok Saat Ini</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-center">Aksi</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {(materials?.data || []).length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                                                Belum ada data material
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        (materials?.data || []).map((material) => (
                                            <TableRow key={material.id}>
                                                <TableCell className="font-medium">
                                                    {material.code}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-2">
                                                        {material.name}
                                                        {material.is_low_stock && (
                                                            <AlertTriangle className="h-4 w-4 text-red-600" />
                                                        )}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="outline">{material.category}</Badge>
                                                </TableCell>
                                                <TableCell>{material.unit}</TableCell>
                                                <TableCell className="text-right">
                                                    {formatCurrency(material.price_per_unit)}
                                                </TableCell>
                                                <TableCell className="text-right">{material.min_stock}</TableCell>
                                                <TableCell className="text-right">
                                                    <span
                                                        className={
                                                            material.is_low_stock
                                                                ? 'font-bold text-red-600'
                                                                : 'text-green-600'
                                                        }
                                                    >
                                                        {material.current_stock}
                                                    </span>
                                                </TableCell>
                                                <TableCell>
                                                    {material.is_active ? (
                                                        <Badge variant="default">Aktif</Badge>
                                                    ) : (
                                                        <Badge variant="secondary">Tidak Aktif</Badge>
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link href={`/masterdata/materials/${material.id}`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Eye className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Link href={`/masterdata/materials/${material.id}/edit`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Pencil className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => handleDelete(material.id, material.name)}
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
                        
                        {/* Pagination */}
                        {(materials?.last_page || 1) > 1 && (
                            <div className="flex items-center justify-between mt-4">
                                <div className="text-sm text-muted-foreground">
                                    Menampilkan {((materials?.current_page || 1) - 1) * (materials?.per_page || 30) + 1} - {Math.min((materials?.current_page || 1) * (materials?.per_page || 30), materials?.total || 0)} dari {materials?.total || 0} material
                                </div>
                                <div className="flex items-center gap-2">
                                    {(materials?.links || []).map((link, index) => {
                                        if (!link.url) {
                                            return (
                                                <Button key={index} variant="outline" size="sm" disabled>
                                                    <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                                </Button>
                                            );
                                        }
                                        return (
                                            <Link key={index} href={link.url}>
                                                <Button 
                                                    variant={link.active ? "default" : "outline"} 
                                                    size="sm"
                                                >
                                                    <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                                </Button>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
