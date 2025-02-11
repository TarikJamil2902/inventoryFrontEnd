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
    // { label: 'Dashboard', icon: 'fas fa-home', link: '/admin/dashboard', subItems: [], showSubmenu: false },
    // { label: 'Users', icon: 'fas fa-user', link: '/admin/users', subItems: [], showSubmenu: false },
    { label: 'Orders', icon: 'fas fa-shopping-cart', link: '/admin/orderlist', subItems: [], showSubmenu: false },
    { label: 'Customers', icon: 'fas fa-shopping-cart', link: 'admin/customerlist', subItems: [], showSubmenu: false },
    { label: 'Payments', icon: 'fas fa-credit-card', link: '/admin/paymentlist', subItems: [], showSubmenu: false },
    { label: 'Shipments', icon: 'fas fa-truck', link: '/admin/shipmentlist', subItems: [], showSubmenu: false },
    { label: 'Returns', icon: 'fas fa-undo', link: '/admin/returnlist', subItems: [], showSubmenu: false },
    { label: 'Inventory', icon: 'fas fa-boxes', link: '/admin/inventorylist', subItems: [], showSubmenu: false },
    { label: 'Products', icon: 'fas fa-cube', link: '/admin/productlist', subItems: [], showSubmenu: false },
    { label: 'Categories', icon: 'fas fa-list', link: '/admin/categorylist', subItems: [], showSubmenu: false },
    { label: 'Suppliers', icon: 'fas fa-truck', link: '/admin/supplierlist', subItems: [], showSubmenu: false },
    { label: 'Purchase Orders', icon: 'fas fa-file-invoice', link: '/admin/purchaseorderlist', subItems: [], showSubmenu: false },
    { label: 'Employees', icon: 'fas fa-user-tie', link: '/admin/employeelist', subItems: [], showSubmenu: false },
    { label: 'Discounts', icon: 'fas fa-tag', link: '/admin/discountlist', subItems: [], showSubmenu: false },
    { label: 'Reports', icon: 'fas fa-chart-line', link: '/admin/reportlist', subItems: [], showSubmenu: false },
    { label: 'Audit Log', icon: 'fas fa-file-alt', link: '/admin/auditloglist', subItems: [], showSubmenu: false },
    { label: 'Notifications', icon: 'fas fa-bell', link: '/admin/notificationlist', subItems: [], showSubmenu: false },
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
