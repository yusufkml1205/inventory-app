import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Download, Package, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

interface Material {
    code: string;
    name: string;
    category: string;
    unit: string;
    current_stock: number;
    min_stock: number;
    price_per_unit: number;
    stock_value: number;
    is_low_stock: boolean;
}

interface Props {
    materials: Material[];
    totalValue: number;
    lowStockCount: number;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Laporan', href: '/laporan' },
    { title: 'Laporan Persediaan', href: '#' },
];

export default function InventoryReport({ materials, totalValue, lowStockCount }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Laporan Persediaan" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Link href="/laporan">
                                <Button variant="ghost" size="sm">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Kembali
                                </Button>
                            </Link>
                        </div>
                        <h1 className="text-3xl font-bold">Laporan Persediaan Material</h1>
                        <p className="text-muted-foreground">
                            Laporan inventory dan stok material
                        </p>
                    </div>
                    <a href="/laporan/inventory/pdf" target="_blank">
                        <Button>
                            <Download className="h-4 w-4 mr-2" />
                            Export PDF
                        </Button>
                    </a>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Total Items</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{materials.length}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Material items
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Total Inventory Value</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">
                                Rp {totalValue.toLocaleString('id-ID', { minimumFractionDigits: 2 })}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Total stock value
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Low Stock Items</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-red-600">{lowStockCount}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Needs reorder
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Material Inventory</CardTitle>
                        <CardDescription>
                            Daftar semua material dengan status stok
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Code</TableHead>
                                    <TableHead>Material Name</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead className="text-right">Current Stock</TableHead>
                                    <TableHead className="text-right">Min Stock</TableHead>
                                    <TableHead className="text-right">Price/Unit</TableHead>
                                    <TableHead className="text-right">Stock Value</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {materials.map((material, index) => (
                                    <TableRow key={index} className={material.is_low_stock ? 'bg-red-50' : ''}>
                                        <TableCell className="font-medium">{material.code}</TableCell>
                                        <TableCell>{material.name}</TableCell>
                                        <TableCell>{material.category}</TableCell>
                                        <TableCell className="text-right">
                                            {material.current_stock.toLocaleString()} {material.unit}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {material.min_stock.toLocaleString()} {material.unit}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            Rp {material.price_per_unit.toLocaleString('id-ID', { minimumFractionDigits: 2 })}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            Rp {material.stock_value.toLocaleString('id-ID', { minimumFractionDigits: 2 })}
                                        </TableCell>
                                        <TableCell>
                                            {material.is_low_stock ? (
                                                <Badge variant="destructive" className="flex items-center gap-1 w-fit">
                                                    <AlertTriangle className="h-3 w-3" />
                                                    Low Stock
                                                </Badge>
                                            ) : (
                                                <Badge variant="default" className="bg-green-600">OK</Badge>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
