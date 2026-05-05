import { Head, Link, useForm } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';
import { FormEventHandler } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
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
    description: string | null;
    is_active: boolean;
}

interface Props {
    material: Material;
    categories: string[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Master Data', href: '/masterdata' },
    { title: 'Material', href: '/masterdata/materials' },
    { title: 'Edit Material', href: '#' },
];

export default function EditMaterial({ material, categories }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        code: material.code,
        name: material.name,
        category: material.category,
        unit: material.unit,
        price_per_unit: material.price_per_unit.toString(),
        min_stock: material.min_stock.toString(),
        current_stock: material.current_stock.toString(),
        description: material.description || '',
        is_active: material.is_active,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        
        put(`/masterdata/materials/${material.id}`, {
            transform: (data) => ({
                ...data,
                price_per_unit: parseFloat(data.price_per_unit) || 0,
                min_stock: parseInt(data.min_stock) || 0,
                current_stock: parseInt(data.current_stock) || 0,
            }),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Material - ${material.name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center gap-4">
                    <Link href="/masterdata/materials">
                        <Button variant="ghost" size="sm">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold">Edit Material</h1>
                        <p className="text-muted-foreground">
                            Update informasi material {material.name}
                        </p>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Informasi Material</CardTitle>
                        <CardDescription>
                            Edit formulir di bawah ini untuk mengupdate material
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="code">Kode Material *</Label>
                                    <Input
                                        id="code"
                                        value={data.code}
                                        onChange={(e) => setData('code', e.target.value)}
                                        placeholder="Contoh: MAT-001"
                                        className={errors.code ? 'border-red-500' : ''}
                                    />
                                    {errors.code && (
                                        <p className="text-sm text-red-600">{errors.code}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="name">Nama Material *</Label>
                                    <Input
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Contoh: Kayu Jati Grade A"
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
                                        placeholder="Contoh: kg, pcs, m3, liter"
                                        className={errors.unit ? 'border-red-500' : ''}
                                    />
                                    {errors.unit && (
                                        <p className="text-sm text-red-600">{errors.unit}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="price_per_unit">Harga per Satuan (Rp) *</Label>
                                    <Input
                                        id="price_per_unit"
                                        type="number"
                                        step="0.01"
                                        value={data.price_per_unit}
                                        onChange={(e) => setData('price_per_unit', e.target.value)}
                                        placeholder="0"
                                        className={errors.price_per_unit ? 'border-red-500' : ''}
                                    />
                                    {errors.price_per_unit && (
                                        <p className="text-sm text-red-600">{errors.price_per_unit}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="min_stock">Stok Minimum *</Label>
                                    <Input
                                        id="min_stock"
                                        type="number"
                                        value={data.min_stock}
                                        onChange={(e) => setData('min_stock', e.target.value)}
                                        placeholder="0"
                                        className={errors.min_stock ? 'border-red-500' : ''}
                                    />
                                    {errors.min_stock && (
                                        <p className="text-sm text-red-600">{errors.min_stock}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="current_stock">Stok Saat Ini *</Label>
                                    <Input
                                        id="current_stock"
                                        type="number"
                                        value={data.current_stock}
                                        onChange={(e) => setData('current_stock', e.target.value)}
                                        placeholder="0"
                                        className={errors.current_stock ? 'border-red-500' : ''}
                                    />
                                    {errors.current_stock && (
                                        <p className="text-sm text-red-600">{errors.current_stock}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Deskripsi</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('description', e.target.value)}
                                    placeholder="Deskripsi material (opsional)"
                                    rows={4}
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="is_active"
                                    checked={data.is_active}
                                    onCheckedChange={(checked) => setData('is_active', checked as boolean)}
                                />
                                <Label htmlFor="is_active" className="cursor-pointer">
                                    Material Aktif
                                </Label>
                            </div>

                            <div className="flex gap-4">
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Menyimpan...' : 'Update Material'}
                                </Button>
                                <Link href="/masterdata/materials">
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
