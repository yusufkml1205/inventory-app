import { Head, Link, router } from '@inertiajs/react';
import { Plus, Pencil, Trash2, Eye, Package } from 'lucide-react';
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

interface Product {
    id: number;
    code: string;
    name: string;
    category: string;
    unit: string;
    price: number;
    cost: number;
    is_active: boolean;
    image: string | null;
}

interface Props {
    products: Product[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Master Data', href: '/masterdata' },
    { title: 'Produk', href: '/masterdata/products' },
];

export default function ProductIndex({ products }: Props) {
    const handleDelete = (id: number, name: string) => {
        if (confirm(`Apakah Anda yakin ingin menghapus produk "${name}"?`)) {
            router.delete(`/masterdata/products/${id}`);
        }
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        }).format(value);
    };

    const getCategoryBadgeVariant = (category: string): "default" | "secondary" | "destructive" | "outline" => {
        const categoryLower = category.toLowerCase();
        
        if (categoryLower.includes('finished') || categoryLower.includes('jadi')) {
            return 'default';
        }
        if (categoryLower.includes('semi') || categoryLower.includes('setengah')) {
            return 'secondary';
        }
        
        return 'outline';
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Master Data Produk" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Master Data Produk</h1>
                        <p className="text-muted-foreground">
                            Kelola data produk dan barang jadi
                        </p>
                    </div>
                    <Link href="/masterdata/products/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Produk
                        </Button>
                    </Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Daftar Produk</CardTitle>
                        <CardDescription>
                            Total {products.length} produk terdaftar
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Gambar</TableHead>
                                        <TableHead>Kode</TableHead>
                                        <TableHead>Nama Produk</TableHead>
                                        <TableHead>Kategori</TableHead>
                                        <TableHead>Satuan</TableHead>
                                        <TableHead className="text-right">Harga Jual</TableHead>
                                        <TableHead className="text-right">HPP</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-center">Aksi</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {products.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                                                Belum ada data produk
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        products.map((product) => (
                                            <TableRow key={product.id}>
                                                <TableCell>
                                                    {product.image ? (
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="h-10 w-10 rounded object-cover"
                                                        />
                                                    ) : (
                                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-muted">
                                                            <Package className="h-5 w-5 text-muted-foreground" />
                                                        </div>
                                                    )}
                                                </TableCell>
                                                <TableCell className="font-medium">
                                                    {product.code}
                                                </TableCell>
                                                <TableCell>{product.name}</TableCell>
                                                <TableCell>
                                                    <Badge variant={getCategoryBadgeVariant(product.category)}>
                                                        {product.category}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>{product.unit}</TableCell>
                                                <TableCell className="text-right">
                                                    {formatCurrency(product.price)}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    {formatCurrency(product.cost)}
                                                </TableCell>
                                                <TableCell>
                                                    {product.is_active ? (
                                                        <Badge variant="default">Aktif</Badge>
                                                    ) : (
                                                        <Badge variant="secondary">Tidak Aktif</Badge>
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link href={`/masterdata/products/${product.id}`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Eye className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Link href={`/masterdata/products/${product.id}/edit`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Pencil className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => handleDelete(product.id, product.name)}
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
