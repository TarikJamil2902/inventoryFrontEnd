import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';
 // Update with correct service

@Component({
  selector: 'app-updatepurchaseorder',
  templateUrl: './updatepurchaseorder.component.html',
  styleUrls: ['./updatepurchaseorder.component.scss']
})
export class UpdatePurchaseOrderComponent implements OnInit {

  constructor(
    private purchaseOrderService: PurchaseOrderService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id!: any;
  purchaseOrderData!: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
    console.log(this.id);

    // Fetch the purchase order by ID from the API
    this.purchaseOrderService.getById(this.id).subscribe((val: any) => {
      this.purchaseOrderData = val;
      console.log(this.purchaseOrderData);

      // Set form values with the fetched purchase order data
      this.purchaseOrderForm.setValue(this.purchaseOrderData);
    });
  }

  onSubmit() {
    // Submit the form data to update the purchase order
    this.purchaseOrderService.updateData(this.purchaseOrderForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/admin/purchaseorderlist');
    });
  }

  // Form group for the purchase order update
  purchaseOrderForm: FormGroup = new FormGroup({
    purchaseOrderId: new FormControl(),
    supplierId: new FormControl(),
    purchaseOrderItems: new FormControl(),
    orderDate: new FormControl(),
    deliveryDate: new FormControl(),
    status: new FormControl(),
    totalAmount: new FormControl(),
    paymentTerms: new FormControl(),
    createdBy: new FormControl()
  });
}
