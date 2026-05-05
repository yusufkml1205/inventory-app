import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Calendar, Factory } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { useState } from 'react';

interface WorkOrder {
    wo_number: string;
    product_name: string;
    quantity_to_produce: number;
    quantity_completed: number;
    target_date: string;
    actual_date: string | null;
    status: string;
    completion_rate: number;
}

interface Props {
    workOrders: WorkOrder[];
    totalPlanned: number;
    totalCompleted: number;
    completionRate: number;
    startDate: string;
    endDate: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Laporan', href: '/laporan' },
    { title: 'Laporan Produksi', href: '#' },
];

const statusColors: Record<string, string> = {
    'Planning': 'bg-blue-500',
    'In Progress': 'bg-yellow-500',
    'Completed': 'bg-green-500',
    'Cancelled': 'bg-red-500',
};

export default function ProductionReport({ workOrders, totalPlanned, totalCompleted, completionRate, startDate, endDate }: Props) {
    const [filters, setFilters] = useState({
        start_date: startDate,
        end_date: endDate,
    });

    const handleFilter = () => {
        router.get('/laporan/production', filters);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Laporan Produksi" />
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
                        <h1 className="text-3xl font-bold">Laporan Produksi</h1>
                        <p className="text-muted-foreground">
                            Laporan work order dan produksi furniture
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
                            <CardDescription>Total Work Orders</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{workOrders.length}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                WO dalam periode
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Planned Production</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{totalPlanned}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Unit direncanakan
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Completed Production</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-green-600">{totalCompleted}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Unit selesai
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-3">
                            <CardDescription>Completion Rate</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{completionRate}%</div>
                            <Progress value={completionRate} className="mt-2" />
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Work Orders</CardTitle>
                        <CardDescription>
                            Daftar work order dalam periode terpilih
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>WO Number</TableHead>
                                    <TableHead>Product Name</TableHead>
                                    <TableHead className="text-right">Planned</TableHead>
                                    <TableHead className="text-right">Completed</TableHead>
                                    <TableHead>Target Date</TableHead>
                                    <TableHead>Actual Date</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Completion</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {workOrders.map((wo, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{wo.wo_number}</TableCell>
                                        <TableCell>{wo.product_name}</TableCell>
                                        <TableCell className="text-right">{wo.quantity_to_produce}</TableCell>
                                        <TableCell className="text-right">{wo.quantity_completed}</TableCell>
                                        <TableCell>{wo.target_date}</TableCell>
                                        <TableCell>{wo.actual_date || '-'}</TableCell>
                                        <TableCell>
                                            <Badge className={statusColors[wo.status] || 'bg-gray-500'}>
                                                {wo.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">{wo.completion_rate.toFixed(1)}%</TableCell>
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
