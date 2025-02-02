import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/external/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './components/category/category.component';
import { UserdashboardComponent } from './dashboard/userdashboard/userdashboard.component';
import { ModeratordashboardComponent } from './dashboard/moderatordashboard/moderatordashboard.component';
import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';

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
  { path: 'categories', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
