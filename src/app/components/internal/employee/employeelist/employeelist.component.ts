import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  searchText: string = '';
  selectedShift: string = '';
  selectedStatus: string = '';

  employeeList: any[] = [];  // Holds original list
  filteredEmployeeList: any[] = [];  // Holds filtered data
  sortDirection: { [key: string]: boolean } = {}; // Track the sort direction (true for asc, false for desc)

  // Method to handle sorting
  sortData(column: string): void {
    const isAsc = this.sortDirection[column] === true;  // Check if it's already sorted in ascending order
    this.sortDirection[column] = !isAsc;  // Toggle the direction for the column

    this.filteredEmployeeList.sort((a, b) => {
      if (a[column] < b[column]) return isAsc ? 1 : -1;
      if (a[column] > b[column]) return isAsc ? -1 : 1;
      return 0;
    });
  }
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  showFilter: boolean = false;

toggleFilter() {
  this.showFilter = !this.showFilter;
}


  loadEmployees(): void {
    this.employeeService.getAll().subscribe((res: any) => {
      this.employeeList = res;
      this.filteredEmployeeList = res; // Initialize filtered list
    });
  }

  filterEmployees(): void {
    this.filteredEmployeeList = this.employeeList.filter(emp =>
      emp.name.toLowerCase().includes(this.searchText.toLowerCase()) &&
      (this.selectedShift ? emp.shift === this.selectedShift : true) &&
      (this.selectedStatus ? emp.status === this.selectedStatus : true)
    );
  }

  delete(id: any): void {
    this.employeeService.remove(id).subscribe(() => {
      console.log('Data deleted');
      // Remove deleted employee from list instead of reloading all data
      this.employeeList = this.employeeList.filter(emp => emp.employeeId !== id);
      this.filterEmployees(); // Update the filtered list after deletion
    });
  }
}
