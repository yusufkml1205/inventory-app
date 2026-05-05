<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DeliveryOrder>
 */
class DeliveryOrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $createdDate = $this->faker->dateTimeBetween('-1 month', 'now');
        $doNumber = 'DO-'.$createdDate->format('Ymd').'-'.str_pad($this->faker->unique()->numberBetween(1, 999), 3, '0', STR_PAD_LEFT);

        $statuses = ['Prepared', 'In Transit', 'Delivered'];

        return [
            'do_number' => $doNumber,
            'customer_id' => Customer::factory(),
            'sales_order_reference' => $this->faker->optional()->bothify('SO-####'),
            'shipment_method' => $this->faker->randomElement(['Sea Freight', 'Air Freight', 'Land Transport']),
            'container_number' => $this->faker->optional()->bothify('CONT-########'),
            'shipping_line' => $this->faker->optional()->company(),
            'expected_delivery_date' => $this->faker->dateTimeBetween('now', '+1 month'),
            'actual_delivery_date' => null,
            'status' => $this->faker->randomElement($statuses),
            'total_amount' => 0,
            'total_cost' => 0,
            'notes' => $this->faker->optional()->sentence(),
            'created_by' => User::factory(),
        ];
    }
}
