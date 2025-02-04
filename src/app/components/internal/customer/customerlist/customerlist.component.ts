import { Component } from '@angular/core';
import { CustomerDTO, CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent {
 httpClient: any;
  apiURL: any;

constructor(private customerService:CustomerService){}


 customerList:CustomerDTO[]=[];

  ngOnInit(): void {
    this.customerService.getAll().subscribe((res:any) => {
      this.customerList=res;
    })
  }



delete(id:any){
  this.customerService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
