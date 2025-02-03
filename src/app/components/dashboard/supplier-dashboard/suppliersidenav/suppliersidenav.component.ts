import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppliersidenav',
  templateUrl: './suppliersidenav.component.html',
  styleUrls: ['./suppliersidenav.component.scss']
})
export class SuppliersidenavComponent {
isCollapsed = false;

menuItems = [
  { label: 'Dashboard', icon: 'fas fa-home', link: '/supplier/dashboard' },
  { label: 'Purchase Orders', icon: 'fas fa-boxes', link: '/supplier/purchase-orders' },
  { label: 'Payments & Invoices', icon: 'fas fa-credit-card', link: '/supplier/payments' },
  { label: 'Products', icon: 'fas fa-cube', link: '/supplier/products' },
  { label: 'Reports & Performance', icon: 'fas fa-chart-line', link: '/supplier/reports' },
  { label: 'Company Info', icon: 'fas fa-building', link: '/supplier/company-info' },
  { label: 'Logout', icon: 'fas fa-sign-out-alt', link: '/logout' }
];


  constructor(private router: Router) {}

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  navigate(link: string) {
    this.router.navigate([link]);
  }
}
