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
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    CategoryComponent
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
