import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
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
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

interface PurchaseOrderItem {
    id: number;
    material_id: number;
    material_code: string;
    material_name: string;
    unit: string;
    quantity: number;
    quantity_received: number;
    remaining: number;
}

interface PurchaseOrder {
    id: number;
    po_number: string;
    supplier_name: string;
    order_date: string;
    status: string;
    items: PurchaseOrderItem[];
}

interface Props {
    purchaseOrders: PurchaseOrder[];
    auth: {
        user: {
            name: string;
        };
    };
}

interface ReceiptItem {
    purchase_order_item_id: number;
    quantity_received: string;
    selected: boolean;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Transaksi Pembelian', href: '/transaksi' },
    { title: 'Goods Receipts', href: '/transaksi/goods-receipts' },
    { title: 'Tambah Goods Receipt', href: '/transaksi/goods-receipts/create' },
];

export default function CreateGoodsReceipt({ purchaseOrders, auth }: Props) {
    const [selectedPO, setSelectedPO] = useState<PurchaseOrder | null>(null);
    const [receiptItems, setReceiptItems] = useState<ReceiptItem[]>([]);

    const { data, setData, post, processing, errors } = useForm({
        purchase_order_id: '',
        receipt_date: '',
        received_by: auth.user.name,
        notes: '',
        items: [] as { purchase_order_item_id: number; quantity_received: number }[],
    });

    const handlePOSelection = (poId: string) => {
        const po = purchaseOrders.find((p) => p.id.toString() === poId);
        setSelectedPO(po || null);
        setData('purchase_order_id', poId);

        if (po) {
            // Initialize receipt items with only items that have remaining quantity
            const initialItems = po.items
                .filter((item) => item.remaining > 0)
                .map((item) => ({
                    purchase_order_item_id: item.id,
                    quantity_received: '',
                    selected: false,
                }));
            setReceiptItems(initialItems);
        } else {
            setReceiptItems([]);
        }
    };

    const toggleItemSelection = (itemId: number) => {
        const newItems = receiptItems.map((item) =>
            item.purchase_order_item_id === itemId
                ? { ...item, selected: !item.selected }
                : item
        );
        setReceiptItems(newItems);
    };

    const updateItemQuantity = (itemId: number, value: string) => {
        const newItems = receiptItems.map((item) =>
            item.purchase_order_item_id === itemId
                ? { ...item, quantity_received: value }
                : item
        );
        setReceiptItems(newItems);
    };

    const getMaxQuantity = (itemId: number): number => {
        const poItem = selectedPO?.items.find((item) => item.id === itemId);
        return poItem?.remaining || 0;
    };

    const validateQuantity = (itemId: number, value: string): boolean => {
        const quantity = parseFloat(value);
        if (isNaN(quantity) || quantity <= 0) return false;
        return quantity <= getMaxQuantity(itemId);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        // Prepare items data - only include selected items with valid quantities
        const validItems = receiptItems
            .filter((item) => item.selected && item.quantity_received)
            .map((item) => ({
                purchase_order_item_id: item.purchase_order_item_id,
                quantity_received: parseFloat(item.quantity_received),
            }));

        setData('items', validItems);

        // Submit after state update
        setTimeout(() => {
            post('/transaksi/goods-receipts');
        }, 0);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Goods Receipt" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex items-center gap-4">
                    <Link href="/transaksi/goods-receipts">
                        <Button variant="ghost" size="sm">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold">Tambah Goods Receipt Baru</h1>
                        <p className="text-muted-foreground">
                            Catat penerimaan barang dari purchase order
                        </p>
                    </div>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    {/* General Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Umum</CardTitle>
                            <CardDescription>
                                Pilih purchase order dan isi informasi penerimaan
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="purchase_order_id">Purchase Order *</Label>
                                    <Select
                                        value={data.purchase_order_id}
                                        onValueChange={handlePOSelection}
                                    >
                                        <SelectTrigger
                                            className={
                                                errors.purchase_order_id ? 'border-red-500' : ''
                                            }
                                        >
                                            <SelectValue placeholder="Pilih purchase order" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {purchaseOrders.map((po) => (
                                                <SelectItem key={po.id} value={po.id.toString()}>
                                                    <div className="flex flex-col">
                                                        <span className="font-medium">
                                                            {po.po_number}
                                                        </span>
                                                        <span className="text-sm text-muted-foreground">
                                                            {po.supplier_name} • {po.order_date} •{' '}
                                                            {po.status}
                                                        </span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.purchase_order_id && (
                                        <p className="text-sm text-red-600">
                                            {errors.purchase_order_id}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="receipt_date">Tanggal Penerimaan *</Label>
                                    <Input
                                        id="receipt_date"
                                        type="date"
                                        value={data.receipt_date}
                                        onChange={(e) => setData('receipt_date', e.target.value)}
                                        className={errors.receipt_date ? 'border-red-500' : ''}
                                    />
                                    {errors.receipt_date && (
                                        <p className="text-sm text-red-600">
                                            {errors.receipt_date}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="received_by">Diterima Oleh *</Label>
                                    <Input
                                        id="received_by"
                                        type="text"
                                        value={data.received_by}
                                        onChange={(e) => setData('received_by', e.target.value)}
                                        placeholder="Nama penerima"
                                        className={errors.received_by ? 'border-red-500' : ''}
                                    />
                                    {errors.received_by && (
                                        <p className="text-sm text-red-600">
                                            {errors.received_by}
                                        </p>
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

                    {/* Purchase Order Items */}
                    {selectedPO && selectedPO.items.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Item Purchase Order</CardTitle>
                                <CardDescription>
                                    Pilih item yang akan diterima dan masukkan jumlah
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="rounded-md border">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-12">
                                                    <span className="sr-only">Select</span>
                                                </TableHead>
                                                <TableHead>Material</TableHead>
                                                <TableHead className="text-right">Satuan</TableHead>
                                                <TableHead className="text-right">
                                                    Jumlah Dipesan
                                                </TableHead>
                                                <TableHead className="text-right">
                                                    Sudah Diterima
                                                </TableHead>
                                                <TableHead className="text-right">Sisa</TableHead>
                                                <TableHead className="text-right">
                                                    Terima Sekarang
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {selectedPO.items.map((poItem, index) => {
                                                const receiptItem = receiptItems.find(
                                                    (item) =>
                                                        item.purchase_order_item_id === poItem.id
                                                );
                                                const quantityValue =
                                                    receiptItem?.quantity_received || '';
                                                const isValid =
                                                    !quantityValue ||
                                                    validateQuantity(poItem.id, quantityValue);

                                                return (
                                                    <TableRow
                                                        key={poItem.id}
                                                        className={
                                                            poItem.remaining === 0
                                                                ? 'bg-muted/50'
                                                                : ''
                                                        }
                                                    >
                                                        <TableCell>
                                                            {poItem.remaining > 0 && (
                                                                <Checkbox
                                                                    checked={
                                                                        receiptItem?.selected ||
                                                                        false
                                                                    }
                                                                    onCheckedChange={() =>
                                                                        toggleItemSelection(
                                                                            poItem.id
                                                                        )
                                                                    }
                                                                />
                                                            )}
                                                        </TableCell>
                                                        <TableCell>
                                                            <div>
                                                                <div className="font-medium">
                                                                    {poItem.material_code}
                                                                </div>
                                                                <div className="text-sm text-muted-foreground">
                                                                    {poItem.material_name}
                                                                </div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="text-right">
                                                            {poItem.unit}
                                                        </TableCell>
                                                        <TableCell className="text-right">
                                                            {poItem.quantity.toLocaleString(
                                                                'id-ID'
                                                            )}
                                                        </TableCell>
                                                        <TableCell className="text-right">
                                                            {poItem.quantity_received.toLocaleString(
                                                                'id-ID'
                                                            )}
                                                        </TableCell>
                                                        <TableCell className="text-right font-medium">
                                                            {poItem.remaining.toLocaleString(
                                                                'id-ID'
                                                            )}
                                                        </TableCell>
                                                        <TableCell className="text-right">
                                                            {poItem.remaining > 0 &&
                                                            receiptItem ? (
                                                                <div className="space-y-1">
                                                                    <Input
                                                                        type="number"
                                                                        step="0.01"
                                                                        value={quantityValue}
                                                                        onChange={(e) =>
                                                                            updateItemQuantity(
                                                                                poItem.id,
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                        placeholder="0"
                                                                        disabled={
                                                                            !receiptItem.selected
                                                                        }
                                                                        className={`w-32 ${
                                                                            !isValid
                                                                                ? 'border-red-500'
                                                                                : ''
                                                                        }`}
                                                                        max={poItem.remaining}
                                                                    />
                                                                    {!isValid && (
                                                                        <p className="text-xs text-red-600">
                                                                            Maks:{' '}
                                                                            {poItem.remaining}
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            ) : (
                                                                <span className="text-muted-foreground">
                                                                    -
                                                                </span>
                                                            )}
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </div>
                                {errors.items && typeof errors.items === 'string' && (
                                    <p className="mt-2 text-sm text-red-600">{errors.items}</p>
                                )}
                            </CardContent>
                        </Card>
                    )}

                    {selectedPO && selectedPO.items.length === 0 && (
                        <Card>
                            <CardContent className="pt-6">
                                <p className="text-center text-muted-foreground">
                                    Purchase order ini tidak memiliki item atau semua item telah
                                    diterima sepenuhnya
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        <Button type="submit" disabled={processing || !selectedPO}>
                            {processing ? 'Menyimpan...' : 'Simpan Goods Receipt'}
                        </Button>
                        <Link href="/transaksi/goods-receipts">
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
