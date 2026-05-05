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
        Schema::create('stock_adjustments', function (Blueprint $table) {
            $table->id();
            $table->string('adjustment_number')->unique(); // ADJ-YYYYMMDD-XXX
            $table->foreignId('material_id')->constrained()->cascadeOnDelete();
            $table->enum('transaction_type', ['Stock In', 'Stock Out']);
            $table->integer('quantity');
            $table->enum('reason', ['Sample', 'Rework', 'Waste', 'Damaged', 'Stock Opname Correction']);
            $table->text('notes')->nullable();
            $table->string('supporting_document')->nullable();
            $table->string('adjusted_by')->nullable();
            $table->date('adjustment_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_adjustments');
    }
};
