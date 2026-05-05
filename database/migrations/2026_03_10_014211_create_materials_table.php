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
        Schema::create('materials', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('name');
            $table->enum('category', ['Kayu Solid', 'Plywood', 'Hardware', 'Finishing', 'Material Pendukung']);
            $table->string('unit'); // satuan: kg, pcs, m3, liter, dll
            $table->decimal('price_per_unit', 15, 2)->default(0);
            $table->integer('min_stock')->default(0);
            $table->integer('current_stock')->default(0);
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materials');
    }
};
