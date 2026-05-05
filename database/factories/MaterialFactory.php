<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Material>
 */
class MaterialFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['Kayu Solid', 'Plywood', 'Hardware', 'Finishing', 'Material Pendukung'];
        $units = ['kg', 'pcs', 'm3', 'liter', 'sheet', 'set'];

        return [
            'code' => 'MAT-'.strtoupper($this->faker->unique()->bothify('####??')),
            'name' => $this->faker->words(3, true),
            'category' => $this->faker->randomElement($categories),
            'unit' => $this->faker->randomElement($units),
            'price_per_unit' => $this->faker->randomFloat(2, 10000, 500000),
            'min_stock' => $this->faker->numberBetween(10, 50),
            'current_stock' => $this->faker->numberBetween(0, 200),
            'description' => $this->faker->sentence(),
            'is_active' => true,
        ];
    }
}
