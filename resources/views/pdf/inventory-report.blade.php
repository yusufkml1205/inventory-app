<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Inventory Report</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 11px;
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
            font-size: 20px;
            color: #333;
        }
        .header p {
            margin: 5px 0;
            color: #666;
        }
        .info {
            margin-bottom: 20px;
        }
        .materials-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        .materials-table th {
            background-color: #f0f0f0;
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            font-weight: bold;
            font-size: 10px;
        }
        .materials-table td {
            border: 1px solid #ddd;
            padding: 6px;
            font-size: 10px;
        }
        .materials-table .text-right {
            text-align: right;
        }
        .materials-table .text-center {
            text-align: center;
        }
        .low-stock {
            background-color: #fee;
        }
        .summary {
            margin-top: 20px;
            padding: 15px;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
        }
        .summary table {
            width: 100%;
        }
        .summary td {
            padding: 5px;
        }
        .summary .label {
            font-weight: bold;
            width: 200px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>INVENTORY REPORT</h1>
        <p>CV Posteak Furniture</p>
        <p>Material Stock Report</p>
    </div>

    <div class="info">
        <p><strong>Generated At:</strong> {{ $generatedAt->format('d/m/Y H:i') }}</p>
    </div>

    <table class="materials-table">
        <thead>
            <tr>
                <th class="text-center" width="5%">No</th>
                <th width="12%">Code</th>
                <th width="20%">Material Name</th>
                <th width="15%">Category</th>
                <th width="8%">Unit</th>
                <th class="text-right" width="10%">Current Stock</th>
                <th class="text-right" width="10%">Min Stock</th>
                <th class="text-right" width="10%">Price/Unit</th>
                <th class="text-right" width="10%">Stock Value</th>
            </tr>
        </thead>
        <tbody>
            @foreach($materials as $index => $material)
            <tr class="{{ $material->current_stock <= $material->min_stock ? 'low-stock' : '' }}">
                <td class="text-center">{{ $index + 1 }}</td>
                <td>{{ $material->code }}</td>
                <td>{{ $material->name }}</td>
                <td>{{ $material->category }}</td>
                <td>{{ $material->unit }}</td>
                <td class="text-right">{{ number_format($material->current_stock, 0) }}</td>
                <td class="text-right">{{ number_format($material->min_stock, 0) }}</td>
                <td class="text-right">Rp {{ number_format($material->price_per_unit, 2) }}</td>
                <td class="text-right">Rp {{ number_format($material->current_stock * $material->price_per_unit, 2) }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div class="summary">
        <table>
            <tr>
                <td class="label">Total Items:</td>
                <td><strong>{{ count($materials) }}</strong></td>
            </tr>
            <tr>
                <td class="label">Low Stock Items:</td>
                <td><strong style="color: #d00;">{{ $materials->filter(fn($m) => $m->current_stock <= $m->min_stock)->count() }}</strong></td>
            </tr>
            <tr>
                <td class="label">Total Inventory Value:</td>
                <td><strong>Rp {{ number_format($totalValue, 2) }}</strong></td>
            </tr>
        </table>
    </div>

    <p style="margin-top: 30px; font-size: 9px; color: #666;">
        Note: Items highlighted in red are at or below minimum stock level.
    </p>
</body>
</html>
