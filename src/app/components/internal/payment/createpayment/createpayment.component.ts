import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { PaymentService } from 'src/app/services/payment.service'; // Ensure this service exists
import { OrderService } from 'src/app/services/order.service'; // Ensure this service exists

@Component({
  selector: 'app-createpayment',
  templateUrl: './createpayment.component.html',
  styleUrls: ['./createpayment.component.scss']
})
export class CreatePaymentComponent implements OnInit {

  constructor(private paymentService: PaymentService,

    private OrderService: OrderService,
    private customerService: CustomerService,
     private router: Router) { }
     customerlist: any[] = [];
  orderlist: any[] = [];


  ngOnInit(): void {
    this.customerService.getAll().subscribe((res: any) => {
      this.customerlist = res;
    });

    this.OrderService.getAll().subscribe((res: any) => {
      this.orderlist = res;
    });
  }

  onSubmit() {
    this.paymentService.add(this.paymentForm.value).subscribe((res: any) => {
      console.log("Payment created successfully");
      this.router.navigateByUrl('/admin/paymentlist'); // Adjust route as needed
    });
  }

  paymentForm: FormGroup = new FormGroup({
    orderId: new FormControl(),
    customerId: new FormControl(),
    amount: new FormControl(),
    paymentMethod: new FormControl(),
    paymentStatus: new FormControl(),
    currency: new FormControl(),
    transactionId: new FormControl(),
    paymentDate: new FormControl()
  });
}
