import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.scss']
})
export class CreateemployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService,
     private router: Router) { }

  ngOnInit(): void {
    // Initialization logic (if required)
  }

  onSubmit() {
    this.employeeService.add(this.employeeForm.value).subscribe((res: any) => {
      console.log("Created successfully");
      this.router.navigateByUrl('/employeelist'); // Adjust the route accordingly
    });
  }

  employeeForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    hireDate: new FormControl(),
    salary: new FormControl(),
    status: new FormControl('Active')  // Default value set to Active
  });
}
