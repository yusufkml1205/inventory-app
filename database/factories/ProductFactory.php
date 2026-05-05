<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['Sofa', 'Meja', 'Kursi', 'Lemari', 'Tempat Tidur', 'Cabinet', 'Rak', 'Lainnya'];
        $category = fake()->randomElement($categories);

        $productNames = [
            'Sofa' => ['Sofa Minimalis 3 Seater', 'Sofa L-Shape Modern', 'Sofa Scandinavian', 'Sofa Retro Vintage', 'Sofa Bed Multifungsi'],
            'Meja' => ['Meja Makan Kayu Jati', 'Meja Kantor Minimalis', 'Meja Rias Modern', 'Meja Belajar Anak', 'Coffee Table Industrial'],
            'Kursi' => ['Kursi Makan Kayu', 'Kursi Kantor Ergonomis', 'Kursi Teras Rotan', 'Kursi Santai Oscar', 'Kursi Bar Stool'],
            'Lemari' => ['Lemari Pakaian 3 Pintu', 'Lemari Hias Minimalis', 'Lemari Dapur Kitchen Set', 'Lemari Sliding Modern', 'Wardrobe Kayu Jati'],
            'Tempat Tidur' => ['Tempat Tidur Minimalis Queen', 'Dipan Kayu Jati King Size', 'Ranjang Anak Bertingkat', 'Bed Frame Scandinavian', 'Tempat Tidur Storage'],
            'Cabinet' => ['Cabinet TV Minimalis', 'Filing Cabinet Kantor', 'Display Cabinet Kaca', 'Buffet Cabinet Vintage', 'Shoe Cabinet Modern'],
            'Rak' => ['Rak Buku Kayu', 'Rak Sepatu Minimalis', 'Rak Dinding Floating', 'Rak Serbaguna 5 Tingkat', 'Rak Display Industrial'],
            'Lainnya' => ['Meja Konsol', 'Nakas Modern', 'Bangku Panjang', 'Partisi Ruangan', 'Standing Desk'],
        ];

        $name = fake()->randomElement($productNames[$category]);
        $cost = fake()->numberBetween(500000, 5000000);
        $price = $cost * fake()->randomFloat(2, 1.3, 2.5); // Markup 30%-150%

        return [
            'code' => 'PROD-'.fake()->unique()->numberBetween(1000, 9999),
            'name' => $name,
            'category' => $category,
            'description' => fake()->paragraph(),
            'unit' => fake()->randomElement(['pcs', 'set', 'unit']),
            'price' => round($price, -3), // Round to nearest thousand
            'cost' => $cost,
            'is_active' => fake()->boolean(90), // 90% active
        ];
    }
}
