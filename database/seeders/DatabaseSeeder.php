<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\DeliveryOrder;
use App\Models\DeliveryOrderItem;
use App\Models\FinishedGood;
use App\Models\GoodsReceipt;
use App\Models\GoodsReceiptItem;
use App\Models\Material;
use App\Models\MaterialIssue;
use App\Models\PurchaseOrder;
use App\Models\PurchaseOrderItem;
use App\Models\StockAdjustment;
use App\Models\Supplier;
use App\Models\User;
use App\Models\WorkOrder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        $admin = User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@posteak.com',
        ]);

        // Create master data
        $suppliers = Supplier::factory(10)->create();
        $materials = Material::factory(30)->create();
        $customers = Customer::factory(15)->create();
        $products = \App\Models\Product::factory(20)->create();

        // Create purchase orders with items
        $suppliers->each(function ($supplier) use ($materials) {
            PurchaseOrder::factory(3)->create([
                'supplier_id' => $supplier->id,
            ])->each(function ($po) use ($materials) {
                // Add 3-5 items to each PO
                $itemCount = rand(3, 5);
                $subtotal = 0;

                for ($i = 0; $i < $itemCount; $i++) {
                    $material = $materials->random();
                    $quantity = rand(10, 100);
                    $unitPrice = $material->price_per_unit;
                    $itemSubtotal = $quantity * $unitPrice;
                    $subtotal += $itemSubtotal;

                    PurchaseOrderItem::create([
                        'purchase_order_id' => $po->id,
                        'material_id' => $material->id,
                        'quantity' => $quantity,
                        'unit_price' => $unitPrice,
                        'subtotal' => $itemSubtotal,
                    ]);
                }

                // Update PO totals
                $po->update([
                    'subtotal' => $subtotal,
                    'grand_total' => $subtotal,
                ]);

                // Create goods receipt for some POs
                if (in_array($po->status, ['Received', 'Partially Received'])) {
                    $gr = GoodsReceipt::create([
                        'gr_number' => 'GR-'.now()->format('Ymd').'-'.str_pad(rand(1, 999), 3, '0', STR_PAD_LEFT),
                        'purchase_order_id' => $po->id,
                        'receipt_date' => now()->subDays(rand(1, 30)),
                        'received_by' => 'Warehouse Staff',
                    ]);

                    // Create GR items and update stock
                    $po->items->each(function ($item) use ($gr, $po) {
                        $qtyReceived = $po->status === 'Received' ? $item->quantity : rand(1, $item->quantity - 1);

                        GoodsReceiptItem::create([
                            'goods_receipt_id' => $gr->id,
                            'purchase_order_item_id' => $item->id,
                            'material_id' => $item->material_id,
                            'quantity_received' => $qtyReceived,
                        ]);

                        // Update material stock
                        $item->material->increment('current_stock', $qtyReceived);
                        $item->update(['quantity_received' => $qtyReceived]);
                    });
                }
            });
        });

        // Create stock adjustments
        StockAdjustment::factory(10)->create([
            'material_id' => fn () => $materials->random()->id,
        ]);

        // Create work orders with material issues and finished goods
        WorkOrder::factory(15)->create()->each(function ($wo) use ($materials) {
            // Create material issues for each WO
            $materialCount = rand(3, 6);
            $totalCost = 0;

            for ($i = 0; $i < $materialCount; $i++) {
                $material = $materials->random();
                $qtyIssued = rand(5, 20);

                MaterialIssue::create([
                    'work_order_id' => $wo->id,
                    'material_id' => $material->id,
                    'quantity_issued' => $qtyIssued,
                    'issued_date' => now()->subDays(rand(1, 30)),
                    'issued_by' => 'Production Staff',
                ]);

                $totalCost += $qtyIssued * $material->price_per_unit;

                // Decrease material stock
                $material->decrement('current_stock', $qtyIssued);
            }

            // Create finished goods for completed WOs
            if ($wo->status === 'Completed') {
                $qtyCompleted = $wo->quantity_to_produce;
                $unitCost = $totalCost / $qtyCompleted;

                FinishedGood::create([
                    'work_order_id' => $wo->id,
                    'product_name' => $wo->product_name,
                    'quantity_completed' => $qtyCompleted,
                    'quantity_available' => $qtyCompleted,
                    'unit_cost' => $unitCost,
                    'production_date' => now()->subDays(rand(1, 20)),
                    'storage_location' => 'Warehouse A-'.rand(1, 10),
                ]);

                $wo->update([
                    'quantity_completed' => $qtyCompleted,
                    'actual_completion_date' => now()->subDays(rand(1, 20)),
                ]);
            }
        });

        // Create delivery orders
        $finishedGoods = FinishedGood::all();

        $customers->each(function ($customer) use ($finishedGoods) {
            DeliveryOrder::factory(1)->create([
                'customer_id' => $customer->id,
            ])->each(function ($do) use ($finishedGoods) {
                $availableGoods = $finishedGoods->where('quantity_available', '>', 0);

                if ($availableGoods->isEmpty()) {
                    $do->delete();

                    return;
                }

                $itemCount = min(rand(1, 3), $availableGoods->count());
                $totalAmount = 0;
                $totalCost = 0;

                for ($i = 0; $i < $itemCount; $i++) {
                    $availableGoods = $finishedGoods->where('quantity_available', '>', 0);

                    if ($availableGoods->isEmpty()) {
                        break;
                    }

                    $fg = $availableGoods->random();
                    $quantity = rand(1, min(3, $fg->quantity_available));
                    $unitPrice = $fg->unit_cost * 1.5; // 50% markup
                    $subtotal = $quantity * $unitPrice;

                    DeliveryOrderItem::create([
                        'delivery_order_id' => $do->id,
                        'finished_good_id' => $fg->id,
                        'product_name' => $fg->product_name,
                        'quantity' => $quantity,
                        'unit' => 'pcs',
                        'unit_price' => $unitPrice,
                        'unit_cost' => $fg->unit_cost,
                        'subtotal' => $subtotal,
                    ]);

                    $totalAmount += $subtotal;
                    $totalCost += $quantity * $fg->unit_cost;

                    // Decrease finished goods stock
                    $fg->decrement('quantity_available', $quantity);
                }

                // Delete DO if no items were created
                if ($totalAmount == 0) {
                    $do->delete();
                } else {
                    $do->update([
                        'total_amount' => $totalAmount,
                        'total_cost' => $totalCost,
                    ]);
                }
            });
        });
    }
}
