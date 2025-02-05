import { Component } from '@angular/core';

// Define a generic report type
interface Report {
  title: string;
  columns: string[];
  keys: string[];  // Keys are strings to match object properties dynamically
  data: Array<{ [key: string]: any }>;  // Data array with dynamic key-value pairs
}

@Component({
  selector: 'app-employee-landing',
  templateUrl: './employee-landing.component.html',
  styleUrls: ['./employee-landing.component.scss']
})
export class EmployeeLandingComponent {
  dashboardSummary = [
    { title: 'Pending Tasks', value: '14', icon: 'fa-tasks' },
    { title: 'Completed Orders', value: '520', icon: 'fa-check-circle' },
    { title: 'Warehouse Shipments', value: '1,200', icon: 'fa-warehouse' },
    { title: 'Support Tickets', value: '8', icon: 'fa-life-ring' }
  ];

  tasks = [
    { id: 1, description: 'Verify shipment inventory', status: 'Pending', dueDate: '2025-02-10' },
    { id: 2, description: 'Process customer refund', status: 'In Progress', dueDate: '2025-02-09' },
    { id: 3, description: 'Generate monthly report', status: 'Completed', dueDate: '2025-01-31' },
  ];

  orders = [
    { id: 201, customer: 'John Doe', total: '$1,450', status: 'In Progress', date: '2025-02-05' },
    { id: 202, customer: 'Jane Smith', total: '$560', status: 'Pending', date: '2025-02-04' },
    { id: 203, customer: 'Mike Ross', total: '$1,200', status: 'Delivered', date: '2025-02-03' }
  ];

  reports: Report[] = [
    {
      title: 'Weekly Task Progress',
      columns: ['ID', 'Task', 'Status', 'Due Date'],
      keys: ['id', 'description', 'status', 'dueDate'],
      data: [
        { id: 1, description: 'Verify shipment inventory', status: 'Pending', dueDate: '2025-02-10' },
        { id: 2, description: 'Process customer refund', status: 'In Progress', dueDate: '2025-02-09' },
        { id: 3, description: 'Generate monthly report', status: 'Completed', dueDate: '2025-01-31' },
      ]
    },
    {
      title: 'Order Processing Summary',
      columns: ['ID', 'Customer', 'Total Amount', 'Status'],
      keys: ['id', 'customer', 'total', 'status'],
      data: [
        { id: 201, customer: 'John Doe', total: '$1,450', status: 'In Progress' },
        { id: 202, customer: 'Jane Smith', total: '$560', status: 'Pending' },
        { id: 203, customer: 'Mike Ross', total: '$1,200', status: 'Delivered' },
      ]
    }
  ];
}
