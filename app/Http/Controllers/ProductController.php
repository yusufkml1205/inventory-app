<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $products = Product::latest()->get()->map(function ($product) {
            return [
                'id' => $product->id,
                'code' => $product->code,
                'name' => $product->name,
                'category' => $product->category,
                'unit' => $product->unit,
                'price' => $product->price,
                'cost' => $product->cost,
                'is_active' => $product->is_active,
                'image' => $product->image ? Storage::url($product->image) : null,
            ];
        });

        return Inertia::render('masterdata/products/index', [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $categories = ['Sofa', 'Meja', 'Kursi', 'Lemari', 'Tempat Tidur', 'Cabinet', 'Rak', 'Lainnya'];

        return Inertia::render('masterdata/products/create', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request): RedirectResponse
    {
        $data = $request->validated();

        // Handle image upload
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('products', 'public');
        }

        Product::create($data);

        return redirect()->route('masterdata.products.index')
            ->with('success', 'Produk berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product): Response
    {
        return Inertia::render('masterdata/products/show', [
            'product' => [
                'id' => $product->id,
                'code' => $product->code,
                'name' => $product->name,
                'category' => $product->category,
                'description' => $product->description,
                'unit' => $product->unit,
                'price' => $product->price,
                'cost' => $product->cost,
                'is_active' => $product->is_active,
                'image' => $product->image ? Storage::url($product->image) : null,
                'created_at' => $product->created_at->format('d/m/Y H:i'),
                'updated_at' => $product->updated_at->format('d/m/Y H:i'),
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product): Response
    {
        $categories = ['Sofa', 'Meja', 'Kursi', 'Lemari', 'Tempat Tidur', 'Cabinet', 'Rak', 'Lainnya'];

        return Inertia::render('masterdata/products/edit', [
            'product' => [
                'id' => $product->id,
                'code' => $product->code,
                'name' => $product->name,
                'category' => $product->category,
                'description' => $product->description,
                'unit' => $product->unit,
                'price' => $product->price,
                'cost' => $product->cost,
                'is_active' => $product->is_active,
                'image' => $product->image ? Storage::url($product->image) : null,
            ],
            'categories' => $categories,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product): RedirectResponse
    {
        $data = $request->validated();

        // Handle image upload
        if ($request->hasFile('image')) {
            // Delete old image
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            $data['image'] = $request->file('image')->store('products', 'public');
        }

        $product->update($data);

        return redirect()->route('masterdata.products.index')
            ->with('success', 'Produk berhasil diupdate.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product): RedirectResponse
    {
        // Delete image
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }

        $product->delete();

        return redirect()->route('masterdata.products.index')
            ->with('success', 'Produk berhasil dihapus.');
    }
}
