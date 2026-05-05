<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreWorkOrderRequest;
use App\Http\Requests\UpdateWorkOrderRequest;
use App\Models\Material;
use App\Models\WorkOrder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class WorkOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $workOrders = WorkOrder::with(['materialIssues', 'finishedGoods', 'createdBy'])
            ->latest()
            ->get()
            ->map(function ($wo) {
                return [
                    'id' => $wo->id,
                    'wo_number' => $wo->wo_number,
                    'product_name' => $wo->product_name,
                    'quantity_to_produce' => $wo->quantity_to_produce,
                    'quantity_completed' => $wo->quantity_completed,
                    'target_completion_date' => $wo->target_completion_date?->format('Y-m-d'),
                    'status' => $wo->status,
                    'created_by' => $wo->createdBy?->name,
                ];
            });

        return Inertia::render('produksi/work-orders/index', [
            'workOrders' => $workOrders,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $statuses = ['Planning', 'In Progress', 'Completed', 'Cancelled'];

        return Inertia::render('produksi/work-orders/create', [
            'statuses' => $statuses,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreWorkOrderRequest $request): RedirectResponse
    {
        // Generate WO number
        $date = now()->format('Ymd');
        $lastWO = WorkOrder::whereDate('created_at', now()->toDateString())
            ->orderBy('id', 'desc')
            ->first();

        $sequence = $lastWO ? (int) substr($lastWO->wo_number, -3) + 1 : 1;
        $woNumber = sprintf('WO-%s-%03d', $date, $sequence);

        WorkOrder::create([
            'wo_number' => $woNumber,
            'product_name' => $request->product_name,
            'quantity_to_produce' => $request->quantity_to_produce,
            'target_completion_date' => $request->target_completion_date,
            'reference' => $request->reference,
            'notes' => $request->notes,
            'status' => $request->status ?? 'Planning',
            'created_by' => auth()->id(),
        ]);

        return redirect()->route('work-orders.index')
            ->with('success', 'Work Order berhasil dibuat.');
    }

    /**
     * Display the specified resource.
     */
    public function show(WorkOrder $workOrder): Response
    {
        $workOrder->load(['materialIssues.material', 'finishedGoods', 'createdBy']);

        $totalMaterialCost = $workOrder->getTotalMaterialCost();
        $variance = $workOrder->quantity_completed - $workOrder->quantity_to_produce;

        return Inertia::render('produksi/work-orders/show', [
            'workOrder' => [
                'id' => $workOrder->id,
                'wo_number' => $workOrder->wo_number,
                'product_name' => $workOrder->product_name,
                'quantity_to_produce' => $workOrder->quantity_to_produce,
                'quantity_completed' => $workOrder->quantity_completed,
                'target_completion_date' => $workOrder->target_completion_date?->format('Y-m-d'),
                'actual_completion_date' => $workOrder->actual_completion_date?->format('Y-m-d'),
                'reference' => $workOrder->reference,
                'notes' => $workOrder->notes,
                'status' => $workOrder->status,
                'created_by' => $workOrder->createdBy?->name,
                'created_at' => $workOrder->created_at->format('Y-m-d H:i:s'),
                'total_material_cost' => $totalMaterialCost,
                'variance' => $variance,
                'material_issues' => $workOrder->materialIssues->map(function ($issue) {
                    return [
                        'id' => $issue->id,
                        'material_id' => $issue->material_id,
                        'material_code' => $issue->material->code,
                        'material_name' => $issue->material->name,
                        'unit' => $issue->material->unit,
                        'quantity_issued' => $issue->quantity_issued,
                        'issued_date' => $issue->issued_date?->format('Y-m-d'),
                        'issued_by' => $issue->issued_by,
                    ];
                }),
                'finished_goods' => $workOrder->finishedGoods->map(function ($fg) {
                    return [
                        'id' => $fg->id,
                        'product_name' => $fg->product_name,
                        'quantity_completed' => $fg->quantity_completed,
                        'quantity_available' => $fg->quantity_available,
                        'unit_cost' => $fg->unit_cost,
                        'production_date' => $fg->production_date?->format('Y-m-d'),
                        'storage_location' => $fg->storage_location,
                    ];
                }),
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(WorkOrder $workOrder): Response
    {
        $statuses = ['Planning', 'In Progress', 'Completed', 'Cancelled'];

        return Inertia::render('produksi/work-orders/edit', [
            'workOrder' => [
                'id' => $workOrder->id,
                'wo_number' => $workOrder->wo_number,
                'product_name' => $workOrder->product_name,
                'quantity_to_produce' => $workOrder->quantity_to_produce,
                'quantity_completed' => $workOrder->quantity_completed,
                'target_completion_date' => $workOrder->target_completion_date->format('Y-m-d'),
                'actual_completion_date' => $workOrder->actual_completion_date?->format('Y-m-d'),
                'reference' => $workOrder->reference,
                'notes' => $workOrder->notes,
                'status' => $workOrder->status,
            ],
            'statuses' => $statuses,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWorkOrderRequest $request, WorkOrder $workOrder): RedirectResponse
    {
        $workOrder->update($request->validated());

        return redirect()->route('work-orders.index')
            ->with('success', 'Work Order berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(WorkOrder $workOrder): RedirectResponse
    {
        // Only allow deletion if no material issues or finished goods
        if ($workOrder->materialIssues()->count() > 0 || $workOrder->finishedGoods()->count() > 0) {
            return back()->with('error', 'Work Order tidak dapat dihapus karena sudah memiliki transaksi terkait.');
        }

        $workOrder->delete();

        return redirect()->route('work-orders.index')
            ->with('success', 'Work Order berhasil dihapus.');
    }
}
