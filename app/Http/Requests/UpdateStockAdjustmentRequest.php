<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStockAdjustmentRequest extends FormRequest
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
            'material_id' => 'required|exists:materials,id',
            'transaction_type' => 'required|in:Stock In,Stock Out',
            'quantity' => 'required|integer|min:1',
            'reason' => 'required|in:Sample,Rework,Waste,Damaged,Stock Opname Correction',
            'notes' => 'nullable|string',
            'supporting_document' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:2048',
            'adjustment_date' => 'required|date',
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
            'material_id.required' => 'Material harus dipilih.',
            'material_id.exists' => 'Material yang dipilih tidak valid.',
            'transaction_type.required' => 'Tipe transaksi harus dipilih.',
            'transaction_type.in' => 'Tipe transaksi yang dipilih tidak valid.',
            'quantity.required' => 'Quantity harus diisi.',
            'quantity.integer' => 'Quantity harus berupa bilangan bulat.',
            'quantity.min' => 'Quantity minimal 1.',
            'reason.required' => 'Alasan penyesuaian harus dipilih.',
            'reason.in' => 'Alasan penyesuaian yang dipilih tidak valid.',
            'supporting_document.file' => 'Dokumen pendukung harus berupa file.',
            'supporting_document.mimes' => 'Dokumen pendukung harus berformat PDF, JPG, JPEG, atau PNG.',
            'supporting_document.max' => 'Ukuran dokumen pendukung maksimal 2MB.',
            'adjustment_date.required' => 'Tanggal penyesuaian harus diisi.',
            'adjustment_date.date' => 'Format tanggal penyesuaian tidak valid.',
        ];
    }
}
