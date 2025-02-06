import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managersidenav',
  templateUrl: './managersidenav.component.html',
  styleUrls: ['./managersidenav.component.scss']
})
export class ManagersidenavComponent {
 isCollapsed = false;

//  menuItems = [
//   { label: 'Dashboard', icon: 'fas fa-home', link: '/manager/dashboard' },
//   { label: 'Inventory', icon: 'fas fa-boxes', link: '/manager/inventory' },
//   { label: 'Orders', icon: 'fas fa-shopping-cart', link: '/manager/orders' },
//   { label: 'Shipments', icon: 'fas fa-truck', link: '/manager/shipments' },
//   { label: 'Purchase Orders', icon: 'fas fa-file-invoice', link: '/manager/purchase-orders' },
//   { label: 'Suppliers', icon: 'fas fa-truck', link: '/manager/suppliers' },
//   { label: 'Employees', icon: 'fas fa-users-cog', link: '/employeelist' },
//   { label: 'Reports', icon: 'fas fa-chart-line', link: '/manager/reports' },
//   { label: 'Logout', icon: 'fas fa-sign-out-alt', link: '/logout' }
// ];

menuItems = [
  { label: 'Dashboard', icon: 'fas fa-home', link: '/admin/dashboard', subItems: [], showSubmenu: false },
  { label: 'Users', icon: 'fas fa-user', link: '/admin/users', subItems: [], showSubmenu: false },
  { label: 'Orders', icon: 'fas fa-shopping-cart', link: '/orderlist', subItems: [], showSubmenu: false },
  { label: 'Customers', icon: 'fas fa-shopping-cart', link: '/customerlist', subItems: [], showSubmenu: false },
  { label: 'Payments', icon: 'fas fa-credit-card', link: '/paymentlist', subItems: [], showSubmenu: false },
  { label: 'Shipments', icon: 'fas fa-truck', link: '/shipmentlist', subItems: [], showSubmenu: false },
  { label: 'Returns', icon: 'fas fa-undo', link: '/returnlist', subItems: [], showSubmenu: false },
  { label: 'Inventory', icon: 'fas fa-boxes', link: '/inventorylist', subItems: [], showSubmenu: false },
  { label: 'Products', icon: 'fas fa-cube', link: '/productlist', subItems: [], showSubmenu: false },
  { label: 'Categories', icon: 'fas fa-list', link: '/categorylist', subItems: [], showSubmenu: false },
  { label: 'Suppliers', icon: 'fas fa-truck', link: '/supplierlist', subItems: [], showSubmenu: false },
  { label: 'Purchase Orders', icon: 'fas fa-file-invoice', link: '/purchaseorderlist', subItems: [], showSubmenu: false },
  { label: 'Employees', icon: 'fas fa-user-tie', link: '/employeelist', subItems: [], showSubmenu: false },
  { label: 'Discounts', icon: 'fas fa-tag', link: '/discountlist', subItems: [], showSubmenu: false },
  { label: 'Reports', icon: 'fas fa-chart-line', link: '/reportlist', subItems: [], showSubmenu: false },
  { label: 'Audit Log', icon: 'fas fa-file-alt', link: '/auditloglist', subItems: [], showSubmenu: false },
  { label: 'Notifications', icon: 'fas fa-bell', link: '/notificationlist', subItems: [], showSubmenu: false },
  { label: 'Settings', icon: 'fas fa-cogs', link: '/settings', subItems: [], showSubmenu: false },
  { label: 'Logout', icon: 'fas fa-sign-out-alt', link: '/logout', subItems: [], showSubmenu: false }
];


  constructor(private router: Router) {}

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  navigate(link: string) {
    this.router.navigate([link]);
  }
}


