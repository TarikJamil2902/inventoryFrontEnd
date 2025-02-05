import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managersidenav',
  templateUrl: './managersidenav.component.html',
  styleUrls: ['./managersidenav.component.scss']
})
export class ManagersidenavComponent {
 isCollapsed = false;

 menuItems = [
  { label: 'Dashboard', icon: 'fas fa-home', link: '/manager/dashboard' },
  { label: 'Inventory', icon: 'fas fa-boxes', link: '/manager/inventory' },
  { label: 'Orders', icon: 'fas fa-shopping-cart', link: '/manager/orders' },
  { label: 'Shipments', icon: 'fas fa-truck', link: '/manager/shipments' },
  { label: 'Purchase Orders', icon: 'fas fa-file-invoice', link: '/manager/purchase-orders' },
  { label: 'Suppliers', icon: 'fas fa-truck', link: '/manager/suppliers' },
  { label: 'Employees', icon: 'fas fa-users-cog', link: '/employeelist' },
  { label: 'Reports', icon: 'fas fa-chart-line', link: '/manager/reports' },
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


