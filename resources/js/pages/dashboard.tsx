import { Head, Link } from '@inertiajs/react';
import { Package, ShoppingCart, Factory, Truck, TrendingUp, AlertTriangle, Eye } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

interface LowStockMaterial {
    id: number;
    code: string;
    name: string;
    current_stock: number;
    min_stock: number;
    unit: string;
}

interface Stats {
    total_orders: number;
    total_revenue: number;
    total_profit: number;
    total_products_sold: number;
}

interface SalesChartData {
    date: string;
    sales: number;
}

interface DeliveryStatus {
    prepared: number;
    in_transit: number;
    delivered: number;
}

interface RecentDelivery {
    id: number;
    do_number: string;
    customer_name: string;
    total_amount: number;
    status: string;
    expected_delivery_date: string | null;
}

interface Props {
    lowStockMaterials: LowStockMaterial[];
    stats: Stats;
    salesChartData: SalesChartData[];
    deliveryStatus: DeliveryStatus;
    recentDeliveries: RecentDelivery[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
    },
];

export default function Dashboard({ lowStockMaterials, stats, salesChartData, deliveryStatus, recentDeliveries }: Props) {
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        }).format(value);
    };

    const statsData = [
        {
            title: 'Total Orders',
            value: stats.total_orders.toString(),
            description: 'Bulan ini',
            icon: ShoppingCart,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50',
        },
        {
            title: 'Total Revenue',
            value: formatCurrency(stats.total_revenue),
            description: 'Penjualan bulan ini',
            icon: TrendingUp,
            color: 'text-green-600',
            bgColor: 'bg-green-50',
        },
        {
            title: 'Total Profit',
            value: formatCurrency(stats.total_profit),
            description: 'Keuntungan bulan ini',
            icon: TrendingUp,
            color: 'text-emerald-600',
            bgColor: 'bg-emerald-50',
        },
        {
            title: 'Products Sold',
            value: stats.total_products_sold.toString(),
            description: 'Unit terjual',
            icon: Package,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50',
        },
        {
            title: 'Material Kritis',
            value: lowStockMaterials.length.toString(),
            description: 'Stok di bawah minimum',
            icon: AlertTriangle,
            color: 'text-red-600',
            bgColor: 'bg-red-50',
        },
        {
            title: 'In Transit',
            value: deliveryStatus.in_transit.toString(),
            description: 'Dalam pengiriman',
            icon: Truck,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p className="text-muted-foreground">
                        Selamat datang di CV Posteak Furniture Inventory System
                    </p>
                </div>

                {lowStockMaterials.length > 0 && (
                    <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Peringatan Stok Rendah!</AlertTitle>
                        <AlertDescription>
                            Terdapat {lowStockMaterials.length} material dengan stok di bawah atau sama dengan minimum.
                            Segera lakukan purchase order untuk material yang kritis.
                        </AlertDescription>
                    </Alert>
                )}

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {statsData.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <Card key={stat.title}>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        {stat.title}
                                    </CardTitle>
                                    <div className={`rounded-lg p-2 ${stat.bgColor}`}>
                                        <Icon className={`h-4 w-4 ${stat.color}`} />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{stat.value}</div>
                                    <p className="text-xs text-muted-foreground">
                                        {stat.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activities</CardTitle>
                            <CardDescription>
                                Aktivitas terbaru dalam sistem
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center text-muted-foreground py-8">
                                Data aktivitas akan ditampilkan di sini
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle>Low Stock Alert</CardTitle>
                                    <CardDescription>
                                        Material dengan stok kritis
                                    </CardDescription>
                                </div>
                                <Link href="/masterdata/materials">
                                    <Button variant="outline" size="sm">
                                        Lihat Semua
                                    </Button>
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent>
                            {lowStockMaterials.length === 0 ? (
                                <p className="text-center text-muted-foreground py-8">
                                    Semua material memiliki stok yang cukup
                                </p>
                            ) : (
                                <div className="space-y-2">
                                    {lowStockMaterials.slice(0, 5).map((material) => (
                                        <div key={material.id} className="flex items-center justify-between border-b pb-2 last:border-0">
                                            <div className="flex items-center gap-2">
                                                <AlertTriangle className="h-4 w-4 text-red-600" />
                                                <div>
                                                    <p className="text-sm font-medium">{material.name}</p>
                                                    <p className="text-xs text-muted-foreground">{material.code}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-bold text-red-600">
                                                    {material.current_stock} {material.unit}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    Min: {material.min_stock}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    {lowStockMaterials.length > 5 && (
                                        <p className="text-xs text-muted-foreground text-center pt-2">
                                            Dan {lowStockMaterials.length - 5} material lainnya
                                        </p>
                                    )}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
