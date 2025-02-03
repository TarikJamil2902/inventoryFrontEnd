import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeesidenav',
  templateUrl: './employeesidenav.component.html',
  styleUrls: ['./employeesidenav.component.scss']
})
export class EmployeesidenavComponent {
isCollapsed = false;

menuItems = [
  { label: 'Dashboard', icon: 'fas fa-home', link: '/employee/dashboard' },
  { label: 'Orders', icon: 'fas fa-box', link: '/employee/orders' },
  { label: 'Shipments', icon: 'fas fa-truck', link: '/employee/shipments' },
  { label: 'Returns & Refunds', icon: 'fas fa-undo-alt', link: '/employee/returns' },
  { label: 'Inventory', icon: 'fas fa-warehouse', link: '/employee/inventory' },
  { label: 'Products', icon: 'fas fa-cube', link: '/employee/products' },
  { label: 'Customers', icon: 'fas fa-user', link: '/employee/customers' },
  { label: 'Notifications', icon: 'fas fa-bell', link: '/employee/notifications' },
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
