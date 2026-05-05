<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreWorkOrderRequest extends FormRequest
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
            'product_name' => ['required', 'string', 'max:255'],
            'quantity_to_produce' => ['required', 'integer', 'min:1'],
            'target_completion_date' => ['required', 'date', 'after_or_equal:today'],
            'reference' => ['nullable', 'string', 'max:255'],
            'notes' => ['nullable', 'string'],
            'status' => ['nullable', 'in:Planning,In Progress,Completed,Cancelled'],
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'product_name.required' => 'Nama produk wajib diisi',
            'quantity_to_produce.required' => 'Jumlah produksi wajib diisi',
            'quantity_to_produce.min' => 'Jumlah produksi minimal 1',
            'target_completion_date.required' => 'Target tanggal selesai wajib diisi',
            'target_completion_date.after_or_equal' => 'Target tanggal selesai tidak boleh sebelum hari ini',
        ];
    }
}
