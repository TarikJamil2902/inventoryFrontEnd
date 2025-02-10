import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService, Customer } from 'src/app/services/customer.service';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.scss']
})
export class CreatecustomerComponent implements OnInit {
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    // Initialization logic (if required)
  }

  customerForm: FormGroup = new FormGroup({

    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    billingAddress: new FormControl(),
    shippingAddress: new FormControl(),
    loyaltyPoints: new FormControl(),
    customerType: new FormControl(),
    status: new FormControl('Active')
  });

  onSubmit() {
    this.customerService.add(this.customerForm.value).subscribe((res: any) => {
      console.log("Created successfully");
      this.router.navigateByUrl('/admin/customerlist'); // Adjust the route accordingly
    });
  }
  // onSubmit() {
  //   if (this.customerForm.valid) {
  //     this.customerService.add(this.customerForm.value as any).subscribe({
  //       next: () => {
  //         console.log('Customer created successfully');
  //         this.router.navigateByUrl('/customerlist');
  //       },
  //       error: (err) => console.error('Error creating customer:', err)
  //     });
  //   }
  // }
}
