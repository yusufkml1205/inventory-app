<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'code' => 'required|string|max:255|unique:products,code',
            'name' => 'required|string|max:255',
            'category' => 'required|in:Sofa,Meja,Kursi,Lemari,Tempat Tidur,Cabinet,Rak,Lainnya',
            'description' => 'nullable|string',
            'unit' => 'required|string|max:50',
            'price' => 'required|numeric|min:0',
            'cost' => 'nullable|numeric|min:0',
            'image' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
            'is_active' => 'boolean',
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'code.required' => 'Kode produk harus diisi.',
            'code.unique' => 'Kode produk sudah digunakan.',
            'name.required' => 'Nama produk harus diisi.',
            'category.required' => 'Kategori harus dipilih.',
            'category.in' => 'Kategori yang dipilih tidak valid.',
            'unit.required' => 'Satuan harus diisi.',
            'price.required' => 'Harga jual harus diisi.',
            'price.numeric' => 'Harga jual harus berupa angka.',
            'price.min' => 'Harga jual minimal 0.',
            'cost.numeric' => 'Harga pokok harus berupa angka.',
            'cost.min' => 'Harga pokok minimal 0.',
            'image.image' => 'File harus berupa gambar.',
            'image.mimes' => 'Format gambar harus JPEG, JPG, atau PNG.',
            'image.max' => 'Ukuran gambar maksimal 2MB.',
        ];
    }
}
