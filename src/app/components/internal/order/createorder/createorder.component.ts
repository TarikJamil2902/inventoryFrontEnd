import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service'; // Ensure this service exists

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.scss']
})
export class CreateOrderComponent implements OnInit {

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    // Any initialization logic
  }

  onSubmit() {
    this.orderService.add(this.orderForm.value).subscribe((res: any) => {
      console.log("Order created successfully");
      this.router.navigateByUrl('/orderlist'); // Adjust the route as needed
    });
  }

  orderForm: FormGroup = new FormGroup({

    customerName: new FormControl(),
    customerContact: new FormControl(),
    orderItemIds: new FormControl([]),  // Default as an empty array
    totalAmount: new FormControl(),
    status: new FormControl('Active'),  // Default to Active
    customerId: new FormControl(),
    shipmentId: new FormControl(),
    employeeId: new FormControl(),
    shippingAddress: new FormControl(),
    billingAddress: new FormControl(),
    shippingMethod: new FormControl(),
    paymentStatus: new FormControl('Pending')  // Default payment status
  });
}
