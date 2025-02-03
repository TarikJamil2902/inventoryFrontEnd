import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/external/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UserdashboardComponent } from './dashboard/userdashboard/userdashboard.component';
import { ModeratordashboardComponent } from './dashboard/moderatordashboard/moderatordashboard.component';
import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';
import { ListcategoryComponent } from './components/internal/category/listcategory/listcategory.component';
import { CreatecategoryComponent } from './components/internal/category/createcategory/createcategory.component';
import { UpdatecategoryComponent } from './components/internal/category/updatecategory/updatecategory.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'admindashboard', component: AdmindashboardComponent },
      { path: 'userdashboard', component: UserdashboardComponent },
      { path: 'moderatordashboard', component: ModeratordashboardComponent },
    ]
  },
  { path: 'categorylist', component: ListcategoryComponent },
  { path: 'createcategory', component: CreatecategoryComponent },
  { path: 'updatecategory/:Id', component: UpdatecategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
