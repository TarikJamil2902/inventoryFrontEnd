import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/external/home/home.component';

import { ListcategoryComponent } from './components/internal/category/listcategory/listcategory.component';
import { CreatecategoryComponent } from './components/internal/category/createcategory/createcategory.component';
import { UpdatecategoryComponent } from './components/internal/category/updatecategory/updatecategory.component';
import { AboutComponent } from './components/external/about/about.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { ManagerDashboardComponent } from './components/dashboard/manager-dashboard/manager-dashboard.component';
import { EmployeeDashboardComponent } from './components/dashboard/employee-dashboard/employee-dashboard.component';
import { SupplierDashboardComponent } from './components/dashboard/supplier-dashboard/supplier-dashboard.component';
import { CustomerDashboardComponent } from './components/dashboard/customer-dashboard/customer-dashboard.component';
import { AdminsidenavComponent } from './components/dashboard/admin-dashboard/adminsidenav/adminsidenav.component';
import { ManagersidenavComponent } from './components/dashboard/manager-dashboard/managersidenav/managersidenav.component';
import { CustomerlistComponent } from './components/internal/customer/customerlist/customerlist.component';
import { CreatecustomerComponent } from './components/internal/customer/createcustomer/createcustomer.component';
import { UpdatecustomerComponent } from './components/internal/customer/updatecustomer/updatecustomer.component';
import { PaymentlistComponent } from './components/internal/payment/paymentlist/paymentlist.component';
import { UpdatepaymentComponent } from './components/internal/payment/updatepayment/updatepayment.component';
import { OrderlistComponent } from './components/internal/order/orderlist/orderlist.component';
import { UpdateorderComponent } from './components/internal/order/updateorder/updateorder.component';
import { OrderitemlistComponent } from './components/internal/orderitem/orderitemlist/orderitemlist.component';
import { UpdateorderitemComponent } from './components/internal/orderitem/updateorderitem/updateorderitem.component';
import { WarehouselistComponent } from './components/internal/warehouse/warehouselist/warehouselist.component';
import { CreatewarehouseComponent } from './components/internal/warehouse/createwarehouse/createwarehouse.component';
import { SupplierlistComponent } from './components/internal/supplier/supplierlist/supplierlist.component';
import { CreatesupplierComponent } from './components/internal/supplier/createsupplier/createsupplier.component';
import { ShipmentlistComponent } from './components/internal/shipment/shipmentlist/shipmentlist.component';
import { CreateshipmentComponent } from './components/internal/shipment/createshipment/createshipment.component';
import { ReturnlistComponent } from './components/internal/return/returnlist/returnlist.component';
import { CreatereturnComponent } from './components/internal/return/createreturn/createreturn.component';
import { ReportlistComponent } from './components/internal/report/reportlist/reportlist.component';
import { CreatereportComponent } from './components/internal/report/createreport/createreport.component';
import { PurchaseorderlistComponent } from './components/internal/purchaseorder/purchaseorderlist/purchaseorderlist.component';
import { CreatepurchaseorderComponent } from './components/internal/purchaseorder/createpurchaseorder/createpurchaseorder.component';
import { ProductlistComponent } from './components/internal/product/productlist/productlist.component';
import { NotificationlistComponent } from './components/internal/notification/notificationlist/notificationlist.component';
import { UpdatenotificationComponent } from './components/internal/notification/updatenotification/updatenotification.component';
import { InventorylistComponent } from './components/internal/inventory/inventorylist/inventorylist.component';
import { CreateinventoryComponent } from './components/internal/inventory/createinventory/createinventory.component';
import { UpdateinventoryComponent } from './components/internal/inventory/updateinventory/updateinventory.component';
import { EmployeelistComponent } from './components/internal/employee/employeelist/employeelist.component';
import { CreateemployeeComponent } from './components/internal/employee/createemployee/createemployee.component';
import { UpdateemployeeComponent } from './components/internal/employee/updateemployee/updateemployee.component';
import { DiscountlistComponent } from './components/internal/discount/discountlist/discountlist.component';
import { CreatediscountComponent } from './components/internal/discount/creatediscount/creatediscount.component';
import { UpdatediscountComponent } from './components/internal/discount/updatediscount/updatediscount.component';
import { UpdateauditlogComponent } from './components/internal/auditlog/updateauditlog/updateauditlog.component';
import { CreateauditlogComponent } from './components/internal/auditlog/createauditlog/createauditlog.component';
import { UpdateWarehouseComponent } from './components/internal/warehouse/updatewarehouse/updatewarehouse.component';
import { UpdateSupplierComponent } from './components/internal/supplier/updatesupplier/updatesupplier.component';
import { UpdateShipmentComponent } from './components/internal/shipment/updateshipment/updateshipment.component';
import { UpdateReturnComponent } from './components/internal/return/updatereturn/updatereturn.component';
import { UpdateReportComponent } from './components/internal/report/updatereport/updatereport.component';
import { UpdatePurchaseOrderComponent } from './components/internal/purchaseorder/updatepurchaseorder/updatepurchaseorder.component';
import { UpdateProductComponent } from './components/internal/product/updateproduct/updateproduct.component';
import { CreateNotificationComponent } from './components/internal/notification/createnotification/createnotification.component';
import { CreatePaymentComponent } from './components/internal/payment/createpayment/createpayment.component';
import { CreateOrderComponent } from './components/internal/order/createorder/createorder.component';
import { CreateOrderItemComponent } from './components/internal/orderitem/createorderitem/createorderitem.component';
import { CreateProductComponent } from './components/internal/product/createproduct/createproduct.component';
import { AdminLandingComponent } from './components/dashboard/admin-dashboard/admin-landing/admin-landing.component';
import { ManagerLandingComponent } from './components/dashboard/manager-dashboard/manager-landing/manager-landing.component';
import { EmployeeLandingComponent } from './components/dashboard/employee-dashboard/employee-landing/employee-landing.component';
import { TaxlistComponent } from './components/internal/tax/taxlist/taxlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },


  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'manager', component: ManagerDashboardComponent },
  { path: 'employeedashboard', component: EmployeeDashboardComponent },
  { path: 'supplier', component: SupplierDashboardComponent },
  { path: 'customerdashboard', component: CustomerDashboardComponent },
  { path: 'adminesidenav', component: AdminsidenavComponent },
  { path: 'managersidenav', component: ManagersidenavComponent },




  { path: '', redirectTo: 'manager', pathMatch: 'full' },
  { path: 'manager', component: ManagerLandingComponent },

  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeLandingComponent },


 { path: 'adminesidenav', component: AdminsidenavComponent },
  { path: '', redirectTo: 'admin', pathMatch: 'full' },


  { path: 'admin', component: AdminDashboardComponent ,
    children: [
      { path: '', component: AdminLandingComponent },
      { path: 'orderitemlist', component: OrderitemlistComponent },

      { path: 'createorderitem', component: CreateOrderItemComponent },
      { path: 'updateorderitem/:Id', component: UpdateorderitemComponent },

      { path: 'paymentlist', component: PaymentlistComponent },
      { path: 'createpayment', component: CreatePaymentComponent },
      { path: 'updatepayment/:Id', component: UpdatepaymentComponent },
      { path: 'categorylist', component: ListcategoryComponent },
      { path: 'createcategory', component: CreatecategoryComponent },
      { path: 'updatecategory/:Id', component: UpdatecategoryComponent },
      { path: 'orderlist', component: OrderlistComponent },
      { path: 'createorder', component: CreateOrderComponent },
      { path: 'updateorder/:Id', component: UpdateorderComponent },



      { path: 'customerlist', component: CustomerlistComponent },
      { path: 'createcustomer', component: CreatecustomerComponent },
      { path: 'updatecustomer/:Id', component: UpdatecustomerComponent },

      { path: 'warehouselist', component: WarehouselistComponent },
      { path: 'createwarehouse', component: CreatewarehouseComponent },
      { path: 'updatewarehouse/:Id', component: UpdateWarehouseComponent },

      { path: 'supplierlist', component: SupplierlistComponent },
      { path: 'createsupplier', component: CreatesupplierComponent },
      { path: 'updatesupplier/:Id', component: UpdateSupplierComponent },

      { path: 'shipmentlist', component: ShipmentlistComponent },
      { path: 'createshipment', component: CreateshipmentComponent },
      { path: 'updateshipment/:Id', component: UpdateShipmentComponent },

      { path: 'returnlist', component: ReturnlistComponent },
      { path: 'createreturn', component: CreatereturnComponent },
      { path: 'updatereturn/:Id', component: UpdateReturnComponent },

      { path: 'reportlist', component: ReportlistComponent },
      { path: 'createreport', component: CreatereportComponent },
      { path: 'updatereport/:Id', component: UpdateReportComponent },

      { path: 'purchaseorderlist', component: PurchaseorderlistComponent },
      { path: 'createpurchaseorder', component: CreatepurchaseorderComponent },
      { path: 'updatepurchaseorder/:Id', component: UpdatePurchaseOrderComponent },

      { path: 'productlist', component: ProductlistComponent },
      { path: 'createproduct', component: CreateProductComponent },
      { path: 'updateproduct/:Id', component: UpdateProductComponent },

      { path: 'orderitemlist', component: OrderitemlistComponent },
      { path: 'createorderitem', component: CreateOrderItemComponent },
      { path: 'updateorderitem/:Id', component: UpdateorderitemComponent },

      { path: 'notificationlist', component: NotificationlistComponent },
      { path: 'createnotification', component: CreateNotificationComponent },
      { path: 'updatenotification/:Id', component: UpdatenotificationComponent },

      { path: 'inventorylist', component: InventorylistComponent },
      { path: 'createinventory', component: CreateinventoryComponent },
      { path: 'updateinventory/:Id', component: UpdateinventoryComponent },

      { path: 'employeelist', component: EmployeelistComponent },
      { path: 'createemployee', component: CreateemployeeComponent },
      { path: 'updateemployee/:Id', component: UpdateemployeeComponent },

      { path: 'discountlist', component: DiscountlistComponent },
      { path: 'creatediscount', component: CreatediscountComponent },
      { path: 'updatediscount/:Id', component: UpdatediscountComponent },

      { path: 'auditloglist', component: SupplierlistComponent },
      { path: 'createauditlog', component: CreateauditlogComponent },
      { path: 'updateauditlog/:Id', component: UpdateauditlogComponent },


    ]

  },
  { path: '', redirectTo: 'admindashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
