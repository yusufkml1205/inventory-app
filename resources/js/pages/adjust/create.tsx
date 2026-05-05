import { Head, Link, useForm } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
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
    current_stock: number;
}

interface Props {
    materials: Material[];
    transactionTypes: string[];
    reasons: string[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Adjust Stock', href: '/adjust' },
    { title: 'Create', href: '/adjust/create' },
];

export default function CreateStockAdjustment({ materials, transactionTypes, reasons }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        material_id: '',
        transaction_type: '',
        quantity: '',
        reason: '',
        adjustment_date: '',
        notes: '',
        supporting_document: null as File | null,
    });

    const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

    const handleMaterialChange = (materialId: string) => {
        setData('material_id', materialId);
        const material = materials.find((m) => m.id.toString() === materialId);
        setSelectedMaterial(material || null);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('supporting_document', file);
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/adjust');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Stock Adjustment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center gap-4">
                    <Link href="/adjust">
                        <Button variant="ghost" size="sm">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold">Create Stock Adjustment</h1>
                        <p className="text-muted-foreground">
                            Adjust material stock levels
                        </p>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Adjustment Information</CardTitle>
                        <CardDescription>
                            Fill in the form below to create a new stock adjustment
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="material_id">Material *</Label>
                                    <Select
                                        value={data.material_id}
                                        onValueChange={handleMaterialChange}
                                    >
                                        <SelectTrigger className={errors.material_id ? 'border-red-500' : ''}>
                                            <SelectValue placeholder="Select material" />
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

                                <div className="space-y-2">
                                    <Label htmlFor="transaction_type">Transaction Type *</Label>
                                    <Select
                                        value={data.transaction_type}
                                        onValueChange={(value) => setData('transaction_type', value)}
                                    >
                                        <SelectTrigger className={errors.transaction_type ? 'border-red-500' : ''}>
                                            <SelectValue placeholder="Select transaction type" />
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

                                {selectedMaterial && (
                                    <div className="space-y-2 md:col-span-2">
                                        <div className="rounded-lg border bg-muted/50 p-4">
                                            <h3 className="font-medium mb-2">Selected Material Details</h3>
                                            <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                                                <div>
                                                    <p className="text-muted-foreground">Code</p>
                                                    <p className="font-medium">{selectedMaterial.code}</p>
                                                </div>
                                                <div>
                                                    <p className="text-muted-foreground">Name</p>
                                                    <p className="font-medium">{selectedMaterial.name}</p>
                                                </div>
                                                <div>
                                                    <p className="text-muted-foreground">Unit</p>
                                                    <p className="font-medium">{selectedMaterial.unit}</p>
                                                </div>
                                                <div>
                                                    <p className="text-muted-foreground">Current Stock</p>
                                                    <p className="font-medium">{selectedMaterial.current_stock}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <Label htmlFor="quantity">Quantity *</Label>
                                    <Input
                                        id="quantity"
                                        type="number"
                                        min="1"
                                        step="1"
                                        value={data.quantity}
                                        onChange={(e) => setData('quantity', e.target.value)}
                                        placeholder="0"
                                        className={errors.quantity ? 'border-red-500' : ''}
                                    />
                                    {errors.quantity && (
                                        <p className="text-sm text-red-600">{errors.quantity}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="reason">Reason *</Label>
                                    <Select
                                        value={data.reason}
                                        onValueChange={(value) => setData('reason', value)}
                                    >
                                        <SelectTrigger className={errors.reason ? 'border-red-500' : ''}>
                                            <SelectValue placeholder="Select reason" />
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

                                <div className="space-y-2">
                                    <Label htmlFor="adjustment_date">Adjustment Date *</Label>
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

                                <div className="space-y-2">
                                    <Label htmlFor="supporting_document">Supporting Document</Label>
                                    <Input
                                        id="supporting_document"
                                        type="file"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={handleFileChange}
                                        className={errors.supporting_document ? 'border-red-500' : ''}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Accepted formats: PDF, JPG, JPEG, PNG (max 2MB)
                                    </p>
                                    {errors.supporting_document && (
                                        <p className="text-sm text-red-600">{errors.supporting_document}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="notes">Notes</Label>
                                <Textarea
                                    id="notes"
                                    value={data.notes}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('notes', e.target.value)}
                                    placeholder="Additional notes (optional)"
                                    rows={4}
                                />
                            </div>

                            <div className="flex gap-4">
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Saving...' : 'Save Adjustment'}
                                </Button>
                                <Link href="/adjust">
                                    <Button type="button" variant="outline">
                                        Cancel
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
