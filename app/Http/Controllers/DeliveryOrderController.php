<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDeliveryOrderRequest;
use App\Http\Requests\UpdateDeliveryOrderRequest;
use App\Models\Customer;
use App\Models\DeliveryOrder;
use App\Models\DeliveryOrderItem;
use App\Models\FinishedGood;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class DeliveryOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $deliveryOrders = DeliveryOrder::with(['customer', 'items'])
            ->latest()
            ->get()
            ->map(function ($do) {
                return [
                    'id' => $do->id,
                    'do_number' => $do->do_number,
                    'customer_name' => $do->customer->name,
                    'expected_delivery_date' => $do->expected_delivery_date?->format('d/m/Y'),
                    'status' => $do->status,
                    'total_amount' => $do->total_amount,
                    'items_count' => $do->items->count(),
                ];
            });

        return Inertia::render('penjualan/delivery-orders/index', [
            'deliveryOrders' => $deliveryOrders,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $customers = Customer::where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name', 'code', 'city']);

        // Get finished goods with available stock
        $finishedGoods = FinishedGood::with('workOrder')
            ->where('quantity_available', '>', 0)
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($fg) {
                return [
                    'id' => $fg->id,
                    'product_name' => $fg->product_name,
                    'wo_number' => $fg->workOrder->wo_number,
                    'quantity_available' => $fg->quantity_available,
                    'unit_cost' => $fg->unit_cost,
                    'production_date' => $fg->production_date->format('d/m/Y'),
                    'storage_location' => $fg->storage_location,
                ];
            });

        $statuses = ['Prepared', 'In Transit', 'Delivered'];

        return Inertia::render('penjualan/delivery-orders/create', [
            'customers' => $customers,
            'finishedGoods' => $finishedGoods,
            'statuses' => $statuses,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDeliveryOrderRequest $request): RedirectResponse
    {
        DB::transaction(function () use ($request) {
            // Generate DO number
            $date = now()->format('Ymd');
            $lastDO = DeliveryOrder::whereDate('created_at', now()->toDateString())
                ->orderBy('id', 'desc')
                ->first();

            $sequence = $lastDO ? (int) substr($lastDO->do_number, -3) + 1 : 1;
            $doNumber = sprintf('DO-%s-%03d', $date, $sequence);

            // Calculate totals
            $totalAmount = 0;
            $totalCost = 0;

            foreach ($request->items as $item) {
                $finishedGood = FinishedGood::findOrFail($item['finished_good_id']);

                // Check stock availability
                if ($finishedGood->quantity_available < $item['quantity']) {
                    throw new \Exception("Stok produk {$item['product_name']} tidak mencukupi. Stok tersedia: {$finishedGood->quantity_available}");
                }

                $subtotal = $item['quantity'] * $item['unit_price'];
                $totalAmount += $subtotal;
                $totalCost += $item['quantity'] * $finishedGood->unit_cost;
            }

            // Create DO
            $do = DeliveryOrder::create([
                'do_number' => $doNumber,
                'customer_id' => $request->customer_id,
                'sales_order_reference' => $request->sales_order_reference,
                'shipment_method' => $request->shipment_method,
                'container_number' => $request->container_number,
                'shipping_line' => $request->shipping_line,
                'expected_delivery_date' => $request->expected_delivery_date,
                'status' => $request->status ?? 'Prepared',
                'total_amount' => $totalAmount,
                'total_cost' => $totalCost,
                'notes' => $request->notes,
                'created_by' => auth()->id(),
            ]);

            // Create DO items and decrease finished goods stock
            foreach ($request->items as $item) {
                $finishedGood = FinishedGood::findOrFail($item['finished_good_id']);

                DeliveryOrderItem::create([
                    'delivery_order_id' => $do->id,
                    'finished_good_id' => $item['finished_good_id'],
                    'product_name' => $item['product_name'],
                    'quantity' => $item['quantity'],
                    'unit' => $item['unit'],
                    'unit_price' => $item['unit_price'],
                    'unit_cost' => $finishedGood->unit_cost,
                    'subtotal' => $item['quantity'] * $item['unit_price'],
                ]);

                // Decrease finished goods stock
                $finishedGood->decrement('quantity_available', $item['quantity']);
            }
        });

        return redirect()->route('delivery-orders.index')
            ->with('success', 'Delivery Order berhasil dibuat.');
    }

    /**
     * Display the specified resource.
     */
    public function show(DeliveryOrder $deliveryOrder): Response
    {
        $deliveryOrder->load(['customer', 'items.finishedGood', 'createdBy']);

        $grossProfit = $deliveryOrder->total_amount - $deliveryOrder->total_cost;
        $profitMargin = $deliveryOrder->total_amount > 0 
            ? ($grossProfit / $deliveryOrder->total_amount) * 100 
            : 0;

        return Inertia::render('penjualan/delivery-orders/show', [
            'deliveryOrder' => [
                'id' => $deliveryOrder->id,
                'do_number' => $deliveryOrder->do_number,
                'customer' => [
                    'id' => $deliveryOrder->customer->id,
                    'name' => $deliveryOrder->customer->name,
                    'code' => $deliveryOrder->customer->code,
                    'address' => $deliveryOrder->customer->address,
                    'city' => $deliveryOrder->customer->city,
                    'country' => $deliveryOrder->customer->country,
                    'phone' => $deliveryOrder->customer->phone,
                ],
                'sales_order_reference' => $deliveryOrder->sales_order_reference,
                'shipment_method' => $deliveryOrder->shipment_method,
                'container_number' => $deliveryOrder->container_number,
                'shipping_line' => $deliveryOrder->shipping_line,
                'expected_delivery_date' => $deliveryOrder->expected_delivery_date?->format('d/m/Y'),
                'actual_delivery_date' => $deliveryOrder->actual_delivery_date?->format('d/m/Y'),
                'status' => $deliveryOrder->status,
                'total_amount' => $deliveryOrder->total_amount,
                'total_cost' => $deliveryOrder->total_cost,
                'gross_profit' => $grossProfit,
                'profit_margin' => $profitMargin,
                'notes' => $deliveryOrder->notes,
                'created_by' => $deliveryOrder->createdBy?->name,
                'created_at' => $deliveryOrder->created_at->format('d/m/Y H:i'),
                'items' => $deliveryOrder->items->map(function ($item) {
                    return [
                        'id' => $item->id,
                        'product_name' => $item->product_name,
                        'quantity' => $item->quantity,
                        'unit' => $item->unit,
                        'unit_price' => $item->unit_price,
                        'unit_cost' => $item->unit_cost,
                        'subtotal' => $item->subtotal,
                        'profit' => ($item->unit_price - $item->unit_cost) * $item->quantity,
                    ];
                }),
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DeliveryOrder $deliveryOrder): Response
    {
        $customers = Customer::where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name', 'code']);

        $statuses = ['Prepared', 'In Transit', 'Delivered'];

        return Inertia::render('penjualan/delivery-orders/edit', [
            'deliveryOrder' => [
                'id' => $deliveryOrder->id,
                'do_number' => $deliveryOrder->do_number,
                'customer_id' => $deliveryOrder->customer_id,
                'sales_order_reference' => $deliveryOrder->sales_order_reference,
                'shipment_method' => $deliveryOrder->shipment_method,
                'container_number' => $deliveryOrder->container_number,
                'shipping_line' => $deliveryOrder->shipping_line,
                'expected_delivery_date' => $deliveryOrder->expected_delivery_date?->format('Y-m-d'),
                'actual_delivery_date' => $deliveryOrder->actual_delivery_date?->format('Y-m-d'),
                'status' => $deliveryOrder->status,
                'notes' => $deliveryOrder->notes,
            ],
            'customers' => $customers,
            'statuses' => $statuses,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDeliveryOrderRequest $request, DeliveryOrder $deliveryOrder): RedirectResponse
    {
        $updateData = $request->validated();

        // If status is changed to Delivered, set actual delivery date to today if not set
        if ($request->status === 'Delivered' && !$request->actual_delivery_date) {
            $updateData['actual_delivery_date'] = now()->toDateString();
        }

        $deliveryOrder->update($updateData);

        return redirect()->route('delivery-orders.index')
            ->with('success', 'Delivery Order berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DeliveryOrder $deliveryOrder): RedirectResponse
    {
        // Only allow deletion if status is still Prepared
        if ($deliveryOrder->status !== 'Prepared') {
            return back()->with('error', 'Hanya Delivery Order dengan status "Prepared" yang dapat dihapus.');
        }

        DB::transaction(function () use ($deliveryOrder) {
            // Return stock to finished goods
            foreach ($deliveryOrder->items as $item) {
                if ($item->finishedGood) {
                    $item->finishedGood->increment('quantity_available', $item->quantity);
                }
            }

            // Delete delivery order (items will be cascade deleted)
            $deliveryOrder->delete();
        });

        return redirect()->route('delivery-orders.index')
            ->with('success', 'Delivery Order berhasil dihapus dan stok dikembalikan.');
    }

    /**
     * Generate PDF for the delivery order.
     */
    public function generatePdf(DeliveryOrder $deliveryOrder)
    {
        $deliveryOrder->load(['customer', 'items.finishedGood', 'createdBy']);

        $grossProfit = $deliveryOrder->total_amount - $deliveryOrder->total_cost;

        $pdf = \PDF::loadView('pdf.delivery-order', [
            'deliveryOrder' => $deliveryOrder,
            'grossProfit' => $grossProfit,
        ]);

        return $pdf->download('DO-' . $deliveryOrder->do_number . '.pdf');
    }
}
