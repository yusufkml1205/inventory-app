<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StockAdjustment extends Model
{
    /** @use HasFactory<\Database\Factories\StockAdjustmentFactory> */
    use HasFactory;

    protected function casts(): array
    {
        return [
            'quantity' => 'integer',
            'adjustment_date' => 'date',
        ];
    }

    protected $fillable = [
        'adjustment_number',
        'material_id',
        'transaction_type',
        'quantity',
        'reason',
        'notes',
        'supporting_document',
        'adjusted_by',
        'adjustment_date',
    ];

    public function material(): BelongsTo
    {
        return $this->belongsTo(Material::class);
    }
}
