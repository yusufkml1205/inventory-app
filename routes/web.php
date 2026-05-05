<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DeliveryOrderController;
use App\Http\Controllers\FinishedGoodController;
use App\Http\Controllers\GoodsReceiptController;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\MaterialIssueController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PurchaseOrderController;
use App\Http\Controllers\StockAdjustmentController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\WorkOrderController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Master Data Routes
    Route::prefix('masterdata')->name('masterdata.')->group(function () {
        Route::inertia('/', 'masterdata/index')->name('index');
        Route::resource('materials', MaterialController::class);
        Route::resource('products', ProductController::class);
        Route::resource('suppliers', SupplierController::class);
        Route::resource('customers', CustomerController::class);
    });

    // Transaksi Pembelian Routes
    Route::prefix('transaksi')->name('transaksi.')->group(function () {
        Route::inertia('/', 'transaksi/index')->name('index');
        Route::resource('purchase-orders', PurchaseOrderController::class);
        Route::get('purchase-orders/{purchaseOrder}/pdf', [PurchaseOrderController::class, 'generatePdf'])->name('purchase-orders.pdf');
        Route::resource('goods-receipts', GoodsReceiptController::class);
    });

    // Adjust Stock Routes
    Route::prefix('adjust')->name('adjust.')->group(function () {
        Route::get('/', [StockAdjustmentController::class, 'index'])->name('index');
        Route::get('/create', [StockAdjustmentController::class, 'create'])->name('create');
        Route::post('/', [StockAdjustmentController::class, 'store'])->name('store');
        Route::get('/{stockAdjustment}', [StockAdjustmentController::class, 'show'])->name('show');
        Route::get('/{stockAdjustment}/edit', [StockAdjustmentController::class, 'edit'])->name('edit');
        Route::put('/{stockAdjustment}', [StockAdjustmentController::class, 'update'])->name('update');
        Route::delete('/{stockAdjustment}', [StockAdjustmentController::class, 'destroy'])->name('destroy');
    });

    // Transaksi Produksi Routes
    Route::prefix('produksi')->group(function () {
        Route::inertia('/', 'produksi/index')->name('produksi.index');
        Route::resource('work-orders', WorkOrderController::class);
        Route::resource('material-issues', MaterialIssueController::class)->except(['edit', 'update']);
        Route::resource('finished-goods', FinishedGoodController::class)->except(['edit', 'update']);
    });

    // Transaksi Penjualan Routes
    Route::prefix('penjualan')->group(function () {
        Route::inertia('/', 'penjualan/index')->name('penjualan.index');
        Route::resource('delivery-orders', DeliveryOrderController::class);
        Route::get('delivery-orders/{deliveryOrder}/pdf', [DeliveryOrderController::class, 'generatePdf'])->name('delivery-orders.pdf');
    });

    // Laporan Routes
    Route::prefix('laporan')->name('laporan.')->group(function () {
        Route::inertia('/', 'laporan/index')->name('index');
        Route::get('/inventory', [LaporanController::class, 'inventory'])->name('inventory');
        Route::get('/inventory/pdf', [LaporanController::class, 'inventoryPdf'])->name('inventory.pdf');
        Route::get('/purchases', [LaporanController::class, 'purchases'])->name('purchases');
        Route::get('/production', [LaporanController::class, 'production'])->name('production');
        Route::get('/sales', [LaporanController::class, 'sales'])->name('sales');
        Route::get('/sales/pdf', [LaporanController::class, 'salesPdf'])->name('sales.pdf');
        Route::get('/profit', [LaporanController::class, 'profit'])->name('profit');
    });
});

require __DIR__.'/settings.php';
