<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePurchaseOrderRequest extends FormRequest
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
            'supplier_id' => 'required|exists:suppliers,id',
            'order_date' => 'required|date',
            'status' => 'required|in:Draft,Sent to Supplier,In Transit,Partially Received,Received,Cancelled',
            'notes' => 'nullable|string',
            'items' => 'required|array|min:1',
            'items.*.material_id' => 'required|exists:materials,id',
            'items.*.quantity' => 'required|numeric|min:0.01',
            'items.*.unit_price' => 'required|numeric|min:0',
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
            'supplier_id.required' => 'Supplier harus dipilih.',
            'supplier_id.exists' => 'Supplier yang dipilih tidak valid.',
            'order_date.required' => 'Tanggal order harus diisi.',
            'order_date.date' => 'Format tanggal order tidak valid.',
            'status.required' => 'Status harus dipilih.',
            'status.in' => 'Status yang dipilih tidak valid.',
            'items.required' => 'Item PO harus ditambahkan minimal 1.',
            'items.min' => 'Item PO harus ditambahkan minimal 1.',
            'items.*.material_id.required' => 'Material harus dipilih.',
            'items.*.material_id.exists' => 'Material yang dipilih tidak valid.',
            'items.*.quantity.required' => 'Quantity harus diisi.',
            'items.*.quantity.numeric' => 'Quantity harus berupa angka.',
            'items.*.quantity.min' => 'Quantity minimal 0.01.',
            'items.*.unit_price.required' => 'Unit price harus diisi.',
            'items.*.unit_price.numeric' => 'Unit price harus berupa angka.',
            'items.*.unit_price.min' => 'Unit price minimal 0.',
        ];
    }
}
