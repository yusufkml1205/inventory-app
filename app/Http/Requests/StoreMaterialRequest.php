<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMaterialRequest extends FormRequest
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
            'code' => ['required', 'string', 'max:255', 'unique:materials,code'],
            'name' => ['required', 'string', 'max:255'],
            'category' => ['required', 'in:Kayu Solid,Plywood,Hardware,Finishing,Material Pendukung'],
            'unit' => ['required', 'string', 'max:50'],
            'price_per_unit' => ['required', 'numeric', 'min:0'],
            'min_stock' => ['required', 'integer', 'min:0'],
            'current_stock' => ['required', 'integer', 'min:0'],
            'description' => ['nullable', 'string'],
            'is_active' => ['boolean'],
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'code.required' => 'Kode material wajib diisi',
            'code.unique' => 'Kode material sudah digunakan',
            'name.required' => 'Nama material wajib diisi',
            'category.required' => 'Kategori material wajib dipilih',
            'category.in' => 'Kategori yang dipilih tidak valid',
            'unit.required' => 'Satuan material wajib diisi',
            'price_per_unit.required' => 'Harga per satuan wajib diisi',
            'price_per_unit.min' => 'Harga per satuan tidak boleh negatif',
            'min_stock.required' => 'Stok minimum wajib diisi',
            'min_stock.min' => 'Stok minimum tidak boleh negatif',
            'current_stock.required' => 'Stok saat ini wajib diisi',
            'current_stock.min' => 'Stok saat ini tidak boleh negatif',
        ];
    }
}
