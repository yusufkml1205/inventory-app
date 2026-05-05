<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMaterialRequest;
use App\Http\Requests\UpdateMaterialRequest;
use App\Models\Material;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class MaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $materials = Material::query()
            ->orderBy('created_at', 'desc')
            ->paginate(30)
            ->through(function ($material) {
                return [
                    'id' => $material->id,
                    'code' => $material->code,
                    'name' => $material->name,
                    'category' => $material->category,
                    'unit' => $material->unit,
                    'price_per_unit' => $material->price_per_unit,
                    'min_stock' => $material->min_stock,
                    'current_stock' => $material->current_stock,
                    'is_low_stock' => $material->isLowStock(),
                    'is_active' => $material->is_active,
                    'description' => $material->description,
                ];
            });

        return Inertia::render('masterdata/materials/index', [
            'materials' => $materials,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('masterdata/materials/create', [
            'categories' => [
                'Kayu Solid',
                'Plywood',
                'Hardware',
                'Finishing',
                'Material Pendukung',
            ],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMaterialRequest $request): RedirectResponse
    {
        Material::create($request->validated());

        return redirect()->route('masterdata.materials.index')
            ->with('success', 'Material berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Material $material): Response
    {
        return Inertia::render('masterdata/materials/show', [
            'material' => [
                'id' => $material->id,
                'code' => $material->code,
                'name' => $material->name,
                'category' => $material->category,
                'unit' => $material->unit,
                'price_per_unit' => $material->price_per_unit,
                'min_stock' => $material->min_stock,
                'current_stock' => $material->current_stock,
                'is_low_stock' => $material->isLowStock(),
                'is_active' => $material->is_active,
                'description' => $material->description,
                'created_at' => $material->created_at->format('d M Y H:i'),
                'updated_at' => $material->updated_at->format('d M Y H:i'),
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Material $material): Response
    {
        return Inertia::render('masterdata/materials/edit', [
            'material' => [
                'id' => $material->id,
                'code' => $material->code,
                'name' => $material->name,
                'category' => $material->category,
                'unit' => $material->unit,
                'price_per_unit' => $material->price_per_unit,
                'min_stock' => $material->min_stock,
                'current_stock' => $material->current_stock,
                'is_active' => $material->is_active,
                'description' => $material->description,
            ],
            'categories' => [
                'Kayu Solid',
                'Plywood',
                'Hardware',
                'Finishing',
                'Material Pendukung',
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMaterialRequest $request, Material $material): RedirectResponse
    {
        $material->update($request->validated());

        return redirect()->route('masterdata.materials.index')
            ->with('success', 'Material berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Material $material): RedirectResponse
    {
        $material->delete();

        return redirect()->route('masterdata.materials.index')
            ->with('success', 'Material berhasil dihapus');
    }
}
