<?php

namespace Database\Factories;

use App\Models\Material;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StockAdjustment>
 */
class StockAdjustmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $adjustmentDate = $this->faker->dateTimeBetween('-2 months', 'now');
        $adjNumber = 'ADJ-'.$adjustmentDate->format('Ymd').'-'.str_pad($this->faker->unique()->numberBetween(1, 999), 3, '0', STR_PAD_LEFT);

        $transactionTypes = ['Stock In', 'Stock Out'];
        $reasons = ['Sample', 'Rework', 'Waste', 'Damaged', 'Stock Opname Correction'];

        return [
            'adjustment_number' => $adjNumber,
            'material_id' => Material::factory(),
            'transaction_type' => $this->faker->randomElement($transactionTypes),
            'quantity' => $this->faker->numberBetween(1, 50),
            'reason' => $this->faker->randomElement($reasons),
            'notes' => $this->faker->optional()->sentence(),
            'supporting_document' => null,
            'adjusted_by' => $this->faker->name(),
            'adjustment_date' => $adjustmentDate,
        ];
    }
}
