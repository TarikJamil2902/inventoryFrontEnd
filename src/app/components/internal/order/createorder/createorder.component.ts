import { OrderItemService } from './../../../../services/orderitem.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { OrderService } from 'src/app/services/order.service'; // Ensure this service exists
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.scss']
})
export class CreateOrderComponent implements OnInit {

  constructor(private orderService: OrderService,
    private customerService: CustomerService,
    private employeeService: EmployeeService,
    private shipmentService: ShipmentService,
    private orderItemService: OrderItemService,


    private router: Router) { }

    customerlist: any[] = [];
    employeelist:any[]=[];
    shipmentlist: any[]=[];
    orderItemlist: any[]=[];

  ngOnInit(): void {
    this.customerService.getAll().subscribe((res: any) => {
      this.customerlist = res;
    });
    this.employeeService.getAll().subscribe((res: any) => {
      this.employeelist = res;
    });
    this.shipmentService.getAll().subscribe((res: any) => {
      this.shipmentlist = res;
    });

  }

  onSubmit() {
    console.log("hello");

    this.orderService.add(this.orderForm.value).subscribe((res: any) => {
      console.log("Order created successfully");
      this.router.navigateByUrl('/admin/orderlist'); // Adjust the route as needed
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


  populateDemoData() {
    this.orderForm.setValue({
      customerName: 'Tarik Jamil',
      customerContact: '123-456-7890',
      orderItemIds: 2,  // Example item IDs
      totalAmount: 150.00,
      status: 'PENDING',
      customerId: 1,  // Example customer ID
      shipmentId: 1,  // Example shipment ID
      employeeId: 1,  // Example employee ID
      shippingAddress: '123 Main St, Anytown, USA',
      billingAddress: '123 Main St, Anytown, USA',
      shippingMethod: 'Standard Shipping',
      paymentStatus: 'Pending'
    });
  }
}
