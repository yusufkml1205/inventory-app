<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSupplierRequest;
use App\Http\Requests\UpdateSupplierRequest;
use App\Models\Supplier;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $suppliers = Supplier::query()
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($supplier) {
                return [
                    'id' => $supplier->id,
                    'code' => $supplier->code,
                    'name' => $supplier->name,
                    'city' => $supplier->city,
                    'phone' => $supplier->phone,
                    'email' => $supplier->email,
                    'contact_person' => $supplier->contact_person,
                    'is_active' => $supplier->is_active,
                ];
            });

        return Inertia::render('masterdata/suppliers/index', [
            'suppliers' => $suppliers,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('masterdata/suppliers/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSupplierRequest $request): RedirectResponse
    {
        Supplier::create($request->validated());

        return redirect()->route('masterdata.suppliers.index')
            ->with('success', 'Supplier berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Supplier $supplier): Response
    {
        return Inertia::render('masterdata/suppliers/show', [
            'supplier' => [
                'id' => $supplier->id,
                'code' => $supplier->code,
                'name' => $supplier->name,
                'address' => $supplier->address,
                'city' => $supplier->city,
                'phone' => $supplier->phone,
                'email' => $supplier->email,
                'contact_person' => $supplier->contact_person,
                'is_active' => $supplier->is_active,
                'created_at' => $supplier->created_at->format('d M Y H:i'),
                'updated_at' => $supplier->updated_at->format('d M Y H:i'),
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Supplier $supplier): Response
    {
        return Inertia::render('masterdata/suppliers/edit', [
            'supplier' => [
                'id' => $supplier->id,
                'code' => $supplier->code,
                'name' => $supplier->name,
                'address' => $supplier->address,
                'city' => $supplier->city,
                'phone' => $supplier->phone,
                'email' => $supplier->email,
                'contact_person' => $supplier->contact_person,
                'is_active' => $supplier->is_active,
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSupplierRequest $request, Supplier $supplier): RedirectResponse
    {
        $supplier->update($request->validated());

        return redirect()->route('masterdata.suppliers.index')
            ->with('success', 'Supplier berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Supplier $supplier): RedirectResponse
    {
        $supplier->delete();

        return redirect()->route('masterdata.suppliers.index')
            ->with('success', 'Supplier berhasil dihapus.');
    }
}
