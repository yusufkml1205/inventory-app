<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStockAdjustmentRequest;
use App\Http\Requests\UpdateStockAdjustmentRequest;
use App\Models\Material;
use App\Models\StockAdjustment;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class StockAdjustmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $stockAdjustments = StockAdjustment::with('material')
            ->latest()
            ->get()
            ->map(function ($adjustment) {
                return [
                    'id' => $adjustment->id,
                    'adjustment_number' => $adjustment->adjustment_number,
                    'material_code' => $adjustment->material->code,
                    'material_name' => $adjustment->material->name,
                    'transaction_type' => $adjustment->transaction_type,
                    'quantity' => $adjustment->quantity,
                    'reason' => $adjustment->reason,
                    'adjustment_date' => $adjustment->adjustment_date?->format('Y-m-d'),
                    'adjusted_by' => $adjustment->adjusted_by,
                ];
            });

        return Inertia::render('adjust/index', [
            'stockAdjustments' => $stockAdjustments,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $materials = Material::where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name', 'code', 'unit', 'current_stock']);

        $transactionTypes = ['Stock In', 'Stock Out'];
        $reasons = ['Sample', 'Rework', 'Waste', 'Damaged', 'Stock Opname Correction'];

        return Inertia::render('adjust/create', [
            'materials' => $materials,
            'transactionTypes' => $transactionTypes,
            'reasons' => $reasons,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStockAdjustmentRequest $request): RedirectResponse
    {
        DB::transaction(function () use ($request) {
            // Generate adjustment number
            $date = now()->format('Ymd');
            $lastAdj = StockAdjustment::whereDate('created_at', now()->toDateString())
                ->orderBy('id', 'desc')
                ->first();

            $sequence = $lastAdj ? (int) substr($lastAdj->adjustment_number, -3) + 1 : 1;
            $adjustmentNumber = sprintf('ADJ-%s-%03d', $date, $sequence);

            // Handle file upload
            $documentPath = null;
            if ($request->hasFile('supporting_document')) {
                $documentPath = $request->file('supporting_document')
                    ->store('stock-adjustments', 'public');
            }

            // Create adjustment
            $adjustment = StockAdjustment::create([
                'adjustment_number' => $adjustmentNumber,
                'material_id' => $request->material_id,
                'transaction_type' => $request->transaction_type,
                'quantity' => $request->quantity,
                'reason' => $request->reason,
                'notes' => $request->notes,
                'supporting_document' => $documentPath,
                'adjusted_by' => auth()->user()->name,
                'adjustment_date' => $request->adjustment_date,
            ]);

            // Update material stock
            $material = Material::findOrFail($request->material_id);
            if ($request->transaction_type === 'Stock In') {
                $material->increment('current_stock', $request->quantity);
            } else {
                $material->decrement('current_stock', $request->quantity);
            }
        });

        return redirect()->route('adjust.index')
            ->with('success', 'Stock adjustment berhasil dicatat.');
    }

    /**
     * Display the specified resource.
     */
    public function show(StockAdjustment $stockAdjustment): Response
    {
        $stockAdjustment->load('material');

        return Inertia::render('adjust/show', [
            'stockAdjustment' => [
                'id' => $stockAdjustment->id,
                'adjustment_number' => $stockAdjustment->adjustment_number,
                'material' => [
                    'code' => $stockAdjustment->material->code,
                    'name' => $stockAdjustment->material->name,
                    'unit' => $stockAdjustment->material->unit,
                    'current_stock' => $stockAdjustment->material->current_stock,
                ],
                'transaction_type' => $stockAdjustment->transaction_type,
                'quantity' => $stockAdjustment->quantity,
                'reason' => $stockAdjustment->reason,
                'notes' => $stockAdjustment->notes,
                'supporting_document' => $stockAdjustment->supporting_document
                    ? Storage::url($stockAdjustment->supporting_document)
                    : null,
                'adjusted_by' => $stockAdjustment->adjusted_by,
                'adjustment_date' => $stockAdjustment->adjustment_date?->format('Y-m-d'),
                'created_at' => $stockAdjustment->created_at->format('Y-m-d H:i:s'),
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(StockAdjustment $stockAdjustment): Response
    {
        $materials = Material::where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name', 'code', 'unit', 'current_stock']);

        $transactionTypes = ['Stock In', 'Stock Out'];
        $reasons = ['Sample', 'Rework', 'Waste', 'Damaged', 'Stock Opname Correction'];

        return Inertia::render('adjust/edit', [
            'stockAdjustment' => [
                'id' => $stockAdjustment->id,
                'adjustment_number' => $stockAdjustment->adjustment_number,
                'material_id' => $stockAdjustment->material_id,
                'transaction_type' => $stockAdjustment->transaction_type,
                'quantity' => $stockAdjustment->quantity,
                'reason' => $stockAdjustment->reason,
                'notes' => $stockAdjustment->notes,
                'adjustment_date' => $stockAdjustment->adjustment_date->format('Y-m-d'),
                'old_quantity' => $stockAdjustment->quantity,
                'old_transaction_type' => $stockAdjustment->transaction_type,
            ],
            'materials' => $materials,
            'transactionTypes' => $transactionTypes,
            'reasons' => $reasons,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStockAdjustmentRequest $request, StockAdjustment $stockAdjustment): RedirectResponse
    {
        DB::transaction(function () use ($request, $stockAdjustment) {
            // Reverse old adjustment
            $material = Material::findOrFail($stockAdjustment->material_id);
            if ($stockAdjustment->transaction_type === 'Stock In') {
                $material->decrement('current_stock', $stockAdjustment->quantity);
            } else {
                $material->increment('current_stock', $stockAdjustment->quantity);
            }

            // Handle file upload
            $documentPath = $stockAdjustment->supporting_document;
            if ($request->hasFile('supporting_document')) {
                // Delete old file
                if ($documentPath) {
                    Storage::disk('public')->delete($documentPath);
                }
                $documentPath = $request->file('supporting_document')
                    ->store('stock-adjustments', 'public');
            }

            // Update adjustment
            $stockAdjustment->update([
                'material_id' => $request->material_id,
                'transaction_type' => $request->transaction_type,
                'quantity' => $request->quantity,
                'reason' => $request->reason,
                'notes' => $request->notes,
                'supporting_document' => $documentPath,
                'adjustment_date' => $request->adjustment_date,
            ]);

            // Apply new adjustment
            $material = Material::findOrFail($request->material_id);
            if ($request->transaction_type === 'Stock In') {
                $material->increment('current_stock', $request->quantity);
            } else {
                $material->decrement('current_stock', $request->quantity);
            }
        });

        return redirect()->route('adjust.index')
            ->with('success', 'Stock adjustment berhasil diupdate.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(StockAdjustment $stockAdjustment): RedirectResponse
    {
        DB::transaction(function () use ($stockAdjustment) {
            // Reverse adjustment
            $material = Material::findOrFail($stockAdjustment->material_id);
            if ($stockAdjustment->transaction_type === 'Stock In') {
                $material->decrement('current_stock', $stockAdjustment->quantity);
            } else {
                $material->increment('current_stock', $stockAdjustment->quantity);
            }

            // Delete file
            if ($stockAdjustment->supporting_document) {
                Storage::disk('public')->delete($stockAdjustment->supporting_document);
            }

            $stockAdjustment->delete();
        });

        return redirect()->route('adjust.index')
            ->with('success', 'Stock adjustment berhasil dihapus.');
    }
}
