<?php

namespace App\Http\Controllers;

use App\Models\DeliveryOrder;
use App\Models\Material;
use App\Models\PurchaseOrder;
use App\Models\WorkOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class LaporanController extends Controller
{
    /**
     * Inventory Report
     */
    public function inventory(Request $request): Response
    {
        $materials = Material::orderBy('name')
            ->get()
            ->map(function ($material) {
                return [
                    'code' => $material->code,
                    'name' => $material->name,
                    'category' => $material->category,
                    'unit' => $material->unit,
                    'current_stock' => $material->current_stock,
                    'min_stock' => $material->min_stock,
                    'price_per_unit' => $material->price_per_unit,
                    'stock_value' => $material->current_stock * $material->price_per_unit,
                    'is_low_stock' => $material->current_stock <= $material->min_stock,
                ];
            });

        $totalValue = $materials->sum('stock_value');
        $lowStockCount = $materials->where('is_low_stock', true)->count();

        return Inertia::render('laporan/inventory', [
            'materials' => $materials,
            'totalValue' => $totalValue,
            'lowStockCount' => $lowStockCount,
        ]);
    }

    /**
     * Purchases Report
     */
    public function purchases(Request $request): Response
    {
        $startDate = $request->input('start_date', now()->startOfMonth()->format('Y-m-d'));
        $endDate = $request->input('end_date', now()->endOfMonth()->format('Y-m-d'));

        $purchaseOrders = PurchaseOrder::with('supplier')
            ->whereBetween('order_date', [$startDate, $endDate])
            ->orderBy('order_date', 'desc')
            ->get()
            ->map(function ($po) {
                return [
                    'po_number' => $po->po_number,
                    'order_date' => $po->order_date->format('d/m/Y'),
                    'supplier_name' => $po->supplier->name,
                    'status' => $po->status,
                    'grand_total' => $po->grand_total,
                ];
            });

        $totalPurchases = $purchaseOrders->sum('grand_total');
        $completedOrders = $purchaseOrders->where('status', 'Received')->count();

        return Inertia::render('laporan/purchases', [
            'purchaseOrders' => $purchaseOrders,
            'totalPurchases' => $totalPurchases,
            'completedOrders' => $completedOrders,
            'startDate' => $startDate,
            'endDate' => $endDate,
        ]);
    }

    /**
     * Production Report
     */
    public function production(Request $request): Response
    {
        $startDate = $request->input('start_date', now()->startOfMonth()->format('Y-m-d'));
        $endDate = $request->input('end_date', now()->endOfMonth()->format('Y-m-d'));

        $workOrders = WorkOrder::whereBetween('target_completion_date', [$startDate, $endDate])
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($wo) {
                return [
                    'wo_number' => $wo->wo_number,
                    'product_name' => $wo->product_name,
                    'quantity_to_produce' => $wo->quantity_to_produce,
                    'quantity_completed' => $wo->quantity_completed,
                    'target_date' => $wo->target_completion_date->format('d/m/Y'),
                    'actual_date' => $wo->actual_completion_date?->format('d/m/Y'),
                    'status' => $wo->status,
                    'completion_rate' => $wo->quantity_to_produce > 0 
                        ? ($wo->quantity_completed / $wo->quantity_to_produce * 100) 
                        : 0,
                ];
            });

        $totalPlanned = $workOrders->sum('quantity_to_produce');
        $totalCompleted = $workOrders->sum('quantity_completed');
        $completionRate = $totalPlanned > 0 ? ($totalCompleted / $totalPlanned * 100) : 0;

        return Inertia::render('laporan/production', [
            'workOrders' => $workOrders,
            'totalPlanned' => $totalPlanned,
            'totalCompleted' => $totalCompleted,
            'completionRate' => round($completionRate, 2),
            'startDate' => $startDate,
            'endDate' => $endDate,
        ]);
    }

    /**
     * Sales Report
     */
    public function sales(Request $request): Response
    {
        $startDate = $request->input('start_date', now()->startOfMonth()->format('Y-m-d'));
        $endDate = $request->input('end_date', now()->endOfMonth()->format('Y-m-d'));

        $deliveryOrders = DeliveryOrder::with('customer')
            ->whereBetween('created_at', [$startDate, $endDate])
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($do) {
                return [
                    'do_number' => $do->do_number,
                    'delivery_date' => $do->created_at->format('d/m/Y'),
                    'customer_name' => $do->customer->name,
                    'status' => $do->status,
                    'grand_total' => $do->total_amount,
                    'profit' => $do->total_amount - $do->total_cost,
                ];
            });

        $totalRevenue = $deliveryOrders->sum('grand_total');
        $totalProfit = $deliveryOrders->sum('profit');
        $totalOrders = $deliveryOrders->count();

        return Inertia::render('laporan/sales', [
            'deliveryOrders' => $deliveryOrders,
            'totalRevenue' => $totalRevenue,
            'totalProfit' => $totalProfit,
            'totalOrders' => $totalOrders,
            'startDate' => $startDate,
            'endDate' => $endDate,
        ]);
    }

    /**
     * Profit Report
     */
    public function profit(Request $request): Response
    {
        $startDate = $request->input('start_date', now()->startOfMonth()->format('Y-m-d'));
        $endDate = $request->input('end_date', now()->endOfMonth()->format('Y-m-d'));

        // Get profit data per product from delivery order items
        $profitData = DB::table('delivery_order_items')
            ->join('delivery_orders', 'delivery_order_items.delivery_order_id', '=', 'delivery_orders.id')
            ->whereBetween('delivery_orders.created_at', [$startDate, $endDate])
            ->where('delivery_orders.status', '!=', 'Cancelled')
            ->groupBy('delivery_order_items.product_name')
            ->selectRaw('
                product_name,
                SUM(quantity) as total_sold,
                SUM(subtotal) as revenue,
                SUM(unit_cost * quantity) as cost,
                SUM(subtotal - (unit_cost * quantity)) as profit,
                (SUM(subtotal - (unit_cost * quantity)) / SUM(subtotal) * 100) as profit_margin
            ')
            ->orderByDesc('revenue')
            ->get()
            ->map(function ($item) {
                return [
                    'product_name' => $item->product_name,
                    'total_sold' => $item->total_sold,
                    'revenue' => $item->revenue,
                    'cost' => $item->cost,
                    'profit' => $item->profit,
                    'profit_margin' => $item->profit_margin ?? 0,
                ];
            });

        $totalRevenue = $profitData->sum('revenue');
        $totalCost = $profitData->sum('cost');
        $totalProfit = $profitData->sum('profit');
        $profitMargin = $totalRevenue > 0 ? (($totalProfit / $totalRevenue) * 100) : 0;

        return Inertia::render('laporan/profit', [
            'profitData' => $profitData,
            'totalRevenue' => $totalRevenue,
            'totalCost' => $totalCost,
            'totalProfit' => $totalProfit,
            'profitMargin' => $profitMargin,
            'startDate' => $startDate,
            'endDate' => $endDate,
        ]);
    }

    /**
     * Export Inventory Report to PDF
     */
    public function inventoryPdf()
    {
        $materials = Material::orderBy('name')->get();
        $totalValue = $materials->sum(function ($m) {
            return $m->current_stock * $m->price_per_unit;
        });

        $pdf = \PDF::loadView('pdf.inventory-report', [
            'materials' => $materials,
            'totalValue' => $totalValue,
            'generatedAt' => now(),
        ]);

        return $pdf->download('Inventory-Report-' . now()->format('Ymd') . '.pdf');
    }

    /**
     * Export Sales Report to PDF
     */
    public function salesPdf(Request $request)
    {
        $startDate = $request->input('start_date', now()->startOfMonth()->format('Y-m-d'));
        $endDate = $request->input('end_date', now()->endOfMonth()->format('Y-m-d'));

        $deliveryOrders = DeliveryOrder::with('customer')
            ->whereBetween('created_at', [$startDate, $endDate])
            ->orderBy('created_at', 'desc')
            ->get();

        $totalRevenue = $deliveryOrders->sum('total_amount');
        $totalProfit = $deliveryOrders->sum(function ($do) {
            return $do->total_amount - $do->total_cost;
        });

        $pdf = \PDF::loadView('pdf.sales-report', [
            'deliveryOrders' => $deliveryOrders,
            'totalRevenue' => $totalRevenue,
            'totalProfit' => $totalProfit,
            'startDate' => $startDate,
            'endDate' => $endDate,
            'generatedAt' => now(),
        ]);

        return $pdf->download('Sales-Report-' . now()->format('Ymd') . '.pdf');
    }
}
