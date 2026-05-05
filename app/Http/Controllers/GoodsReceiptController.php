<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGoodsReceiptRequest;
use App\Models\GoodsReceipt;
use App\Models\GoodsReceiptItem;
use App\Models\Material;
use App\Models\PurchaseOrder;
use App\Models\PurchaseOrderItem;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class GoodsReceiptController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $goodsReceipts = GoodsReceipt::with(['purchaseOrder.supplier', 'items'])
            ->latest()
            ->get()
            ->map(function ($gr) {
                return [
                    'id' => $gr->id,
                    'gr_number' => $gr->gr_number,
                    'po_number' => $gr->purchaseOrder->po_number,
                    'supplier_name' => $gr->purchaseOrder->supplier->name,
                    'receipt_date' => $gr->receipt_date->format('d/m/Y'),
                    'received_by' => $gr->received_by,
                    'items_count' => $gr->items->count(),
                ];
            });

        return Inertia::render('transaksi/goods-receipts/index', [
            'goodsReceipts' => $goodsReceipts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        // Get POs that are not fully received
        $purchaseOrders = PurchaseOrder::whereIn('status', [
            'Sent to Supplier',
            'In Transit',
            'Partially Received',
        ])
            ->with(['supplier', 'items.material'])
            ->latest()
            ->get()
            ->map(function ($po) {
                return [
                    'id' => $po->id,
                    'po_number' => $po->po_number,
                    'supplier_name' => $po->supplier->name,
                    'order_date' => $po->order_date->format('d/m/Y'),
                    'status' => $po->status,
                    'items' => $po->items->map(function ($item) {
                        return [
                            'id' => $item->id,
                            'material_id' => $item->material_id,
                            'material_code' => $item->material->code,
                            'material_name' => $item->material->name,
                            'unit' => $item->material->unit,
                            'quantity' => $item->quantity,
                            'quantity_received' => $item->quantity_received,
                            'remaining' => $item->quantity - $item->quantity_received,
                        ];
                    }),
                ];
            });

        return Inertia::render('transaksi/goods-receipts/create', [
            'purchaseOrders' => $purchaseOrders,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGoodsReceiptRequest $request): RedirectResponse
    {
        DB::transaction(function () use ($request) {
            // Generate GR number
            $date = now()->format('Ymd');
            $lastGR = GoodsReceipt::whereDate('created_at', now()->toDateString())
                ->orderBy('id', 'desc')
                ->first();

            $sequence = $lastGR ? (int) substr($lastGR->gr_number, -3) + 1 : 1;
            $grNumber = sprintf('GR-%s-%03d', $date, $sequence);

            // Create GR
            $gr = GoodsReceipt::create([
                'gr_number' => $grNumber,
                'purchase_order_id' => $request->purchase_order_id,
                'receipt_date' => $request->receipt_date,
                'received_by' => $request->received_by ?? auth()->user()->name,
                'notes' => $request->notes,
            ]);

            // Create GR items and update material stock
            foreach ($request->items as $item) {
                $poItem = PurchaseOrderItem::findOrFail($item['purchase_order_item_id']);

                GoodsReceiptItem::create([
                    'goods_receipt_id' => $gr->id,
                    'purchase_order_item_id' => $poItem->id,
                    'material_id' => $poItem->material_id,
                    'quantity_received' => $item['quantity_received'],
                ]);

                // Update PO item quantity_received
                $poItem->increment('quantity_received', $item['quantity_received']);

                // Update material stock
                $material = Material::findOrFail($poItem->material_id);
                $material->increment('current_stock', $item['quantity_received']);
            }

            // Update PO status
            $po = PurchaseOrder::findOrFail($request->purchase_order_id);
            $allItemsFullyReceived = $po->items->every(function ($item) {
                return $item->quantity_received >= $item->quantity;
            });

            if ($allItemsFullyReceived) {
                $po->update(['status' => 'Received']);
            } else {
                $po->update(['status' => 'Partially Received']);
            }
        });

        return redirect()->route('transaksi.goods-receipts.index')
            ->with('success', 'Goods Receipt berhasil dicatat.');
    }

    /**
     * Display the specified resource.
     */
    public function show(GoodsReceipt $goodsReceipt): Response
    {
        $goodsReceipt->load(['purchaseOrder.supplier', 'items.material', 'items.purchaseOrderItem']);

        return Inertia::render('transaksi/goods-receipts/show', [
            'goodsReceipt' => [
                'id' => $goodsReceipt->id,
                'gr_number' => $goodsReceipt->gr_number,
                'po_number' => $goodsReceipt->purchaseOrder->po_number,
                'supplier' => [
                    'name' => $goodsReceipt->purchaseOrder->supplier->name,
                    'code' => $goodsReceipt->purchaseOrder->supplier->code,
                ],
                'receipt_date' => $goodsReceipt->receipt_date->format('d/m/Y'),
                'received_by' => $goodsReceipt->received_by,
                'notes' => $goodsReceipt->notes,
                'created_at' => $goodsReceipt->created_at->format('d/m/Y H:i'),
                'items' => $goodsReceipt->items->map(function ($item) {
                    return [
                        'material_code' => $item->material->code,
                        'material_name' => $item->material->name,
                        'unit' => $item->material->unit,
                        'quantity_ordered' => $item->purchaseOrderItem->quantity,
                        'quantity_received' => $item->quantity_received,
                    ];
                }),
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // Goods receipts typically should not be edited
        abort(404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(string $id)
    {
        // Goods receipts typically should not be updated
        abort(404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(GoodsReceipt $goodsReceipt): RedirectResponse
    {
        DB::transaction(function () use ($goodsReceipt) {
            // Reverse stock updates
            foreach ($goodsReceipt->items as $item) {
                $material = Material::findOrFail($item->material_id);
                $material->decrement('current_stock', $item->quantity_received);

                $poItem = PurchaseOrderItem::findOrFail($item->purchase_order_item_id);
                $poItem->decrement('quantity_received', $item->quantity_received);
            }

            // Update PO status
            $po = $goodsReceipt->purchaseOrder;
            $allItemsFullyReceived = $po->items->every(function ($item) {
                return $item->quantity_received >= $item->quantity;
            });

            if ($allItemsFullyReceived) {
                $po->update(['status' => 'Received']);
            } else {
                $hasAnyReceived = $po->items->some(function ($item) {
                    return $item->quantity_received > 0;
                });
                $po->update(['status' => $hasAnyReceived ? 'Partially Received' : 'In Transit']);
            }

            $goodsReceipt->delete();
        });

        return redirect()->route('transaksi.goods-receipts.index')
            ->with('success', 'Goods Receipt berhasil dihapus.');
    }
}
