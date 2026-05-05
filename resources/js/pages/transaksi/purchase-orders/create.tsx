import { Head, Link, useForm } from '@inertiajs/react';
import { ChevronLeft, Plus, Trash2 } from 'lucide-react';
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

interface Supplier {
    id: number;
    name: string;
    code: string;
}

interface Material {
    id: number;
    name: string;
    code: string;
    unit: string;
    price_per_unit: number;
}

interface Props {
    suppliers: Supplier[];
    materials: Material[];
    statuses: string[];
}

interface PurchaseOrderItem {
    material_id: string;
    quantity: string;
    unit_price: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Transaksi', href: '/transaksi' },
    { title: 'Purchase Order', href: '/transaksi/purchase-orders' },
    { title: 'Tambah Purchase Order', href: '/transaksi/purchase-orders/create' },
];

export default function CreatePurchaseOrder({ suppliers, materials, statuses }: Props) {
    const [items, setItems] = useState<PurchaseOrderItem[]>([
        { material_id: '', quantity: '', unit_price: '' },
    ]);

    const { data, setData, post, processing, errors } = useForm({
        supplier_id: '',
        order_date: '',
        status: '',
        notes: '',
        items: items,
    });

    const formatCurrency = (value: number): string => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    const addItem = () => {
        const newItems = [...items, { material_id: '', quantity: '', unit_price: '' }];
        setItems(newItems);
        setData('items', newItems);
    };

    const removeItem = (index: number) => {
        if (items.length > 1) {
            const newItems = items.filter((_, i) => i !== index);
            setItems(newItems);
            setData('items', newItems);
        }
    };

    const updateItem = (index: number, field: keyof PurchaseOrderItem, value: string) => {
        const newItems = [...items];
        newItems[index][field] = value;

        // Auto-fill unit_price when material is selected
        if (field === 'material_id' && value) {
            const selectedMaterial = materials.find((m) => m.id.toString() === value);
            if (selectedMaterial) {
                newItems[index].unit_price = selectedMaterial.price_per_unit.toString();
            }
        }

        setItems(newItems);
        setData('items', newItems);
    };

    const getSelectedMaterial = (materialId: string): Material | undefined => {
        return materials.find((m) => m.id.toString() === materialId);
    };

    const calculateItemSubtotal = (item: PurchaseOrderItem): number => {
        const quantity = parseFloat(item.quantity) || 0;
        const unitPrice = parseFloat(item.unit_price) || 0;
        return quantity * unitPrice;
    };

    const calculateSubtotal = (): number => {
        return items.reduce((total, item) => total + calculateItemSubtotal(item), 0);
    };

    const calculateGrandTotal = (): number => {
        return calculateSubtotal();
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/transaksi/purchase-orders');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Purchase Order" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center gap-4">
                    <Link href="/transaksi/purchase-orders">
                        <Button variant="ghost" size="sm">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold">Tambah Purchase Order Baru</h1>
                        <p className="text-muted-foreground">
                            Buat purchase order pembelian material dari supplier
                        </p>
                    </div>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    {/* General Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Umum</CardTitle>
                            <CardDescription>
                                Isi informasi dasar purchase order
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="supplier_id">Supplier *</Label>
                                    <Select
                                        value={data.supplier_id}
                                        onValueChange={(value) => setData('supplier_id', value)}
                                    >
                                        <SelectTrigger className={errors.supplier_id ? 'border-red-500' : ''}>
                                            <SelectValue placeholder="Pilih supplier" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {suppliers.map((supplier) => (
                                                <SelectItem key={supplier.id} value={supplier.id.toString()}>
                                                    {supplier.code} - {supplier.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.supplier_id && (
                                        <p className="text-sm text-red-600">{errors.supplier_id}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="order_date">Tanggal Order *</Label>
                                    <Input
                                        id="order_date"
                                        type="date"
                                        value={data.order_date}
                                        onChange={(e) => setData('order_date', e.target.value)}
                                        className={errors.order_date ? 'border-red-500' : ''}
                                    />
                                    {errors.order_date && (
                                        <p className="text-sm text-red-600">{errors.order_date}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="status">Status *</Label>
                                    <Select
                                        value={data.status}
                                        onValueChange={(value) => setData('status', value)}
                                    >
                                        <SelectTrigger className={errors.status ? 'border-red-500' : ''}>
                                            <SelectValue placeholder="Pilih status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {statuses.map((status) => (
                                                <SelectItem key={status} value={status}>
                                                    {status}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.status && (
                                        <p className="text-sm text-red-600">{errors.status}</p>
                                    )}
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="notes">Catatan</Label>
                                    <Textarea
                                        id="notes"
                                        value={data.notes}
                                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
                                            setData('notes', e.target.value)
                                        }
                                        placeholder="Catatan tambahan (opsional)"
                                        rows={3}
                                    />
                                    {errors.notes && (
                                        <p className="text-sm text-red-600">{errors.notes}</p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Items */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle>Item Purchase Order</CardTitle>
                                    <CardDescription>
                                        Tambahkan material yang akan dipesan
                                    </CardDescription>
                                </div>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={addItem}
                                >
                                    <Plus className="mr-2 h-4 w-4" />
                                    Tambah Item
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {items.map((item, index) => {
                                    const selectedMaterial = getSelectedMaterial(item.material_id);
                                    const itemSubtotal = calculateItemSubtotal(item);

                                    return (
                                        <div
                                            key={index}
                                            className="rounded-lg border p-4 space-y-4"
                                        >
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-semibold">Item #{index + 1}</h4>
                                                {items.length > 1 && (
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => removeItem(index)}
                                                    >
                                                        <Trash2 className="h-4 w-4 text-red-500" />
                                                    </Button>
                                                )}
                                            </div>

                                            <div className="grid gap-4 md:grid-cols-4">
                                                <div className="space-y-2 md:col-span-2">
                                                    <Label htmlFor={`material_id_${index}`}>
                                                        Material *
                                                    </Label>
                                                    <Select
                                                        value={item.material_id}
                                                        onValueChange={(value) =>
                                                            updateItem(index, 'material_id', value)
                                                        }
                                                    >
                                                        <SelectTrigger
                                                            className={
                                                                errors[`items.${index}.material_id`]
                                                                    ? 'border-red-500'
                                                                    : ''
                                                            }
                                                        >
                                                            <SelectValue placeholder="Pilih material" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {materials.map((material) => (
                                                                <SelectItem
                                                                    key={material.id}
                                                                    value={material.id.toString()}
                                                                >
                                                                    {material.code} - {material.name}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    {selectedMaterial && (
                                                        <p className="text-sm text-muted-foreground">
                                                            Satuan: {selectedMaterial.unit}
                                                        </p>
                                                    )}
                                                    {errors[`items.${index}.material_id`] && (
                                                        <p className="text-sm text-red-600">
                                                            {errors[`items.${index}.material_id`]}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor={`quantity_${index}`}>
                                                        Jumlah *
                                                    </Label>
                                                    <Input
                                                        id={`quantity_${index}`}
                                                        type="number"
                                                        step="0.01"
                                                        value={item.quantity}
                                                        onChange={(e) =>
                                                            updateItem(index, 'quantity', e.target.value)
                                                        }
                                                        placeholder="0"
                                                        className={
                                                            errors[`items.${index}.quantity`]
                                                                ? 'border-red-500'
                                                                : ''
                                                        }
                                                    />
                                                    {errors[`items.${index}.quantity`] && (
                                                        <p className="text-sm text-red-600">
                                                            {errors[`items.${index}.quantity`]}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor={`unit_price_${index}`}>
                                                        Harga Satuan (Rp) *
                                                    </Label>
                                                    <Input
                                                        id={`unit_price_${index}`}
                                                        type="number"
                                                        step="0.01"
                                                        value={item.unit_price}
                                                        onChange={(e) =>
                                                            updateItem(index, 'unit_price', e.target.value)
                                                        }
                                                        placeholder="0"
                                                        className={
                                                            errors[`items.${index}.unit_price`]
                                                                ? 'border-red-500'
                                                                : ''
                                                        }
                                                    />
                                                    {errors[`items.${index}.unit_price`] && (
                                                        <p className="text-sm text-red-600">
                                                            {errors[`items.${index}.unit_price`]}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            {item.quantity && item.unit_price && (
                                                <div className="flex justify-end">
                                                    <div className="text-right">
                                                        <p className="text-sm text-muted-foreground">
                                                            Subtotal
                                                        </p>
                                                        <p className="text-lg font-semibold">
                                                            {formatCurrency(itemSubtotal)}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}

                                {errors.items && typeof errors.items === 'string' && (
                                    <p className="text-sm text-red-600">{errors.items}</p>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Total Summary */}
                    <Card>
                        <CardContent className="pt-6">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-base">
                                    <span className="font-medium">Subtotal</span>
                                    <span>{formatCurrency(calculateSubtotal())}</span>
                                </div>
                                <div className="flex items-center justify-between border-t pt-2 text-xl font-bold">
                                    <span>Grand Total</span>
                                    <span>{formatCurrency(calculateGrandTotal())}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Menyimpan...' : 'Simpan Purchase Order'}
                        </Button>
                        <Link href="/transaksi/purchase-orders">
                            <Button type="button" variant="outline">
                                Batal
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
