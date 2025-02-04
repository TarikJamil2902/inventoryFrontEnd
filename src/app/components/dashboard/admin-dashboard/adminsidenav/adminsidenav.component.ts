import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsidenav',
  templateUrl: './adminsidenav.component.html',
  styleUrls: ['./adminsidenav.component.scss']
})
export class AdminsidenavComponent {
  isCollapsed = false;

  menuItems = [
    { label: 'Dashboard', icon: 'fas fa-home', link: '/admin/dashboard' },
    { label: 'Users', icon: 'fas fa-user', link: '/admin/users' },  // Manage all users
    { label: 'Orders', icon: 'fas fa-shopping-cart', link: '/admin/orders' },
    { label: 'Payments', icon: 'fas fa-credit-card', link: '/admin/payments' },
    { label: 'Shipments', icon: 'fas fa-truck', link: '/admin/shipments' },
    { label: 'Returns', icon: 'fas fa-undo', link: '/admin/returns' },
    { label: 'Inventory', icon: 'fas fa-boxes', link: '/admin/inventory' },
    { label: 'Products', icon: 'fas fa-cube', link: '/admin/products' },
    { label: 'Categories', icon: 'fas fa-list', link: '' },
    { label: 'Suppliers', icon: 'fas fa-truck', link: '/admin/suppliers' },
    { label: 'Purchase Orders', icon: 'fas fa-file-invoice', link: '/admin/purchase-orders' },
    { label: 'Employees', icon: 'fas fa-user-tie', link: '/admin/employees' },
    { label: 'Discounts', icon: 'fas fa-tag', link: '/admin/discounts' },
    { label: 'Reports', icon: 'fas fa-chart-line', link: '/admin/reports' },
    { label: 'Audit Log', icon: 'fas fa-file-alt', link: '/admin/audit-log' },
    { label: 'Notifications', icon: 'fas fa-bell', link: '/admin/notifications' },
    { label: 'Settings', icon: 'fas fa-cogs', link: '/admin/settings' },
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
