import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/external/footer/footer.component';
import { NavbarComponent } from './components/external/navbar/navbar.component';
import { HomeComponent } from './components/external/home/home.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor.service';

import { CategoryComponent } from './components/category/category.component';
import { CategoryService } from './services/category.service';
import { CreatecategoryComponent } from './components/category/createcategory/createcategory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './dashboard/userdashboard/userdashboard.component';
import { ModeratordashboardComponent } from './dashboard/moderatordashboard/moderatordashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,

    CategoryComponent,
    CreatecategoryComponent,
    DashboardComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    ModeratordashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    CategoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
