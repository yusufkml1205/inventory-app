<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFinishedGoodRequest;
use App\Models\FinishedGood;
use App\Models\WorkOrder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class FinishedGoodController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $finishedGoods = FinishedGood::with('workOrder')
            ->latest()
            ->get()
            ->map(function ($fg) {
                return [
                    'id' => $fg->id,
                    'wo_number' => $fg->workOrder->wo_number,
                    'product_name' => $fg->product_name,
                    'quantity_completed' => $fg->quantity_completed,
                    'quantity_available' => $fg->quantity_available,
                    'unit_cost' => $fg->unit_cost,
                    'production_date' => $fg->production_date?->format('Y-m-d'),
                    'storage_location' => $fg->storage_location,
                ];
            });

        return Inertia::render('produksi/finished-goods/index', [
            'finishedGoods' => $finishedGoods,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        // Get work orders that have material issues and are not cancelled
        $workOrders = WorkOrder::whereIn('status', ['In Progress', 'Planning'])
            ->with('materialIssues')
            ->orderBy('created_at', 'desc')
            ->get()
            ->filter(function ($wo) {
                return $wo->materialIssues->count() > 0;
            })
            ->map(function ($wo) {
                $totalMaterialCost = $wo->getTotalMaterialCost();
                return [
                    'id' => $wo->id,
                    'wo_number' => $wo->wo_number,
                    'product_name' => $wo->product_name,
                    'quantity_to_produce' => $wo->quantity_to_produce,
                    'quantity_completed' => $wo->quantity_completed,
                    'status' => $wo->status,
                    'total_material_cost' => $totalMaterialCost,
                ];
            })
            ->values();

        return Inertia::render('produksi/finished-goods/create', [
            'workOrders' => $workOrders,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFinishedGoodRequest $request): RedirectResponse
    {
        DB::transaction(function () use ($request) {
            $workOrder = WorkOrder::with('materialIssues.material')->findOrFail($request->work_order_id);

            // Calculate total material cost
            $totalMaterialCost = $workOrder->getTotalMaterialCost();

            // Calculate unit cost
            $unitCost = $request->quantity_completed > 0 
                ? $totalMaterialCost / $request->quantity_completed 
                : 0;

            // Create finished good
            FinishedGood::create([
                'work_order_id' => $request->work_order_id,
                'product_name' => $workOrder->product_name,
                'quantity_completed' => $request->quantity_completed,
                'quantity_available' => $request->quantity_completed, // Initially all available
                'unit_cost' => $unitCost,
                'production_date' => $request->production_date,
                'storage_location' => $request->storage_location,
                'notes' => $request->notes,
            ]);

            // Update work order
            $workOrder->increment('quantity_completed', $request->quantity_completed);
            
            // If quantity completed meets or exceeds quantity to produce, mark as Completed
            if ($workOrder->quantity_completed >= $workOrder->quantity_to_produce) {
                $workOrder->update([
                    'status' => 'Completed',
                    'actual_completion_date' => $request->production_date,
                ]);
            }
        });

        return redirect()->route('finished-goods.index')
            ->with('success', 'Finished Good berhasil dicatat.');
    }

    /**
     * Display the specified resource.
     */
    public function show(FinishedGood $finishedGood): Response
    {
        $finishedGood->load('workOrder');

        return Inertia::render('produksi/finished-goods/show', [
            'finishedGood' => [
                'id' => $finishedGood->id,
                'work_order' => [
                    'id' => $finishedGood->workOrder->id,
                    'wo_number' => $finishedGood->workOrder->wo_number,
                    'product_name' => $finishedGood->workOrder->product_name,
                    'quantity_to_produce' => $finishedGood->workOrder->quantity_to_produce,
                    'status' => $finishedGood->workOrder->status,
                ],
                'product_name' => $finishedGood->product_name,
                'quantity_completed' => $finishedGood->quantity_completed,
                'quantity_available' => $finishedGood->quantity_available,
                'unit_cost' => $finishedGood->unit_cost,
                'production_date' => $finishedGood->production_date->format('d/m/Y'),
                'storage_location' => $finishedGood->storage_location,
                'notes' => $finishedGood->notes,
                'created_at' => $finishedGood->created_at->format('d/m/Y H:i'),
            ],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FinishedGood $finishedGood): RedirectResponse
    {
        // Check if this finished good has been sold
        if ($finishedGood->quantity_available !== $finishedGood->quantity_completed) {
            return back()->with('error', 'Finished Good tidak dapat dihapus karena sudah ada yang terjual.');
        }

        DB::transaction(function () use ($finishedGood) {
            $workOrder = $finishedGood->workOrder;
            
            // Decrease work order's quantity completed
            $workOrder->decrement('quantity_completed', $finishedGood->quantity_completed);
            
            // Update work order status back to In Progress if it was Completed
            if ($workOrder->status === 'Completed') {
                $workOrder->update([
                    'status' => 'In Progress',
                    'actual_completion_date' => null,
                ]);
            }

            // Delete finished good
            $finishedGood->delete();
        });

        return redirect()->route('finished-goods.index')
            ->with('success', 'Finished Good berhasil dihapus.');
    }
}
