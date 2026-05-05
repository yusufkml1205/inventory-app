<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePurchaseOrderRequest;
use App\Http\Requests\UpdatePurchaseOrderRequest;
use App\Models\Material;
use App\Models\PurchaseOrder;
use App\Models\PurchaseOrderItem;
use App\Models\Supplier;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class PurchaseOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $purchaseOrders = PurchaseOrder::with(['supplier', 'items'])
            ->latest()
            ->get()
            ->map(function ($po) {
                return [
                    'id' => $po->id,
                    'po_number' => $po->po_number,
                    'supplier_name' => $po->supplier->name,
                    'order_date' => $po->order_date->format('d/m/Y'),
                    'status' => $po->status,
                    'grand_total' => $po->grand_total,
                    'items_count' => $po->items->count(),
                ];
            });

        return Inertia::render('transaksi/purchase-orders/index', [
            'purchaseOrders' => $purchaseOrders,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $suppliers = Supplier::where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name', 'code']);

        $materials = Material::where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name', 'code', 'unit', 'price_per_unit']);

        $statuses = ['Draft', 'Sent to Supplier', 'In Transit', 'Partially Received', 'Received', 'Cancelled'];

        return Inertia::render('transaksi/purchase-orders/create', [
            'suppliers' => $suppliers,
            'materials' => $materials,
            'statuses' => $statuses,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePurchaseOrderRequest $request): RedirectResponse
    {
        DB::transaction(function () use ($request) {
            // Generate PO number
            $date = now()->format('Ymd');
            $lastPO = PurchaseOrder::whereDate('created_at', now()->toDateString())
                ->orderBy('id', 'desc')
                ->first();

            $sequence = $lastPO ? (int) substr($lastPO->po_number, -3) + 1 : 1;
            $poNumber = sprintf('PO-%s-%03d', $date, $sequence);

            // Calculate totals
            $subtotal = 0;
            foreach ($request->items as $item) {
                $subtotal += $item['quantity'] * $item['unit_price'];
            }

            // Create PO
            $po = PurchaseOrder::create([
                'po_number' => $poNumber,
                'supplier_id' => $request->supplier_id,
                'order_date' => $request->order_date,
                'status' => $request->status,
                'subtotal' => $subtotal,
                'grand_total' => $subtotal,
                'notes' => $request->notes,
                'created_by' => auth()->id(),
            ]);

            // Create PO items
            foreach ($request->items as $item) {
                PurchaseOrderItem::create([
                    'purchase_order_id' => $po->id,
                    'material_id' => $item['material_id'],
                    'quantity' => $item['quantity'],
                    'unit_price' => $item['unit_price'],
                    'subtotal' => $item['quantity'] * $item['unit_price'],
                ]);
            }
        });

        return redirect()->route('transaksi.purchase-orders.index')
            ->with('success', 'Purchase Order berhasil dibuat.');
    }

    /**
     * Display the specified resource.
     */
    public function show(PurchaseOrder $purchaseOrder): Response
    {
        $purchaseOrder->load(['supplier', 'items.material', 'createdBy', 'goodsReceipts']);

        return Inertia::render('transaksi/purchase-orders/show', [
            'purchaseOrder' => [
                'id' => $purchaseOrder->id,
                'po_number' => $purchaseOrder->po_number,
                'supplier' => [
                    'id' => $purchaseOrder->supplier->id,
                    'name' => $purchaseOrder->supplier->name,
                    'code' => $purchaseOrder->supplier->code,
                    'address' => $purchaseOrder->supplier->address,
                    'phone' => $purchaseOrder->supplier->phone,
                ],
                'order_date' => $purchaseOrder->order_date->format('d/m/Y'),
                'status' => $purchaseOrder->status,
                'subtotal' => $purchaseOrder->subtotal,
                'grand_total' => $purchaseOrder->grand_total,
                'notes' => $purchaseOrder->notes,
                'created_by' => $purchaseOrder->createdBy?->name,
                'created_at' => $purchaseOrder->created_at->format('d/m/Y H:i'),
                'items' => $purchaseOrder->items->map(function ($item) {
                    return [
                        'id' => $item->id,
                        'material_id' => $item->material_id,
                        'material_code' => $item->material->code,
                        'material_name' => $item->material->name,
                        'unit' => $item->material->unit,
                        'quantity' => $item->quantity,
                        'unit_price' => $item->unit_price,
                        'subtotal' => $item->subtotal,
                        'quantity_received' => $item->quantity_received,
                    ];
                }),
                'goods_receipts' => $purchaseOrder->goodsReceipts->map(function ($gr) {
                    return [
                        'id' => $gr->id,
                        'gr_number' => $gr->gr_number,
                        'receipt_date' => $gr->receipt_date->format('d/m/Y'),
                        'items_count' => $gr->items->count(),
                    ];
                }),
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PurchaseOrder $purchaseOrder): Response
    {
        $suppliers = Supplier::where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name', 'code']);

        $materials = Material::where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name', 'code', 'unit', 'price_per_unit']);

        $statuses = ['Draft', 'Sent to Supplier', 'In Transit', 'Partially Received', 'Received', 'Cancelled'];

        $purchaseOrder->load('items.material');

        return Inertia::render('transaksi/purchase-orders/edit', [
            'purchaseOrder' => [
                'id' => $purchaseOrder->id,
                'po_number' => $purchaseOrder->po_number,
                'supplier_id' => $purchaseOrder->supplier_id,
                'order_date' => $purchaseOrder->order_date->format('Y-m-d'),
                'status' => $purchaseOrder->status,
                'notes' => $purchaseOrder->notes,
                'items' => $purchaseOrder->items->map(function ($item) {
                    return [
                        'id' => $item->id,
                        'material_id' => $item->material_id,
                        'quantity' => $item->quantity,
                        'unit_price' => $item->unit_price,
                    ];
                }),
            ],
            'suppliers' => $suppliers,
            'materials' => $materials,
            'statuses' => $statuses,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePurchaseOrderRequest $request, PurchaseOrder $purchaseOrder): RedirectResponse
    {
        DB::transaction(function () use ($request, $purchaseOrder) {
            // Calculate totals
            $subtotal = 0;
            foreach ($request->items as $item) {
                $subtotal += $item['quantity'] * $item['unit_price'];
            }

            // Update PO
            $purchaseOrder->update([
                'supplier_id' => $request->supplier_id,
                'order_date' => $request->order_date,
                'status' => $request->status,
                'subtotal' => $subtotal,
                'grand_total' => $subtotal,
                'notes' => $request->notes,
            ]);

            // Delete old items
            $purchaseOrder->items()->delete();

            // Create new items
            foreach ($request->items as $item) {
                PurchaseOrderItem::create([
                    'purchase_order_id' => $purchaseOrder->id,
                    'material_id' => $item['material_id'],
                    'quantity' => $item['quantity'],
                    'unit_price' => $item['unit_price'],
                    'subtotal' => $item['quantity'] * $item['unit_price'],
                ]);
            }
        });

        return redirect()->route('transaksi.purchase-orders.index')
            ->with('success', 'Purchase Order berhasil diupdate.');
    }

    /**
     * Remove the specified resource from storage.
     */
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PurchaseOrder $purchaseOrder): RedirectResponse
    {
        $purchaseOrder->delete();

        return redirect()->route('transaksi.purchase-orders.index')
            ->with('success', 'Purchase Order berhasil dihapus.');
    }

    /**
     * Generate PDF for the purchase order.
     */
    public function generatePdf(PurchaseOrder $purchaseOrder)
    {
        $purchaseOrder->load(['supplier', 'items.material', 'createdBy']);

        $pdf = \PDF::loadView('pdf.purchase-order', [
            'purchaseOrder' => $purchaseOrder,
        ]);

        return $pdf->download('PO-' . $purchaseOrder->po_number . '.pdf');
    }
}
