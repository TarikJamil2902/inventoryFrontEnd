import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/external/footer/footer.component';
import { NavbarComponent } from './components/external/navbar/navbar.component';
import { HomeComponent } from './components/external/home/home.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor.service';

import { CategoryService } from './services/category.service';
import { CustomerService } from './services/customer.service';

import { CreatecategoryComponent } from './components/internal/category/createcategory/createcategory.component';
import { ListcategoryComponent } from './components/internal/category/listcategory/listcategory.component';
import { UpdatecategoryComponent } from './components/internal/category/updatecategory/updatecategory.component';
import { AboutComponent } from './components/external/about/about.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { ManagerDashboardComponent } from './components/dashboard/manager-dashboard/manager-dashboard.component';
import { EmployeeDashboardComponent } from './components/dashboard/employee-dashboard/employee-dashboard.component';
import { CustomerDashboardComponent } from './components/dashboard/customer-dashboard/customer-dashboard.component';
import { SupplierDashboardComponent } from './components/dashboard/supplier-dashboard/supplier-dashboard.component';
import { AdminsidenavComponent } from './components/dashboard/admin-dashboard/adminsidenav/adminsidenav.component';
import { ManagersidenavComponent } from './components/dashboard/manager-dashboard/managersidenav/managersidenav.component';
import { CustomersidenavComponent } from './components/dashboard/customer-dashboard/customersidenav/customersidenav.component';
import { EmployeesidenavComponent } from './components/dashboard/employee-dashboard/employeesidenav/employeesidenav.component';
import { SuppliersidenavComponent } from './components/dashboard/supplier-dashboard/suppliersidenav/suppliersidenav.component';
import { CustomerlistComponent } from './components/internal/customer/customerlist/customerlist.component';
import { UpdatecustomerComponent } from './components/internal/customer/updatecustomer/updatecustomer.component';
import { CreatecustomerComponent } from './components/internal/customer/createcustomer/createcustomer.component'; // Added

import { ReactiveFormsModule } from '@angular/forms';
import { CreateauditlogComponent } from './components/internal/auditlog/createauditlog/createauditlog.component';
import { UpdateauditlogComponent } from './components/internal/auditlog/updateauditlog/updateauditlog.component';
import { AuditloglistComponent } from './components/internal/auditlog/auditloglist/auditloglist.component';
import { CreatediscountComponent } from './components/internal/discount/creatediscount/creatediscount.component';
import { UpdatediscountComponent } from './components/internal/discount/updatediscount/updatediscount.component';
import { DiscountlistComponent } from './components/internal/discount/discountlist/discountlist.component';
import { EmployeelistComponent } from './components/internal/employee/employeelist/employeelist.component';
import { UpdateemployeeComponent } from './components/internal/employee/updateemployee/updateemployee.component';
import { CreateemployeeComponent } from './components/internal/employee/createemployee/createemployee.component';
import { InventorylistComponent } from './components/internal/inventory/inventorylist/inventorylist.component';
import { UpdateinventoryComponent } from './components/internal/inventory/updateinventory/updateinventory.component';
import { CreateinventoryComponent } from './components/internal/inventory/createinventory/createinventory.component';
import { NotificationlistComponent } from './components/internal/notification/notificationlist/notificationlist.component';
import { UpdatenotificationComponent } from './components/internal/notification/updatenotification/updatenotification.component';
import { OrderlistComponent } from './components/internal/order/orderlist/orderlist.component';
import { UpdateorderComponent } from './components/internal/order/updateorder/updateorder.component';
import { OrderitemlistComponent } from './components/internal/orderitem/orderitemlist/orderitemlist.component';
import { UpdateorderitemComponent } from './components/internal/orderitem/updateorderitem/updateorderitem.component';
import { CreateOrderItemComponent } from './components/internal/orderitem/createorderitem/createorderitem.component';
import { PaymentlistComponent } from './components/internal/payment/paymentlist/paymentlist.component';
import { UpdatepaymentComponent } from './components/internal/payment/updatepayment/updatepayment.component';
import { CreatePaymentComponent } from './components/internal/payment/createpayment/createpayment.component';
import { ProductlistComponent } from './components/internal/product/productlist/productlist.component';
import { CreatepurchaseorderComponent } from './components/internal/purchaseorder/createpurchaseorder/createpurchaseorder.component';
import { PurchaseorderlistComponent } from './components/internal/purchaseorder/purchaseorderlist/purchaseorderlist.component';
import { ReportlistComponent } from './components/internal/report/reportlist/reportlist.component';
import { CreatereportComponent } from './components/internal/report/createreport/createreport.component';
import { ReturnlistComponent } from './components/internal/return/returnlist/returnlist.component';
import { CreatereturnComponent } from './components/internal/return/createreturn/createreturn.component';
import { ShipmentlistComponent } from './components/internal/shipment/shipmentlist/shipmentlist.component';
import { CreateshipmentComponent } from './components/internal/shipment/createshipment/createshipment.component';
import { SupplierlistComponent } from './components/internal/supplier/supplierlist/supplierlist.component';
import { CreatesupplierComponent } from './components/internal/supplier/createsupplier/createsupplier.component';
import { TaxlistComponent } from './components/internal/tax/taxlist/taxlist.component';
import { CreatetaxComponent } from './components/internal/tax/createtax/createtax.component';
import { WarehouselistComponent } from './components/internal/warehouse/warehouselist/warehouselist.component';
import { CreatewarehouseComponent } from './components/internal/warehouse/createwarehouse/createwarehouse.component';
import { UpdateProductComponent } from './components/internal/product/updateproduct/updateproduct.component';
import { UpdatePurchaseOrderComponent } from './components/internal/purchaseorder/updatepurchaseorder/updatepurchaseorder.component';
import { UpdateReportComponent } from './components/internal/report/updatereport/updatereport.component';
import { UpdateReturnComponent } from './components/internal/return/updatereturn/updatereturn.component';
import { UpdateShipmentComponent } from './components/internal/shipment/updateshipment/updateshipment.component';
import { UpdateSupplierComponent } from './components/internal/supplier/updatesupplier/updatesupplier.component';
import { UpdateTaxComponent } from './components/internal/tax/updatetax/updatetax.component';
import { UpdateWarehouseComponent } from './components/internal/warehouse/updatewarehouse/updatewarehouse.component';
import { CreateNotificationComponent } from './components/internal/notification/createnotification/createnotification.component';
import { CreateOrderComponent } from './components/internal/order/createorder/createorder.component';
import { CreateProductComponent } from './components/internal/product/createproduct/createproduct.component';
import { AdminLandingComponent } from './components/dashboard/admin-dashboard/admin-landing/admin-landing.component';
import { ManagerLandingComponent } from './components/dashboard/manager-dashboard/manager-landing/manager-landing.component';
import { EmployeeLandingComponent } from './components/dashboard/employee-dashboard/employee-landing/employee-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CreatecategoryComponent,
    ListcategoryComponent,
    UpdatecategoryComponent,
    AboutComponent,
    AdminDashboardComponent,
    ManagerDashboardComponent,
    EmployeeDashboardComponent,
    CustomerDashboardComponent,
    SupplierDashboardComponent,
    AdminsidenavComponent,
    ManagersidenavComponent,
    CustomersidenavComponent,
    EmployeesidenavComponent,
    SuppliersidenavComponent,
    CustomerlistComponent,
    UpdatecustomerComponent,
    CreatecustomerComponent,
    CreateauditlogComponent,
    UpdateauditlogComponent,
    AuditloglistComponent,
    CreatediscountComponent,
    UpdatediscountComponent,
    DiscountlistComponent,
    EmployeelistComponent,
    UpdateemployeeComponent,
    CreateemployeeComponent,
    InventorylistComponent,
    UpdateinventoryComponent,
    CreateinventoryComponent,
    NotificationlistComponent,
    UpdatenotificationComponent,
    CreateNotificationComponent,
    OrderlistComponent,
    UpdateorderComponent,
    CreateOrderComponent,
    OrderitemlistComponent,
    UpdateorderitemComponent,
    CreateOrderItemComponent,
    PaymentlistComponent,
    UpdatepaymentComponent,
    CreatePaymentComponent,
    ProductlistComponent,
    UpdateProductComponent,
    CreatePaymentComponent,
    CreateProductComponent,
    UpdatePurchaseOrderComponent,
    UpdateReportComponent,
    UpdateReturnComponent,
    UpdateShipmentComponent,
    UpdateSupplierComponent,
    UpdateTaxComponent,
    UpdateWarehouseComponent,
    CreatepurchaseorderComponent,
    PurchaseorderlistComponent,
    ReportlistComponent,

    CreatereportComponent,
    ReturnlistComponent,

    CreatereturnComponent,
    ShipmentlistComponent,

    CreateshipmentComponent,
    SupplierlistComponent,

    CreatesupplierComponent,
    TaxlistComponent,

    CreatetaxComponent,
    WarehouselistComponent,

    CreatewarehouseComponent,
      AdminLandingComponent,
      ManagerLandingComponent,
      EmployeeLandingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    CategoryService,
    CustomerService // Added
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
