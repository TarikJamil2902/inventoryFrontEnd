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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },

  { path: 'categorylist', component: ListcategoryComponent },
  { path: 'createcategory', component: CreatecategoryComponent },
  { path: 'updatecategory/:Id', component: UpdatecategoryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'manager', component: ManagerDashboardComponent },
  { path: 'employeedashboard', component: EmployeeDashboardComponent },
  { path: 'supplier', component: SupplierDashboardComponent },
  { path: 'customerdashboard', component: CustomerDashboardComponent },
  { path: 'adminesidenav', component: AdminsidenavComponent },
  { path: 'managersidenav', component: ManagersidenavComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
