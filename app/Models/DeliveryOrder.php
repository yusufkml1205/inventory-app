<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DeliveryOrder extends Model
{
    /** @use HasFactory<\Database\Factories\DeliveryOrderFactory> */
    use HasFactory;

    protected function casts(): array
    {
        return [
            'expected_delivery_date' => 'date',
            'actual_delivery_date' => 'date',
            'total_amount' => 'decimal:2',
            'total_cost' => 'decimal:2',
        ];
    }

    protected $fillable = [
        'do_number',
        'customer_id',
        'sales_order_reference',
        'shipment_method',
        'container_number',
        'shipping_line',
        'expected_delivery_date',
        'actual_delivery_date',
        'status',
        'total_amount',
        'total_cost',
        'notes',
        'created_by',
    ];

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(DeliveryOrderItem::class);
    }

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function getGrossProfitAttribute(): float
    {
        return $this->total_amount - $this->total_cost;
    }
}
