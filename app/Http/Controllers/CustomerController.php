<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use App\Models\Customer;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $customers = Customer::query()
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($customer) {
                return [
                    'id' => $customer->id,
                    'code' => $customer->code,
                    'name' => $customer->name,
                    'city' => $customer->city,
                    'country' => $customer->country,
                    'phone' => $customer->phone,
                    'email' => $customer->email,
                    'contact_person' => $customer->contact_person,
                    'is_active' => $customer->is_active,
                ];
            });

        return Inertia::render('masterdata/customers/index', [
            'customers' => $customers,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('masterdata/customers/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCustomerRequest $request): RedirectResponse
    {
        Customer::create($request->validated());

        return redirect()->route('masterdata.customers.index')
            ->with('success', 'Customer berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer): Response
    {
        return Inertia::render('masterdata/customers/show', [
            'customer' => [
                'id' => $customer->id,
                'code' => $customer->code,
                'name' => $customer->name,
                'address' => $customer->address,
                'city' => $customer->city,
                'country' => $customer->country,
                'phone' => $customer->phone,
                'email' => $customer->email,
                'contact_person' => $customer->contact_person,
                'is_active' => $customer->is_active,
                'created_at' => $customer->created_at->format('d M Y H:i'),
                'updated_at' => $customer->updated_at->format('d M Y H:i'),
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Customer $customer): Response
    {
        return Inertia::render('masterdata/customers/edit', [
            'customer' => [
                'id' => $customer->id,
                'code' => $customer->code,
                'name' => $customer->name,
                'address' => $customer->address,
                'city' => $customer->city,
                'country' => $customer->country,
                'phone' => $customer->phone,
                'email' => $customer->email,
                'contact_person' => $customer->contact_person,
                'is_active' => $customer->is_active,
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCustomerRequest $request, Customer $customer): RedirectResponse
    {
        $customer->update($request->validated());

        return redirect()->route('masterdata.customers.index')
            ->with('success', 'Customer berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer): RedirectResponse
    {
        $customer->delete();

        return redirect()->route('masterdata.customers.index')
            ->with('success', 'Customer berhasil dihapus.');
    }
}
