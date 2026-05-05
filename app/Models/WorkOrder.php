<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class WorkOrder extends Model
{
    /** @use HasFactory<\Database\Factories\WorkOrderFactory> */
    use HasFactory;

    protected function casts(): array
    {
        return [
            'quantity_to_produce' => 'integer',
            'quantity_completed' => 'integer',
            'target_completion_date' => 'date',
            'actual_completion_date' => 'date',
        ];
    }

    protected $fillable = [
        'wo_number',
        'product_name',
        'quantity_to_produce',
        'quantity_completed',
        'target_completion_date',
        'actual_completion_date',
        'reference',
        'notes',
        'status',
        'created_by',
    ];

    public function materialIssues(): HasMany
    {
        return $this->hasMany(MaterialIssue::class);
    }

    public function finishedGoods(): HasMany
    {
        return $this->hasMany(FinishedGood::class);
    }

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function getTotalMaterialCostAttribute(): float
    {
        return $this->materialIssues->sum(function ($issue) {
            return $issue->quantity_issued * $issue->material->price_per_unit;
        });
    }

    public function getTotalMaterialCost(): float
    {
        if (!$this->relationLoaded('materialIssues')) {
            $this->load('materialIssues.material');
        }

        return $this->materialIssues->sum(function ($issue) {
            return $issue->quantity_issued * ($issue->material->price_per_unit ?? 0);
        });
    }
}
