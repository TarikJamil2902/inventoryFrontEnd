import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';

@Component({
  selector: 'app-createpurchaseorder',
  templateUrl: './createpurchaseorder.component.html',
  styleUrls: ['./createpurchaseorder.component.scss']
})
export class CreatepurchaseorderComponent implements OnInit {
  constructor(private purchaseOrderService: PurchaseOrderService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    this.purchaseOrderService.add(this.purchaseOrderForm.value).subscribe((res: any) => {
      console.log("Created successfully");
      this.router.navigateByUrl('/categorylist');
    });
  }

  purchaseOrderForm: FormGroup = new FormGroup({
    purchaseOrderId: new FormControl(),
    supplierId: new FormControl(),
    purchaseOrderItemIds: new FormControl(),
    orderDate: new FormControl(),
    deliveryDate: new FormControl(),
    status: new FormControl(),
    totalAmount: new FormControl(),
    paymentTerms: new FormControl()
  });
}
