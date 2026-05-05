<?php

namespace App\Http\Controllers;

use App\Models\DeliveryOrder;
use App\Models\Material;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        // Low stock materials
        $lowStockMaterials = Material::query()
            ->whereColumn('current_stock', '<=', 'min_stock')
            ->get()
            ->map(function ($material) {
                return [
                    'id' => $material->id,
                    'code' => $material->code,
                    'name' => $material->name,
                    'current_stock' => $material->current_stock,
                    'min_stock' => $material->min_stock,
                    'unit' => $material->unit,
                ];
            });

        // Sales statistics - current month
        $currentMonth = now()->startOfMonth();
        
        $deliveryOrders = DeliveryOrder::where('created_at', '>=', $currentMonth)
            ->where('status', '!=', 'Cancelled')
            ->get();

        $totalOrders = $deliveryOrders->count();
        $totalRevenue = $deliveryOrders->sum('total_amount');
        $totalProfit = $deliveryOrders->sum(function ($do) {
            return $do->total_amount - $do->total_cost;
        });
        
        $totalProductsSold = DB::table('delivery_order_items')
            ->join('delivery_orders', 'delivery_order_items.delivery_order_id', '=', 'delivery_orders.id')
            ->where('delivery_orders.created_at', '>=', $currentMonth)
            ->where('delivery_orders.status', '!=', 'Cancelled')
            ->sum('delivery_order_items.quantity');

        // Sales chart data - last 7 days
        $salesChartData = collect();
        for ($i = 6; $i >= 0; $i--) {
            $date = now()->subDays($i)->startOfDay();
            $dateEnd = now()->subDays($i)->endOfDay();

            $dailySales = DeliveryOrder::whereBetween('created_at', [$date, $dateEnd])
                ->where('status', '!=', 'Cancelled')
                ->sum('total_amount');

            $salesChartData->push([
                'date' => $date->format('d M'),
                'sales' => $dailySales,
            ]);
        }

        // Delivery status summary
        $deliveryStatus = [
            'prepared' => DeliveryOrder::where('status', 'Prepared')->count(),
            'in_transit' => DeliveryOrder::where('status', 'In Transit')->count(),
            'delivered' => DeliveryOrder::where('status', 'Delivered')
                ->where('created_at', '>=', $currentMonth)
                ->count(),
        ];

        // Recent delivery orders
        $recentDeliveries = DeliveryOrder::with('customer')
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($do) {
                return [
                    'id' => $do->id,
                    'do_number' => $do->do_number,
                    'customer_name' => $do->customer->name,
                    'total_amount' => $do->total_amount,
                    'status' => $do->status,
                    'expected_delivery_date' => $do->expected_delivery_date?->format('d/m/Y'),
                ];
            });

        return Inertia::render('dashboard', [
            'lowStockMaterials' => $lowStockMaterials,
            'stats' => [
                'total_orders' => $totalOrders,
                'total_revenue' => $totalRevenue,
                'total_profit' => $totalProfit,
                'total_products_sold' => (int) $totalProductsSold,
            ],
            'salesChartData' => $salesChartData,
            'deliveryStatus' => $deliveryStatus,
            'recentDeliveries' => $recentDeliveries,
        ]);
    }
}

