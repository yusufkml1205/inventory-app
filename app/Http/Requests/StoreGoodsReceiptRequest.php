<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreGoodsReceiptRequest extends FormRequest
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
            'purchase_order_id' => 'required|exists:purchase_orders,id',
            'receipt_date' => 'required|date',
            'received_by' => 'nullable|string|max:255',
            'notes' => 'nullable|string',
            'items' => 'required|array|min:1',
            'items.*.purchase_order_item_id' => 'required|exists:purchase_order_items,id',
            'items.*.quantity_received' => 'required|numeric|min:0.01',
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
            'purchase_order_id.required' => 'Purchase Order harus dipilih.',
            'purchase_order_id.exists' => 'Purchase Order yang dipilih tidak valid.',
            'receipt_date.required' => 'Tanggal terima harus diisi.',
            'receipt_date.date' => 'Format tanggal terima tidak valid.',
            'items.required' => 'Item yang diterima harus ditambahkan minimal 1.',
            'items.min' => 'Item yang diterima harus ditambahkan minimal 1.',
            'items.*.purchase_order_item_id.required' => 'Item PO harus dipilih.',
            'items.*.purchase_order_item_id.exists' => 'Item PO yang dipilih tidak valid.',
            'items.*.quantity_received.required' => 'Quantity yang diterima harus diisi.',
            'items.*.quantity_received.numeric' => 'Quantity yang diterima harus berupa angka.',
            'items.*.quantity_received.min' => 'Quantity yang diterima minimal 0.01.',
        ];
    }
}
