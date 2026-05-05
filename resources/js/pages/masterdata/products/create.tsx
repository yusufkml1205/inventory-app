import { Head, Link, useForm } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';
import { FormEventHandler } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

interface Props {
    categories: string[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Master Data', href: '/masterdata' },
    { title: 'Produk', href: '/masterdata/products' },
    { title: 'Tambah Produk', href: '/masterdata/products/create' },
];

export default function CreateProduct({ categories }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        code: '',
        name: '',
        category: '',
        description: '',
        unit: '',
        price: '',
        cost: '',
        image: null as File | null,
        is_active: true,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/masterdata/products');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Produk" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center gap-4">
                    <Link href="/masterdata/products">
                        <Button variant="ghost" size="sm">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold">Tambah Produk Baru</h1>
                        <p className="text-muted-foreground">
                            Tambahkan produk jadi baru
                        </p>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Informasi Produk</CardTitle>
                        <CardDescription>
                            Isi formulir di bawah ini untuk menambahkan produk baru
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="code">Kode Produk *</Label>
                                    <Input
                                        id="code"
                                        value={data.code}
                                        onChange={(e) => setData('code', e.target.value)}
                                        placeholder="Contoh: PRD-001"
                                        className={errors.code ? 'border-red-500' : ''}
                                    />
                                    {errors.code && (
                                        <p className="text-sm text-red-600">{errors.code}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="name">Nama Produk *</Label>
                                    <Input
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Contoh: Meja Kantor Premium"
                                        className={errors.name ? 'border-red-500' : ''}
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-red-600">{errors.name}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="category">Kategori *</Label>
                                    <Select
                                        value={data.category}
                                        onValueChange={(value) => setData('category', value)}
                                    >
                                        <SelectTrigger className={errors.category ? 'border-red-500' : ''}>
                                            <SelectValue placeholder="Pilih kategori" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((category) => (
                                                <SelectItem key={category} value={category}>
                                                    {category}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.category && (
                                        <p className="text-sm text-red-600">{errors.category}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="unit">Satuan *</Label>
                                    <Input
                                        id="unit"
                                        value={data.unit}
                                        onChange={(e) => setData('unit', e.target.value)}
                                        placeholder="Contoh: pcs, set, unit"
                                        className={errors.unit ? 'border-red-500' : ''}
                                    />
                                    {errors.unit && (
                                        <p className="text-sm text-red-600">{errors.unit}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="price">Harga Jual (USD) *</Label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                            Rp
                                        </span>
                                        <Input
                                            id="price"
                                            type="number"
                                            step="0.01"
                                            value={data.price}
                                            onChange={(e) => setData('price', e.target.value)}
                                            placeholder="0"
                                            className={`pl-10 ${errors.price ? 'border-red-500' : ''}`}
                                        />
                                    </div>
                                    {errors.price && (
                                        <p className="text-sm text-red-600">{errors.price}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="cost">Harga Pokok / HPP (USD) *</Label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                            Rp
                                        </span>
                                        <Input
                                            id="cost"
                                            type="number"
                                            step="0.01"
                                            value={data.cost}
                                            onChange={(e) => setData('cost', e.target.value)}
                                            placeholder="0"
                                            className={`pl-10 ${errors.cost ? 'border-red-500' : ''}`}
                                        />
                                    </div>
                                    {errors.cost && (
                                        <p className="text-sm text-red-600">{errors.cost}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Deskripsi</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('description', e.target.value)}
                                    placeholder="Deskripsi produk (opsional)"
                                    rows={4}
                                />
                                {errors.description && (
                                    <p className="text-sm text-red-600">{errors.description}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="image">Gambar Produk</Label>
                                <Input
                                    id="image"
                                    type="file"
                                    accept=".jpg,.jpeg,.png"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            // Check file size (max 2MB)
                                            if (file.size > 2 * 1024 * 1024) {
                                                alert('Ukuran file maksimal 2MB');
                                                e.target.value = '';
                                                return;
                                            }
                                            setData('image', file);
                                        }
                                    }}
                                    className={errors.image ? 'border-red-500' : ''}
                                />
                                <p className="text-xs text-muted-foreground">
                                    Format: JPG, JPEG, PNG. Maksimal 2MB
                                </p>
                                {errors.image && (
                                    <p className="text-sm text-red-600">{errors.image}</p>
                                )}
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="is_active"
                                    checked={data.is_active}
                                    onCheckedChange={(checked) => setData('is_active', checked as boolean)}
                                />
                                <Label htmlFor="is_active" className="cursor-pointer">
                                    Produk Aktif
                                </Label>
                            </div>

                            <div className="flex gap-4">
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Menyimpan...' : 'Simpan Produk'}
                                </Button>
                                <Link href="/masterdata/products">
                                    <Button type="button" variant="outline">
                                        Batal
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
