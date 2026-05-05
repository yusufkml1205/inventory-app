<?php

namespace Database\Factories;

use App\Models\Supplier;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PurchaseOrder>
 */
class PurchaseOrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $orderDate = $this->faker->dateTimeBetween('-3 months', 'now');
        $poNumber = 'PO-'.$orderDate->format('Ymd').'-'.str_pad($this->faker->unique()->numberBetween(1, 999), 3, '0', STR_PAD_LEFT);

        $statuses = ['Draft', 'Sent to Supplier', 'In Transit', 'Partially Received', 'Received', 'Cancelled'];

        return [
            'po_number' => $poNumber,
            'supplier_id' => Supplier::factory(),
            'order_date' => $orderDate,
            'status' => $this->faker->randomElement($statuses),
            'subtotal' => 0,
            'grand_total' => 0,
            'notes' => $this->faker->optional()->sentence(),
            'created_by' => User::factory(),
        ];
    }
}
