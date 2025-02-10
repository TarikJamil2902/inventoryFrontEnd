import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
  // Adjust according to your actual service path

@Component({
  selector: 'app-updatepayment',
  templateUrl: './updatepayment.component.html',
  styleUrls: ['./updatepayment.component.scss']
})
export class UpdatepaymentComponent implements OnInit {

  constructor(
    private paymentService: PaymentService,

    private router: Router,
    private route: ActivatedRoute
  ) { }

  id!: any;
  paymentDetails!: any;  // Adjust according to your actual model



  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
    console.log(this.id);
    this.paymentService.getById(this.id).subscribe((val: any) => {
      this.paymentDetails = val;
      console.log(this.paymentDetails);

      // Populate the form with the existing payment data
      this.paymentForm.setValue(this.paymentDetails);
    });
  }

  onSubmit() {
    this.paymentService.updateData(this.paymentForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/admin/paymentlist');
    });
  }

  // Define the form with the new fields
  paymentForm: FormGroup = new FormGroup({
    paymentId: new FormControl(),
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
