import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/external/footer/footer.component';
import { NavbarComponent } from './components/external/navbar/navbar.component';
import { HomeComponent } from './components/external/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor.service';


import { CategoryService } from './services/category.service';


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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    CategoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
