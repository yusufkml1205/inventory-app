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
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

interface Material {
    id: number;
    code: string;
    name: string;
    unit: string;
}

interface StockAdjustment {
    id: number;
    adjustment_number: string;
    material_id: number;
    transaction_type: string;
    quantity: number;
    reason: string;
    notes: string | null;
    adjustment_date: string;
    old_quantity?: number;
    old_transaction_type?: string;
}

interface Props {
    stockAdjustment: StockAdjustment;
    materials: Material[];
    transactionTypes: string[];
    reasons: string[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Adjust Stock', href: '/adjust' },
    { title: 'Edit', href: '#' },
];

export default function EditStockAdjustment({
    stockAdjustment,
    materials,
    transactionTypes,
    reasons,
}: Props) {
    const { data, setData, post, processing, errors } = useForm({
        material_id: stockAdjustment.material_id.toString(),
        transaction_type: stockAdjustment.transaction_type,
        quantity: stockAdjustment.quantity.toString(),
        reason: stockAdjustment.reason,
        notes: stockAdjustment.notes || '',
        adjustment_date: stockAdjustment.adjustment_date,
        supporting_document: null as File | null,
        _method: 'PUT',
    });

    const selectedMaterial = materials.find(
        (m) => m.id.toString() === data.material_id
    );

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(`/adjust/${stockAdjustment.id}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Stock Adjustment - ${stockAdjustment.adjustment_number}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center gap-4">
                    <Link href="/adjust">
                        <Button variant="ghost" size="sm">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold">Edit Stock Adjustment</h1>
                        <p className="text-muted-foreground">
                            Update informasi stock adjustment {stockAdjustment.adjustment_number}
                        </p>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Informasi Stock Adjustment</CardTitle>
                        <CardDescription>
                            Edit formulir di bawah ini untuk mengupdate stock adjustment
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Adjustment Number (Read-only) */}
                                <div className="space-y-2">
                                    <Label htmlFor="adjustment_number">Nomor Adjustment</Label>
                                    <Input
                                        id="adjustment_number"
                                        value={stockAdjustment.adjustment_number}
                                        disabled
                                        className="bg-muted"
                                    />
                                </div>

                                {/* Material */}
                                <div className="space-y-2">
                                    <Label htmlFor="material_id">Material *</Label>
                                    <Select
                                        value={data.material_id}
                                        onValueChange={(value) => setData('material_id', value)}
                                    >
                                        <SelectTrigger className={errors.material_id ? 'border-red-500' : ''}>
                                            <SelectValue placeholder="Pilih material" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {materials.map((material) => (
                                                <SelectItem key={material.id} value={material.id.toString()}>
                                                    {material.code} - {material.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.material_id && (
                                        <p className="text-sm text-red-600">{errors.material_id}</p>
                                    )}
                                </div>

                                {/* Transaction Type */}
                                <div className="space-y-2">
                                    <Label htmlFor="transaction_type">Tipe Transaksi *</Label>
                                    <Select
                                        value={data.transaction_type}
                                        onValueChange={(value) => setData('transaction_type', value)}
                                    >
                                        <SelectTrigger className={errors.transaction_type ? 'border-red-500' : ''}>
                                            <SelectValue placeholder="Pilih tipe transaksi" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {transactionTypes.map((type) => (
                                                <SelectItem key={type} value={type}>
                                                    {type}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.transaction_type && (
                                        <p className="text-sm text-red-600">{errors.transaction_type}</p>
                                    )}
                                </div>

                                {/* Quantity */}
                                <div className="space-y-2">
                                    <Label htmlFor="quantity">
                                        Jumlah *
                                        {selectedMaterial && (
                                            <span className="text-muted-foreground ml-1">
                                                ({selectedMaterial.unit})
                                            </span>
                                        )}
                                    </Label>
                                    <Input
                                        id="quantity"
                                        type="number"
                                        min="1"
                                        value={data.quantity}
                                        onChange={(e) => setData('quantity', e.target.value)}
                                        placeholder="0"
                                        className={errors.quantity ? 'border-red-500' : ''}
                                    />
                                    {errors.quantity && (
                                        <p className="text-sm text-red-600">{errors.quantity}</p>
                                    )}
                                </div>

                                {/* Reason */}
                                <div className="space-y-2">
                                    <Label htmlFor="reason">Alasan *</Label>
                                    <Select
                                        value={data.reason}
                                        onValueChange={(value) => setData('reason', value)}
                                    >
                                        <SelectTrigger className={errors.reason ? 'border-red-500' : ''}>
                                            <SelectValue placeholder="Pilih alasan" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {reasons.map((reason) => (
                                                <SelectItem key={reason} value={reason}>
                                                    {reason}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.reason && (
                                        <p className="text-sm text-red-600">{errors.reason}</p>
                                    )}
                                </div>

                                {/* Adjustment Date */}
                                <div className="space-y-2">
                                    <Label htmlFor="adjustment_date">Tanggal Adjustment *</Label>
                                    <Input
                                        id="adjustment_date"
                                        type="date"
                                        value={data.adjustment_date}
                                        onChange={(e) => setData('adjustment_date', e.target.value)}
                                        className={errors.adjustment_date ? 'border-red-500' : ''}
                                    />
                                    {errors.adjustment_date && (
                                        <p className="text-sm text-red-600">{errors.adjustment_date}</p>
                                    )}
                                </div>
                            </div>

                            {/* Supporting Document */}
                            <div className="space-y-2">
                                <Label htmlFor="supporting_document">
                                    Dokumen Pendukung
                                    <span className="text-muted-foreground ml-1 text-xs">
                                        (Upload file baru untuk mengganti dokumen yang ada)
                                    </span>
                                </Label>
                                <Input
                                    id="supporting_document"
                                    type="file"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            setData('supporting_document', file);
                                        }
                                    }}
                                    className={errors.supporting_document ? 'border-red-500' : ''}
                                />
                                <p className="text-xs text-muted-foreground">
                                    Format: PDF, JPG, PNG (Maks. 2MB)
                                </p>
                                {errors.supporting_document && (
                                    <p className="text-sm text-red-600">{errors.supporting_document}</p>
                                )}
                            </div>

                            {/* Notes */}
                            <div className="space-y-2">
                                <Label htmlFor="notes">Catatan</Label>
                                <Textarea
                                    id="notes"
                                    value={data.notes}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                        setData('notes', e.target.value)
                                    }
                                    placeholder="Catatan tambahan (opsional)"
                                    rows={4}
                                />
                                {errors.notes && (
                                    <p className="text-sm text-red-600">{errors.notes}</p>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Menyimpan...' : 'Update Stock Adjustment'}
                                </Button>
                                <Link href="/adjust">
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
