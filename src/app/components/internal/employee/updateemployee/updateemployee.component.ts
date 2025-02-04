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
  employeeList! : EmployeeDTO;


  ngOnInit(): void {
    this.id= this.route.snapshot.params['Id']
    console.log(this.id);
    this.employeeService.getById(this.id).subscribe((val: any) => {
      this.employeeList = val;
      console.log(this.employeeList);

      this.employeeForm.setValue(this.employeeList)
    })
  }



  onSubmit() {
    this.employeeService.updateData(this.employeeForm.value).subscribe((res: any) => {


      this.router.navigateByUrl('/categorylist')
    })
  }



  employeeForm: FormGroup = new FormGroup({
    employeeId: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    department: new FormControl(),
    jobTitle: new FormControl(),
    status: new FormControl()
  });

}
