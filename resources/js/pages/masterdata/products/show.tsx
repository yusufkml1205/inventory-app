import { Head, Link, router } from '@inertiajs/react';
import { ChevronLeft, Pencil, Trash2, Package } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

interface Product {
    id: number;
    code: string;
    name: string;
    category: string;
    description: string | null;
    unit: string;
    price: number;
    cost: number;
    is_active: boolean;
    image: string | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    product: Product;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Master Data', href: '/masterdata' },
    { title: 'Produk', href: '/masterdata/products' },
    { title: 'Detail Produk', href: '#' },
];

export default function ShowProduct({ product }: Props) {
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        }).format(value);
    };

    const calculateMargin = () => {
        if (product.price === 0) return 0;
        return ((product.price - product.cost) / product.price * 100).toFixed(2);
    };

    const handleDelete = () => {
        if (confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
            router.delete(`/masterdata/products/${product.id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Detail Produk - ${product.name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/masterdata/products">
                            <Button variant="ghost" size="sm">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold">{product.name}</h1>
                            <p className="text-muted-foreground">
                                Detail informasi produk
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Link href={`/masterdata/products/${product.id}/edit`}>
                            <Button>
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit Produk
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
                            <CardTitle>Informasi Dasar</CardTitle>
                            <CardDescription>Detail informasi produk</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {/* Product Image */}
                            <div className="flex justify-center">
                                {product.image ? (
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className="h-48 w-48 rounded-lg object-cover border"
                                    />
                                ) : (
                                    <div className="h-48 w-48 rounded-lg border bg-muted flex items-center justify-center">
                                        <Package className="h-16 w-16 text-muted-foreground" />
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Kode Produk</p>
                                    <p className="text-lg font-semibold">{product.code}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Nama Produk</p>
                                    <p className="text-lg font-semibold">{product.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Kategori</p>
                                    <Badge variant="outline" className="mt-1">{product.category}</Badge>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                                    {product.is_active ? (
                                        <Badge variant="default" className="mt-1">Aktif</Badge>
                                    ) : (
                                        <Badge variant="secondary" className="mt-1">Tidak Aktif</Badge>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Harga</CardTitle>
                            <CardDescription>Detail harga dan margin produk</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Harga Jual</p>
                                    <p className="text-2xl font-bold text-green-600">
                                        {formatCurrency(product.price)}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">HPP (Harga Pokok Penjualan)</p>
                                    <p className="text-xl font-semibold text-orange-600">
                                        {formatCurrency(product.cost)}
                                    </p>
                                </div>
                                <div className="pt-4 border-t">
                                    <p className="text-sm font-medium text-muted-foreground">Margin Keuntungan</p>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-3xl font-bold text-blue-600">
                                            {calculateMargin()}%
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            ({formatCurrency(product.price - product.cost)})
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Informasi Tambahan</CardTitle>
                        <CardDescription>Detail dan metadata produk</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Satuan</p>
                                <p className="text-lg">{product.unit}</p>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-sm font-medium text-muted-foreground">Deskripsi</p>
                                <p className="text-sm mt-1">
                                    {product.description || '-'}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Dibuat Pada</p>
                                <p className="text-sm">{product.created_at}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Terakhir Diupdate</p>
                                <p className="text-sm">{product.updated_at}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
