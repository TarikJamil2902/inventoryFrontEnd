import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customersidenav',
  templateUrl: './customersidenav.component.html',
  styleUrls: ['./customersidenav.component.scss']
})
export class CustomersidenavComponent {
isCollapsed = false;

menuItems = [
  { label: 'Dashboard', icon: 'fas fa-home', link: '/customer/dashboard' },
  { label: 'My Orders', icon: 'fas fa-boxes', link: '/customer/orders' },
  { label: 'Payments', icon: 'fas fa-credit-card', link: '/customer/payments' },
  { label: 'Loyalty & Discounts', icon: 'fas fa-gift', link: '/customer/loyalty' },
  { label: 'Browse Products', icon: 'fas fa-shopping-bag', link: '/customer/products' },
  { label: 'Returns & Refunds', icon: 'fas fa-undo-alt', link: '/customer/returns' },
  { label: 'Notifications', icon: 'fas fa-bell', link: '/customer/notifications' },
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










