import { Component } from '@angular/core';

// Define a generic report type
interface Report {
  title: string;
  columns: string[];
  keys: string[];  // Keys are strings to match object properties dynamically
  data: Array<{ [key: string]: any }>;  // Data array with dynamic key-value pairs
}

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.scss']
})
export class AdminLandingComponent {
  dashboardSummary = [
    { title: 'Total Payments', value: '$125,430', icon: 'fa-dollar-sign' },
    { title: 'Total Orders', value: '8,320', icon: 'fa-shopping-cart' },
    { title: 'Total Warehouses', value: '12', icon: 'fa-warehouse' },
    { title: 'Total Users', value: '1,540', icon: 'fa-users' },
    { title: 'Total Suppliers', value: '27', icon: 'fa-truck' },
    { title: 'Total Shipments', value: '5,784', icon: 'fa-shipping-fast' },
    { title: 'Total Returns', value: '214', icon: 'fa-undo' },
    { title: 'Total Reports', value: '76', icon: 'fa-file-alt' },
  ];

  payments = [
    { id: 1, amount: '$2,350', method: 'Credit Card', date: '2025-02-01', status: 'Completed' },
    { id: 2, amount: '$780', method: 'PayPal', date: '2025-02-02', status: 'Pending' },
    { id: 3, amount: '$5,120', method: 'Bank Transfer', date: '2025-02-03', status: 'Completed' },
  ];

  orders = [
    { id: 101, customer: 'John Doe', total: '$1,200', status: 'Shipped', date: '2025-02-01' },
    { id: 102, customer: 'Jane Smith', total: '$340', status: 'Pending', date: '2025-02-02' },
    { id: 103, customer: 'David Brown', total: '$890', status: 'Delivered', date: '2025-02-03' },
  ];

  reports: Report[] = [
    {
      title: 'Monthly Product Sales',
      columns: ['ID', 'Product', 'Category', 'Total Sold', 'Revenue'],
      keys: ['id', 'product', 'category', 'sold', 'revenue'],
      data: [
        { id: 1, product: 'Laptop', category: 'Electronics', sold: 120, revenue: '$45,000' },
        { id: 2, product: 'Smartphone', category: 'Mobile', sold: 300, revenue: '$60,000' },
      ]
    },
    {
      title: 'Weekly Employee Performance',
      columns: ['ID', 'Name', 'Department', 'Tasks Completed', 'Rating'],
      keys: ['id', 'name', 'department', 'tasks', 'rating'],
      data: [
        { id: 1, name: 'Alice Johnson', department: 'Sales', tasks: 50, rating: 'Excellent' },
        { id: 2, name: 'Bob Smith', department: 'Support', tasks: 30, rating: 'Good' },
      ]
    },
    {
      title: 'Yearly Shipment Report',
      columns: ['ID', 'Date', 'Orders Shipped', 'Total Weight', 'Status'],
      keys: ['id', 'date', 'orders', 'weight', 'status'],
      data: [
        { id: 1, date: '2024-01-01', orders: 1500, weight: '10,000 kg', status: 'Completed' },
        { id: 2, date: '2024-02-01', orders: 1800, weight: '12,000 kg', status: 'Pending' },
      ]
    },
    {
      title: 'Monthly Customer Orders',
      columns: ['ID', 'Customer', 'Total Orders', 'Total Spent'],
      keys: ['id', 'customer', 'orders', 'spent'],
      data: [
        { id: 1, customer: 'John Doe', orders: 15, spent: '$3,000' },
        { id: 2, customer: 'Jane Smith', orders: 10, spent: '$2,000' },
      ]
    },
    {
      title: 'Weekly Inventory Report',
      columns: ['ID', 'Product', 'Stock Level', 'Reorder Status'],
      keys: ['id', 'product', 'stock', 'reorder'],
      data: [
        { id: 1, product: 'Headphones', stock: 50, reorder: 'Low' },
        { id: 2, product: 'Keyboards', stock: 100, reorder: 'Sufficient' },
      ]
    },
    {
      title: 'Yearly Revenue Report',
      columns: ['Year', 'Total Revenue', 'Profit Margin', 'Growth %'],
      keys: ['year', 'revenue', 'profit', 'growth'],
      data: [
        { year: 2023, revenue: '$500,000', profit: '20%', growth: '10%' },
        { year: 2024, revenue: '$600,000', profit: '22%', growth: '12%' },
      ]
    },
    {
      title: 'Monthly Supplier Orders',
      columns: ['ID', 'Supplier', 'Total Orders', 'Total Cost'],
      keys: ['id', 'supplier', 'orders', 'cost'],
      data: [
        { id: 1, supplier: 'ABC Electronics', orders: 20, cost: '$50,000' },
        { id: 2, supplier: 'XYZ Distributors', orders: 30, cost: '$70,000' },
      ]
    },
    {
      title: 'Weekly Refund Requests',
      columns: ['ID', 'Customer', 'Product', 'Reason', 'Status'],
      keys: ['id', 'customer', 'product', 'reason', 'status'],
      data: [
        { id: 1, customer: 'Emily White', product: 'Tablet', reason: 'Defective', status: 'Approved' },
        { id: 2, customer: 'Chris Brown', product: 'Monitor', reason: 'Wrong Item', status: 'Pending' },
      ]
    },
    {
      title: 'Yearly Order Summary',
      columns: ['Year', 'Total Orders', 'Completed', 'Pending'],
      keys: ['year', 'orders', 'completed', 'pending'],
      data: [
        { year: 2023, orders: 50_000, completed: 48_000, pending: 2_000 },
        { year: 2024, orders: 60_000, completed: 58_000, pending: 2_000 },
      ]
    },
    {
      title: 'Monthly Warehouse Shipments',
      columns: ['ID', 'Warehouse', 'Shipments Sent', 'Delayed'],
      keys: ['id', 'warehouse', 'sent', 'delayed'],
      data: [
        { id: 1, warehouse: 'New York', sent: 500, delayed: 10 },
        { id: 2, warehouse: 'Los Angeles', sent: 700, delayed: 15 },
      ]
    }
  ];
}
