import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';
import { PaymentService } from 'src/app/services/payment.service';
// import { PaymentDTO, PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.scss']
})
export class PaymentlistComponent {
httpClient: any;
  apiURL: any;

constructor(private paymentService:PaymentService,
  private customerService:CustomerService,
  private orderService : OrderService
){}


paymentList:any[]=[];
Customers:any[]=[];
Orders:any[]=[];


  ngOnInit(): void {
    this.paymentService.getAll().subscribe((res:any) => {
      this.paymentList=res;
    })
    this.customerService.getAll().subscribe((res:any) => {
      this.Customers=res;
    })
    this.orderService.getAll().subscribe((res:any) => {
      this.Orders=res;
    })
  }



delete(id:any){
  this.paymentService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
