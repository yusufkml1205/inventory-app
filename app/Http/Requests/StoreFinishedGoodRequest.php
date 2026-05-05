<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFinishedGoodRequest extends FormRequest
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
            'quantity_completed' => ['required', 'integer', 'min:1'],
            'production_date' => ['required', 'date'],
            'storage_location' => ['nullable', 'string', 'max:255'],
            'notes' => ['nullable', 'string'],
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
            'quantity_completed.required' => 'Jumlah selesai wajib diisi',
            'quantity_completed.min' => 'Jumlah selesai minimal 1',
            'production_date.required' => 'Tanggal produksi wajib diisi',
        ];
    }
}
