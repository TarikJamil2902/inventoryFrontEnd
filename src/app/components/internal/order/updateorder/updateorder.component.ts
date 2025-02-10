import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
 // Ensure you have the correct service imported

@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.scss']
})
export class UpdateorderComponent implements OnInit {

  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id!: number;
  orderData!: any;

  orderForm: FormGroup = new FormGroup({
    orderId: new FormControl(),
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
    paymentStatus: new FormControl('Pending')  
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
    console.log('Order ID:', this.id);

    this.orderService.getById(this.id).subscribe((val: any) => {
      this.orderData = val;
      console.log('Order Data:', this.orderData);

      this.orderForm.setValue(this.orderData);
    });
  }

  onSubmit() {
    this.orderService.updateData(this.orderForm.value).subscribe(() => {
      this.router.navigateByUrl('/admin/orderlist');
    });
  }
}
