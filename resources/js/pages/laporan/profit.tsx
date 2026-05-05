import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { useState } from 'react';

interface ProfitData {
    product_name: string;
    total_sold: number;
    revenue: number;
    cost: number;
    profit: number;
    profit_margin: number;
}

interface Props {
    profitData: ProfitData[];
    totalRevenue: number;
    totalCost: number;
    totalProfit: number;
    profitMargin: number;
    startDate: string;
    endDate: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Laporan', href: '/laporan' },
    { title: 'Laporan Profit', href: '#' },
];

export default function ProfitReport({ profitData, totalRevenue, totalCost, totalProfit, profitMargin, startDate, endDate }: Props) {
    const [filters, setFilters] = useState({
        start_date: startDate,
        end_date: endDate,
    });

    const handleFilter = () => {
        router.get('/laporan/profit', filters);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Laporan Profit" />
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
                        <h1 className="text-3xl font-bold">Laporan Profit</h1>
                        <p className="text-muted-foreground">
                            Analisa profit dan margin per produk
                        </p>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Filter Periode</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-4 items-end">
                            <div className="flex-1">
                                <Label htmlFor="start_date">Tanggal Mulai</Label>
                                <Input
                                    id="start_date"
                                    type="date"
                                    value={filters.start_date}
                                    onChange={(e) => setFilters({ ...filters, start_date: e.target.value })}
                                />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="end_date">Tanggal Akhir</Label>
                                <Input
                                    id="end_date"
                                    type="date"
                                    value={filters.end_date}
                                    onChange={(e) => setFilters({ ...filters, end_date: e.target.value })}
                                />
                            </div>
                            <Button onClick={handleFilter}>
                                <Calendar className="h-4 w-4 mr-2" />
                                Filter
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Total Revenue</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">
                                $ {totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Total pendapatan
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Total Cost</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-orange-600">
                                $ {totalCost.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Total biaya produksi
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Total Profit</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-green-600">
                                $ {totalProfit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Total profit bersih
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Profit Margin</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{profitMargin.toFixed(1)}%</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Rata-rata margin
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Profit by Product</CardTitle>
                        <CardDescription>
                            Analisa profit per produk dalam periode terpilih
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Product Name</TableHead>
                                    <TableHead className="text-right">Units Sold</TableHead>
                                    <TableHead className="text-right">Revenue</TableHead>
                                    <TableHead className="text-right">Cost</TableHead>
                                    <TableHead className="text-right">Profit</TableHead>
                                    <TableHead className="text-right">Margin</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {profitData.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{item.product_name}</TableCell>
                                        <TableCell className="text-right">{item.total_sold}</TableCell>
                                        <TableCell className="text-right">
                                            $ {item.revenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            $ {item.cost.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <span className={item.profit >= 0 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                                                $ {item.profit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <span className={item.profit_margin >= 0 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                                                {item.profit_margin.toFixed(1)}%
                                            </span>
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
