import { Component } from '@angular/core';
import { PaymentDTO, PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.scss']
})
export class PaymentlistComponent {
httpClient: any;
  apiURL: any;

constructor(private paymentService:PaymentService){}


paymentList:PaymentDTO[]=[];

  ngOnInit(): void {
    this.paymentService.getAll().subscribe((res:any) => {
      this.paymentList=res;
    })
  }



delete(id:any){
  this.paymentService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
