<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\WorkOrder>
 */
class WorkOrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $createdDate = $this->faker->dateTimeBetween('-2 months', 'now');
        $woNumber = 'WO-'.$createdDate->format('Ymd').'-'.str_pad($this->faker->unique()->numberBetween(1, 999), 3, '0', STR_PAD_LEFT);

        $productNames = ['Dining Table Set', 'Coffee Table', 'Wardrobe', 'Kitchen Cabinet', 'TV Stand', 'Bookshelf'];
        $statuses = ['Planning', 'In Progress', 'Completed', 'Cancelled'];

        return [
            'wo_number' => $woNumber,
            'product_name' => $this->faker->randomElement($productNames),
            'quantity_to_produce' => $this->faker->numberBetween(5, 50),
            'quantity_completed' => 0,
            'target_completion_date' => $this->faker->dateTimeBetween('now', '+2 months'),
            'actual_completion_date' => null,
            'reference' => $this->faker->optional()->bothify('REF-####'),
            'notes' => $this->faker->optional()->sentence(),
            'status' => $this->faker->randomElement($statuses),
            'created_by' => User::factory(),
        ];
    }
}
