import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDTO, EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.scss']
})
export class UpdateemployeeComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id!: any;
  employeeList! : any;


  // ngOnInit(): void {
  //   this.id= this.route.snapshot.params['Id']
  //   console.log(this.id);
  //   this.employeeService.getById(this.id).subscribe((val: any) => {
  //     this.employeeList = val;
  //     console.log(this.employeeList);

  //     this.employeeForm.setValue(this.employeeList)
  //   })
  // }

  // ngOnInit(): void {
  //   this.id= this.route.snapshot.params['Id']
  //   console.log(this.id);
  //   this.employeeService.getById(this.id).subscribe((val: any) => {
  //     this.employeeList = val;
  //     console.log(this.employeeList);

  //     this.employeeForm.setValue(this.employeeList)
  //   })
  // }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
    this.employeeService.getById(this.id).subscribe((val: any) => {
      this.employeeList = val;

      // Convert roles to an array before updating the form
      const roleArray = Array.isArray(val.role) ? val.role : [val.role];

      this.employeeForm.patchValue({
        ...val,
        role: roleArray
      });
    });
  }

  onSubmit() {
    this.employeeService.updateData(this.employeeForm.value).subscribe((res: any) => {


      this.router.navigateByUrl('/admin/employeelist');
    })
  }



  employeeForm: FormGroup = new FormGroup({
    employeeId: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    hireDate: new FormControl(),
    salary: new FormControl(),
    shift: new FormControl(),
    status: new FormControl()
  });

}
