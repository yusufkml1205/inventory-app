import { Head, Link, useForm } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';
import { FormEventHandler } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

interface Props {
    statuses: string[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Produksi', href: '/produksi' },
    { title: 'Work Orders', href: '/produksi/work-orders' },
    { title: 'Tambah Work Order', href: '#' },
];

export default function CreateWorkOrder({ statuses }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        product_name: '',
        quantity_to_produce: '',
        target_completion_date: '',
        reference: '',
        notes: '',
        status: 'Planning',
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/produksi/work-orders');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Work Order" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center gap-4">
                    <Link href="/produksi/work-orders">
                        <Button variant="ghost" size="sm">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold">Tambah Work Order</h1>
                        <p className="text-muted-foreground">
                            Buat work order produksi baru
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Work Order</CardTitle>
                            <CardDescription>
                                Masukkan detail work order produksi
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="product_name">Nama Produk *</Label>
                                    <Input
                                        id="product_name"
                                        value={data.product_name}
                                        onChange={(e) => setData('product_name', e.target.value)}
                                        placeholder="Contoh: Kursi Minimalis"
                                        required
                                    />
                                    {errors.product_name && (
                                        <p className="text-sm text-destructive">{errors.product_name}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="quantity_to_produce">Jumlah Produksi *</Label>
                                    <Input
                                        id="quantity_to_produce"
                                        type="number"
                                        min="1"
                                        value={data.quantity_to_produce}
                                        onChange={(e) => setData('quantity_to_produce', e.target.value)}
                                        placeholder="0"
                                        required
                                    />
                                    {errors.quantity_to_produce && (
                                        <p className="text-sm text-destructive">{errors.quantity_to_produce}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="target_completion_date">Target Selesai *</Label>
                                    <Input
                                        id="target_completion_date"
                                        type="date"
                                        value={data.target_completion_date}
                                        onChange={(e) => setData('target_completion_date', e.target.value)}
                                        required
                                    />
                                    {errors.target_completion_date && (
                                        <p className="text-sm text-destructive">{errors.target_completion_date}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="status">Status *</Label>
                                    <select
                                        id="status"
                                        value={data.status}
                                        onChange={(e) => setData('status', e.target.value)}
                                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                        required
                                    >
                                        {statuses.map((status) => (
                                            <option key={status} value={status}>
                                                {status}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.status && (
                                        <p className="text-sm text-destructive">{errors.status}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="reference">Referensi</Label>
                                <Input
                                    id="reference"
                                    value={data.reference}
                                    onChange={(e) => setData('reference', e.target.value)}
                                    placeholder="Contoh: Sales Order SO-001"
                                />
                                {errors.reference && (
                                    <p className="text-sm text-destructive">{errors.reference}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="notes">Catatan</Label>
                                <Textarea
                                    id="notes"
                                    value={data.notes}
                                    onChange={(e) => setData('notes', e.target.value)}
                                    placeholder="Catatan tambahan untuk work order ini..."
                                    rows={4}
                                />
                                {errors.notes && (
                                    <p className="text-sm text-destructive">{errors.notes}</p>
                                )}
                            </div>

                            <div className="flex justify-end gap-2">
                                <Link href="/produksi/work-orders">
                                    <Button type="button" variant="outline">
                                        Batal
                                    </Button>
                                </Link>
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Menyimpan...' : 'Simpan Work Order'}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </AppLayout>
    );
}
