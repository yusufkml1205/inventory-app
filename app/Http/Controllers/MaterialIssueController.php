<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMaterialIssueRequest;
use App\Models\Material;
use App\Models\MaterialIssue;
use App\Models\WorkOrder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class MaterialIssueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $materialIssues = MaterialIssue::with(['workOrder', 'material'])
            ->latest()
            ->get()
            ->map(function ($issue) {
                return [
                    'id' => $issue->id,
                    'wo_number' => $issue->workOrder->wo_number,
                    'product_name' => $issue->workOrder->product_name,
                    'material_name' => $issue->material->name,
                    'quantity_issued' => $issue->quantity_issued,
                    'issued_date' => $issue->issued_date?->format('Y-m-d'),
                    'issued_by' => $issue->issued_by,
                ];
            });

        return Inertia::render('produksi/material-issues/index', [
            'materialIssues' => $materialIssues,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        // Get work orders that are in Planning or In Progress status
        $workOrders = WorkOrder::whereIn('status', ['Planning', 'In Progress'])
            ->orderBy('created_at', 'desc')
            ->get(['id', 'wo_number', 'product_name', 'status']);

        // Get active materials with current stock
        $materials = Material::where('is_active', true)
            ->orderBy('name')
            ->get()
            ->map(function ($material) {
                return [
                    'id' => $material->id,
                    'code' => $material->code,
                    'name' => $material->name,
                    'unit' => $material->unit,
                    'current_stock' => $material->current_stock,
                    'min_stock' => $material->min_stock,
                ];
            });

        return Inertia::render('produksi/material-issues/create', [
            'workOrders' => $workOrders,
            'materials' => $materials,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMaterialIssueRequest $request): RedirectResponse
    {
        DB::transaction(function () use ($request) {
            foreach ($request->items as $item) {
                $material = Material::findOrFail($item['material_id']);

                // Check if stock is sufficient
                if ($material->current_stock < $item['quantity_issued']) {
                    throw new \Exception("Stok material {$material->name} tidak mencukupi. Stok tersedia: {$material->current_stock} {$material->unit}");
                }

                // Create material issue
                MaterialIssue::create([
                    'work_order_id' => $request->work_order_id,
                    'material_id' => $item['material_id'],
                    'quantity_issued' => $item['quantity_issued'],
                    'issued_date' => $request->issued_date,
                    'issued_by' => $request->issued_by ?? auth()->user()->name,
                    'notes' => $request->notes,
                ]);

                // Decrease material stock
                $material->decrement('current_stock', $item['quantity_issued']);
            }

            // Update work order status to In Progress if still Planning
            $workOrder = WorkOrder::findOrFail($request->work_order_id);
            if ($workOrder->status === 'Planning') {
                $workOrder->update(['status' => 'In Progress']);
            }
        });

        return redirect()->route('material-issues.index')
            ->with('success', 'Material Issue berhasil dicatat.');
    }

    /**
     * Display the specified resource.
     */
    public function show(MaterialIssue $materialIssue): Response
    {
        $materialIssue->load(['workOrder', 'material']);

        return Inertia::render('produksi/material-issues/show', [
            'materialIssue' => [
                'id' => $materialIssue->id,
                'work_order' => [
                    'id' => $materialIssue->workOrder->id,
                    'wo_number' => $materialIssue->workOrder->wo_number,
                    'product_name' => $materialIssue->workOrder->product_name,
                    'status' => $materialIssue->workOrder->status,
                ],
                'material' => [
                    'id' => $materialIssue->material->id,
                    'code' => $materialIssue->material->code,
                    'name' => $materialIssue->material->name,
                    'unit' => $materialIssue->material->unit,
                ],
                'quantity_issued' => $materialIssue->quantity_issued,
                'issued_date' => $materialIssue->issued_date->format('d/m/Y'),
                'issued_by' => $materialIssue->issued_by,
                'notes' => $materialIssue->notes,
                'created_at' => $materialIssue->created_at->format('d/m/Y H:i'),
            ],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MaterialIssue $materialIssue): RedirectResponse
    {
        DB::transaction(function () use ($materialIssue) {
            // Return stock to material
            $material = $materialIssue->material;
            $material->increment('current_stock', $materialIssue->quantity_issued);

            // Delete material issue
            $materialIssue->delete();
        });

        return redirect()->route('material-issues.index')
            ->with('success', 'Material Issue berhasil dihapus dan stok dikembalikan.');
    }
}
