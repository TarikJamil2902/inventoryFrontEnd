import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';
import {  OrderService } from 'src/app/services/order.service';
import { OrderItemService } from 'src/app/services/orderitem.service';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent {
httpClient: any;
  apiURL: any;

constructor(private orderService:OrderService,
  private customerService: CustomerService,
      private employeeService: EmployeeService,
      private shipmentService: ShipmentService,
      private orderItemService: OrderItemService,
){}


orderList:any[]=[];
customerlist: any[] = [];
    employeelist:any[]=[];
    shipmentlist: any[]=[];
    orderItemlist: any[]=[];


  ngOnInit(): void {
    this.orderService.getAll().subscribe((res:any) => {
      this.orderList=res;
    })
    this.customerService.getAll().subscribe((res: any) => {
      this.customerlist = res;
    });
    this.employeeService.getAll().subscribe((res: any) => {
      this.employeelist = res;
    });
    this.shipmentService.getAll().subscribe((res: any) => {
      this.shipmentlist = res;
    });
    this.orderItemService.getAll().subscribe((res: any) => {
      this.orderItemlist = res;
    });
  }



delete(id:any){
  this.orderService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
