<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Sales Report</title>
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
        .sales-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        .sales-table th {
            background-color: #f0f0f0;
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            font-weight: bold;
            font-size: 10px;
        }
        .sales-table td {
            border: 1px solid #ddd;
            padding: 6px;
            font-size: 10px;
        }
        .sales-table .text-right {
            text-align: right;
        }
        .sales-table .text-center {
            text-align: center;
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
        .summary .highlight {
            font-size: 13px;
            color: #060;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>SALES REPORT</h1>
        <p>CV Posteak Furniture</p>
        <p>Delivery Orders Report</p>
    </div>

    <div class="info">
        <p><strong>Period:</strong> {{ \Carbon\Carbon::parse($startDate)->format('d/m/Y') }} - {{ \Carbon\Carbon::parse($endDate)->format('d/m/Y') }}</p>
        <p><strong>Generated At:</strong> {{ $generatedAt->format('d/m/Y H:i') }}</p>
    </div>

    <table class="sales-table">
        <thead>
            <tr>
                <th class="text-center" width="5%">No</th>
                <th width="15%">DO Number</th>
                <th width="12%">Date</th>
                <th width="23%">Customer Name</th>
                <th class="text-center" width="10%">Status</th>
                <th class="text-right" width="13%">Total Amount</th>
                <th class="text-right" width="12%">Cost</th>
                <th class="text-right" width="10%">Profit</th>
            </tr>
        </thead>
        <tbody>
            @foreach($deliveryOrders as $index => $do)
            <tr>
                <td class="text-center">{{ $index + 1 }}</td>
                <td>{{ $do->do_number }}</td>
                <td>{{ $do->created_at->format('d/m/Y') }}</td>
                <td>{{ $do->customer->name }}</td>
                <td class="text-center">{{ $do->status }}</td>
                <td class="text-right">Rp {{ number_format($do->total_amount, 2) }}</td>
                <td class="text-right">Rp {{ number_format($do->total_cost, 2) }}</td>
                <td class="text-right">Rp {{ number_format($do->total_amount - $do->total_cost, 2) }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div class="summary">
        <table>
            <tr>
                <td class="label">Total Orders:</td>
                <td><strong>{{ count($deliveryOrders) }}</strong></td>
            </tr>
            <tr>
                <td class="label">Total Revenue:</td>
                <td><strong>Rp {{ number_format($totalRevenue, 2) }}</strong></td>
            </tr>
            <tr>
                <td class="label">Total Profit:</td>
                <td class="highlight"><strong>Rp {{ number_format($totalProfit, 2) }}</strong></td>
            </tr>
            <tr>
                <td class="label">Profit Margin:</td>
                <td><strong>{{ $totalRevenue > 0 ? number_format(($totalProfit / $totalRevenue) * 100, 2) : 0 }}%</strong></td>
            </tr>
        </table>
    </div>
</body>
</html>
