import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent  implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.loadSalesChart();
    this.loadCustomerChart();
    this.loadPaymentChart();
  }

  loadSalesChart() {
    new Chart('salesChart', {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3, 9],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

  loadCustomerChart() {
    new Chart('customerChart', {
      type: 'doughnut',
      data: {
        labels: ['Customer A', 'Customer B', 'Customer C', 'Customer D'],
        datasets: [{
          data: [25, 35, 20, 20],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
      },
      options: {
        responsive: true
      }
    });
  }

  loadPaymentChart() {
    new Chart('paymentChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Payments',
          data: [300, 500, 400, 700, 600],
          borderColor: '#42A5F5',
          fill: false
        }]
      },
      options: {
        responsive: true
      }
    });
  }
}
