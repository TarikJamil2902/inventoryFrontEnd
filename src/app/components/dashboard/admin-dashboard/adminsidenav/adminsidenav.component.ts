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
    { label: 'Dashboard', icon: 'fas fa-home', link: '/admin/dashboard', subItems: [], showSubmenu: false },
    { label: 'Users', icon: 'fas fa-user', link: '/admin/users', subItems: [], showSubmenu: false },
    { label: 'Orders', icon: 'fas fa-shopping-cart', link: '/orderlist', subItems: [], showSubmenu: false },
    { label: 'Customers', icon: 'fas fa-shopping-cart', link: '/customerlist', subItems: [], showSubmenu: false },
    { label: 'Payments', icon: 'fas fa-credit-card', link: '/admin/payments', subItems: [], showSubmenu: false },
    { label: 'Shipments', icon: 'fas fa-truck', link: '/admin/shipments', subItems: [], showSubmenu: false },
    { label: 'Returns', icon: 'fas fa-undo', link: '/admin/returns', subItems: [], showSubmenu: false },
    { label: 'Inventory', icon: 'fas fa-boxes', link: '/admin/inventory', subItems: [], showSubmenu: false },
    { label: 'Products', icon: 'fas fa-cube', link: '/admin/products', subItems: [
      { label: 'Create Product', link: '/admin/products/create' },
      { label: 'Product List', link: '/admin/products/list' }
    ], showSubmenu: false },
    { label: 'Categories', icon: 'fas fa-list', link: '', subItems: [
      { label: 'Add Category', link: '/admin/categories/add' },
      { label: 'Category List', link: '/admin/categories/list' }
    ], showSubmenu: false },
    { label: 'Suppliers', icon: 'fas fa-truck', link: '/admin/suppliers', subItems: [], showSubmenu: false },
    { label: 'Purchase Orders', icon: 'fas fa-file-invoice', link: '/admin/purchase-orders', subItems: [], showSubmenu: false },
    { label: 'Employees', icon: 'fas fa-user-tie', link: '/employeelist', subItems: [], showSubmenu: false },
    { label: 'Discounts', icon: 'fas fa-tag', link: '/admin/discounts', subItems: [], showSubmenu: false },
    { label: 'Reports', icon: 'fas fa-chart-line', link: '/admin/reports', subItems: [], showSubmenu: false },
    { label: 'Audit Log', icon: 'fas fa-file-alt', link: '/admin/audit-log', subItems: [], showSubmenu: false },
    { label: 'Notifications', icon: 'fas fa-bell', link: '/admin/notifications', subItems: [], showSubmenu: false },
    { label: 'Settings', icon: 'fas fa-cogs', link: '/admin/settings', subItems: [], showSubmenu: false },
    { label: 'Logout', icon: 'fas fa-sign-out-alt', link: '/logout', subItems: [], showSubmenu: false }
  ];

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  navigate(link: string) {
    if (link) {
      this.router.navigate([link]);
    }
  }
}
