import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { PurchaseOrderItemService } from 'src/app/services/purchase-order-item.service';
import { ReturnService } from 'src/app/services/return.service';

@Component({
  selector: 'app-createreturn',
  templateUrl: './createreturn.component.html',
  styleUrls: ['./createreturn.component.scss']
})
export class CreatereturnComponent implements OnInit {
  constructor(private returnService: ReturnService,
    private orderService: OrderService,
    private purchaseOrderService: PurchaseOrderItemService,
    private router: Router) { }

    orderlist: any[] = [];
    purchaselist: any[] = [];
    returnlist: any[] = [];


  ngOnInit(): void {
    this.orderService.getAll().subscribe((res: any) => {
      this.orderlist = res;
    });
    this.returnService.getAll().subscribe((res: any) => {
      this.returnlist = res;
    });

    this.purchaseOrderService.getAll().subscribe((res: any) => {
      this.purchaselist = res;
    });

  }

  onSubmit() {
    this.returnService.add(this.returnForm.value).subscribe((res: any) => {
      console.log("Created successfully");
      this.router.navigateByUrl('/admin/returnlist');
    });
  }

  returnForm: FormGroup = new FormGroup({

    customerOrderIds: new FormControl(),

    reasonForReturn: new FormControl(),
    returnDate: new FormControl(),
    returnStatus: new FormControl(),
    amountRefunded: new FormControl(),
    returnType: new FormControl(),
    refundMethod: new FormControl(),
    quantity: new FormControl()
  });
}
