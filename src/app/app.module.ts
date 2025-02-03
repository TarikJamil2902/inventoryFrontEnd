import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/external/footer/footer.component';
import { NavbarComponent } from './components/external/navbar/navbar.component';
import { HomeComponent } from './components/external/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor.service';


import { CategoryService } from './services/category.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './dashboard/userdashboard/userdashboard.component';
import { ModeratordashboardComponent } from './dashboard/moderatordashboard/moderatordashboard.component';
import { CreatecategoryComponent } from './components/internal/category/createcategory/createcategory.component';
import { ListcategoryComponent } from './components/internal/category/listcategory/listcategory.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,


    DashboardComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    ModeratordashboardComponent,
    CreatecategoryComponent,
    ListcategoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    CategoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
