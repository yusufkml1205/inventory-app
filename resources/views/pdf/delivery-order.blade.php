<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Delivery Order - {{ $deliveryOrder->do_number }}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 12px;
            margin: 0;
            padding: 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #333;
            padding-bottom: 10px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            color: #333;
        }
        .header p {
            margin: 5px 0;
            color: #666;
        }
        .info-section {
            margin-bottom: 20px;
        }
        .info-table {
            width: 100%;
            margin-bottom: 20px;
        }
        .info-table td {
            padding: 5px;
            vertical-align: top;
        }
        .info-table .label {
            font-weight: bold;
            width: 150px;
        }
        .items-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        .items-table th {
            background-color: #f0f0f0;
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
            font-weight: bold;
        }
        .items-table td {
            border: 1px solid #ddd;
            padding: 8px;
        }
        .items-table .text-right {
            text-align: right;
        }
        .items-table .text-center {
            text-align: center;
        }
        .totals {
            float: right;
            width: 300px;
        }
        .totals table {
            width: 100%;
        }
        .totals td {
            padding: 5px;
        }
        .totals .label {
            text-align: right;
            font-weight: bold;
        }
        .totals .grand-total {
            font-size: 14px;
            font-weight: bold;
            border-top: 2px solid #333;
            padding-top: 10px;
        }
        .footer {
            margin-top: 50px;
            clear: both;
        }
        .signature-area {
            margin-top: 50px;
        }
        .signature-box {
            display: inline-block;
            width: 200px;
            text-align: center;
            margin-right: 30px;
        }
        .signature-line {
            border-top: 1px solid #333;
            margin-top: 60px;
            padding-top: 5px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>DELIVERY ORDER</h1>
        <p>CV Posteak Furniture</p>
        <p>Jl. Furniture No. 123, Semarang, Indonesia</p>
        <p>Telp: (024) 1234567</p>
    </div>

    <table class="info-table">
        <tr>
            <td class="label">DO Number:</td>
            <td>{{ $deliveryOrder->do_number }}</td>
            <td class="label">Status:</td>
            <td><strong>{{ $deliveryOrder->status }}</strong></td>
        </tr>
        <tr>
            <td class="label">Customer:</td>
            <td>{{ $deliveryOrder->customer->name }}</td>
            <td class="label">SO Reference:</td>
            <td>{{ $deliveryOrder->sales_order_reference ?? '-' }}</td>
        </tr>
        <tr>
            <td class="label">Customer Code:</td>
            <td>{{ $deliveryOrder->customer->code }}</td>
            <td class="label">Created By:</td>
            <td>{{ $deliveryOrder->createdBy?->name ?? '-' }}</td>
        </tr>
        <tr>
            <td class="label">Address:</td>
            <td colspan="3">
                {{ $deliveryOrder->customer->address ?? '-' }}
                @if($deliveryOrder->customer->city), {{ $deliveryOrder->customer->city }}@endif
                @if($deliveryOrder->customer->country), {{ $deliveryOrder->customer->country }}@endif
            </td>
        </tr>
        <tr>
            <td class="label">Phone:</td>
            <td>{{ $deliveryOrder->customer->phone ?? '-' }}</td>
            <td class="label">Expected Delivery:</td>
            <td>{{ $deliveryOrder->expected_delivery_date ? $deliveryOrder->expected_delivery_date->format('d/m/Y') : '-' }}</td>
        </tr>
        <tr>
            <td class="label">Shipment Method:</td>
            <td>{{ $deliveryOrder->shipment_method ?? '-' }}</td>
            <td class="label">Actual Delivery:</td>
            <td>{{ $deliveryOrder->actual_delivery_date ? $deliveryOrder->actual_delivery_date->format('d/m/Y') : '-' }}</td>
        </tr>
        <tr>
            <td class="label">Container Number:</td>
            <td>{{ $deliveryOrder->container_number ?? '-' }}</td>
            <td class="label">Shipping Line:</td>
            <td>{{ $deliveryOrder->shipping_line ?? '-' }}</td>
        </tr>
    </table>

    <table class="items-table">
        <thead>
            <tr>
                <th class="text-center" width="5%">No</th>
                <th width="40%">Product Name</th>
                <th width="10%">Unit</th>
                <th class="text-right" width="10%">Quantity</th>
                <th class="text-right" width="15%">Unit Price</th>
                <th class="text-right" width="20%">Subtotal</th>
            </tr>
        </thead>
        <tbody>
            @foreach($deliveryOrder->items as $index => $item)
            <tr>
                <td class="text-center">{{ $index + 1 }}</td>
                <td>{{ $item->product_name }}</td>
                <td>{{ $item->unit }}</td>
                <td class="text-right">{{ number_format($item->quantity, 0) }}</td>
                <td class="text-right">Rp {{ number_format($item->unit_price, 2) }}</td>
                <td class="text-right">Rp {{ number_format($item->subtotal, 2) }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div class="totals">
        <table>
            <tr class="grand-total">
                <td class="label">Total Amount:</td>
                <td class="text-right">Rp {{ number_format($deliveryOrder->total_amount, 2) }}</td>
            </tr>
        </table>
    </div>

    @if($deliveryOrder->notes)
    <div class="footer">
        <strong>Notes:</strong>
        <p>{{ $deliveryOrder->notes }}</p>
    </div>
    @endif

    <div class="signature-area">
        <div class="signature-box">
            <div class="signature-line">
                Authorized By
            </div>
        </div>
        <div class="signature-box">
            <div class="signature-line">
                Driver
            </div>
        </div>
        <div class="signature-box">
            <div class="signature-line">
                Customer Representative
            </div>
        </div>
    </div>

    <p style="margin-top: 30px; font-size: 10px; color: #666; text-align: center;">
        This is a computer-generated document. No signature is required.
    </p>
</body>
</html>
