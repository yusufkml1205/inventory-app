<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMaterialIssueRequest extends FormRequest
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
            'work_order_id' => ['required', 'exists:work_orders,id'],
            'issued_date' => ['required', 'date'],
            'issued_by' => ['nullable', 'string', 'max:255'],
            'notes' => ['nullable', 'string'],
            'items' => ['required', 'array', 'min:1'],
            'items.*.material_id' => ['required', 'exists:materials,id'],
            'items.*.quantity_issued' => ['required', 'integer', 'min:1'],
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'work_order_id.required' => 'Work Order wajib dipilih',
            'work_order_id.exists' => 'Work Order tidak ditemukan',
            'issued_date.required' => 'Tanggal pengeluaran wajib diisi',
            'items.required' => 'Minimal satu material harus diisi',
            'items.*.material_id.required' => 'Material wajib dipilih',
            'items.*.material_id.exists' => 'Material tidak ditemukan',
            'items.*.quantity_issued.required' => 'Jumlah pengeluaran wajib diisi',
            'items.*.quantity_issued.min' => 'Jumlah pengeluaran minimal 1',
        ];
    }
}
