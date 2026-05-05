import DashboardController from './DashboardController'
import MaterialController from './MaterialController'
import ProductController from './ProductController'
import SupplierController from './SupplierController'
import CustomerController from './CustomerController'
import PurchaseOrderController from './PurchaseOrderController'
import GoodsReceiptController from './GoodsReceiptController'
import StockAdjustmentController from './StockAdjustmentController'
import WorkOrderController from './WorkOrderController'
import MaterialIssueController from './MaterialIssueController'
import FinishedGoodController from './FinishedGoodController'
import DeliveryOrderController from './DeliveryOrderController'
import LaporanController from './LaporanController'
import Settings from './Settings'
const Controllers = {
    DashboardController: Object.assign(DashboardController, DashboardController),
MaterialController: Object.assign(MaterialController, MaterialController),
ProductController: Object.assign(ProductController, ProductController),
SupplierController: Object.assign(SupplierController, SupplierController),
CustomerController: Object.assign(CustomerController, CustomerController),
PurchaseOrderController: Object.assign(PurchaseOrderController, PurchaseOrderController),
GoodsReceiptController: Object.assign(GoodsReceiptController, GoodsReceiptController),
StockAdjustmentController: Object.assign(StockAdjustmentController, StockAdjustmentController),
WorkOrderController: Object.assign(WorkOrderController, WorkOrderController),
MaterialIssueController: Object.assign(MaterialIssueController, MaterialIssueController),
FinishedGoodController: Object.assign(FinishedGoodController, FinishedGoodController),
DeliveryOrderController: Object.assign(DeliveryOrderController, DeliveryOrderController),
LaporanController: Object.assign(LaporanController, LaporanController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers