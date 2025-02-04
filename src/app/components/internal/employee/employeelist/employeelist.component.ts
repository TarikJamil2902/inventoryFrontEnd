import { Component } from '@angular/core';
import { EmployeeDTO, EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent {
httpClient: any;
  apiURL: any;

constructor(private employeeService:EmployeeService){}


employeeList:EmployeeDTO[]=[];

  ngOnInit(): void {
    this.employeeService.getAll().subscribe((res:any) => {
      this.employeeList=res;
    })
  }



delete(id:any){
  this.employeeService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
