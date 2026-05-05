<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique(); // PROD-XXX
            $table->string('name');
            $table->enum('category', ['Sofa', 'Meja', 'Kursi', 'Lemari', 'Tempat Tidur', 'Cabinet', 'Rak', 'Lainnya']);
            $table->text('description')->nullable();
            $table->string('unit')->default('pcs'); // pcs, set, unit
            $table->decimal('price', 15, 2); // Harga jual
            $table->decimal('cost', 15, 2)->default(0); // HPP / Cost
            $table->string('image')->nullable(); // Product image
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
