<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDeliveryOrderRequest extends FormRequest
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
            'customer_id' => ['required', 'exists:customers,id'],
            'sales_order_reference' => ['nullable', 'string', 'max:255'],
            'shipment_method' => ['nullable', 'string', 'max:255'],
            'container_number' => ['nullable', 'string', 'max:255'],
            'shipping_line' => ['nullable', 'string', 'max:255'],
            'expected_delivery_date' => ['nullable', 'date'],
            'status' => ['nullable', 'in:Prepared,In Transit,Delivered'],
            'notes' => ['nullable', 'string'],
            'items' => ['required', 'array', 'min:1'],
            'items.*.finished_good_id' => ['required', 'exists:finished_goods,id'],
            'items.*.product_name' => ['required', 'string', 'max:255'],
            'items.*.quantity' => ['required', 'integer', 'min:1'],
            'items.*.unit' => ['required', 'string', 'max:50'],
            'items.*.unit_price' => ['required', 'numeric', 'min:0'],
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'customer_id.required' => 'Customer wajib dipilih',
            'customer_id.exists' => 'Customer tidak ditemukan',
            'expected_delivery_date.after_or_equal' => 'Tanggal pengiriman tidak boleh sebelum hari ini',
            'items.required' => 'Minimal satu produk harus diisi',
            'items.*.finished_good_id.required' => 'Produk wajib dipilih',
            'items.*.finished_good_id.exists' => 'Produk tidak ditemukan',
            'items.*.product_name.required' => 'Nama produk wajib diisi',
            'items.*.quantity.required' => 'Jumlah wajib diisi',
            'items.*.quantity.min' => 'Jumlah minimal 1',
            'items.*.unit_price.required' => 'Harga satuan wajib diisi',
        ];
    }
}
