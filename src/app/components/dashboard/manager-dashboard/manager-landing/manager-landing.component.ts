import { Component } from '@angular/core';

interface Report {
  title: string;
  columns: string[];
  keys: string[];
  data: Array<{ [key: string]: any }>;
}

@Component({
  selector: 'app-manager-landing',
  templateUrl: './manager-landing.component.html',
  styleUrls: ['./manager-landing.component.scss'],
})
export class ManagerLandingComponent {
  dashboardSummary = [
    { title: 'Pending Orders', value: '120', icon: 'fa-clock' },
    { title: 'Completed Orders', value: '3,090', icon: 'fa-check' },
    { title: 'Total Revenue', value: '$1,200,000', icon: 'fa-chart-line' },
    { title: 'Low Stock Alerts', value: '15 Products', icon: 'fa-exclamation-circle' },
  ];

  payments = [
    { id: 1, amount: '$2,350', method: 'Credit Card', date: '2025-02-01', status: 'Completed' },
    { id: 2, amount: '$780', method: 'PayPal', date: '2025-02-02', status: 'Pending' },
  ];

  orders = [
    { id: 101, customer: 'John Doe', total: '$1,200', status: 'Shipped', date: '2025-02-01' },
    { id: 102, customer: 'Jane Smith', total: '$340', status: 'Pending', date: '2025-02-02' },
  ];

  reports: Report[] = [
    {
      title: 'Weekly Inventory Report',
      columns: ['ID', 'Product', 'Stock Level', 'Reorder Status'],
      keys: ['id', 'product', 'stock', 'reorder'],
      data: [
        { id: 1, product: 'Headphones', stock: 50, reorder: 'Low' },
        { id: 2, product: 'Keyboards', stock: 100, reorder: 'Sufficient' },
      ],
    },
    {
      title: 'Weekly Employee Performance',
      columns: ['ID', 'Name', 'Department', 'Tasks Completed', 'Rating'],
      keys: ['id', 'name', 'department', 'tasks', 'rating'],
      data: [
        { id: 1, name: 'Alice Johnson', department: 'Sales', tasks: 50, rating: 'Excellent' },
        { id: 2, name: 'Bob Smith', department: 'Support', tasks: 30, rating: 'Good' },
      ],
    },
    {
      title: 'Monthly Customer Orders',
      columns: ['ID', 'Customer', 'Total Orders', 'Total Spent'],
      keys: ['id', 'customer', 'orders', 'spent'],
      data: [
        { id: 1, customer: 'John Doe', orders: 15, spent: '$3,000' },
        { id: 2, customer: 'Jane Smith', orders: 10, spent: '$2,000' },
      ],
    },
    {
      title: 'Weekly Refund Requests',
      columns: ['ID', 'Customer', 'Product', 'Reason', 'Status'],
      keys: ['id', 'customer', 'product', 'reason', 'status'],
      data: [
        { id: 1, customer: 'Emily White', product: 'Tablet', reason: 'Defective', status: 'Approved' },
        { id: 2, customer: 'Chris Brown', product: 'Monitor', reason: 'Wrong Item', status: 'Pending' },
      ],
    },
  ];
}
