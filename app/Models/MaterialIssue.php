<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MaterialIssue extends Model
{
    protected function casts(): array
    {
        return [
            'quantity_issued' => 'integer',
            'issued_date' => 'date',
        ];
    }

    protected $fillable = [
        'work_order_id',
        'material_id',
        'quantity_issued',
        'issued_date',
        'issued_by',
        'notes',
    ];

    public function workOrder(): BelongsTo
    {
        return $this->belongsTo(WorkOrder::class);
    }

    public function material(): BelongsTo
    {
        return $this->belongsTo(Material::class);
    }
}
