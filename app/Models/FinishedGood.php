<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class FinishedGood extends Model
{
    protected function casts(): array
    {
        return [
            'quantity_completed' => 'integer',
            'quantity_available' => 'integer',
            'unit_cost' => 'decimal:2',
            'production_date' => 'date',
        ];
    }

    protected $fillable = [
        'work_order_id',
        'product_name',
        'quantity_completed',
        'quantity_available',
        'unit_cost',
        'production_date',
        'storage_location',
        'notes',
    ];

    public function workOrder(): BelongsTo
    {
        return $this->belongsTo(WorkOrder::class);
    }

    public function deliveryOrderItems(): HasMany
    {
        return $this->hasMany(DeliveryOrderItem::class);
    }
}
