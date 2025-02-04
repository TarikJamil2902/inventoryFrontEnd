import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service'; // Ensure this service exists

@Component({
  selector: 'app-createpayment',
  templateUrl: './createpayment.component.html',
  styleUrls: ['./createpayment.component.scss']
})
export class CreatePaymentComponent implements OnInit {

  constructor(private paymentService: PaymentService, private router: Router) { }

  ngOnInit(): void {
    // Initialization logic if necessary
  }

  onSubmit() {
    this.paymentService.add(this.paymentForm.value).subscribe((res: any) => {
      console.log("Payment created successfully");
      this.router.navigateByUrl('/payment-list'); // Adjust route as needed
    });
  }

  paymentForm: FormGroup = new FormGroup({
    id: new FormControl(),
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
