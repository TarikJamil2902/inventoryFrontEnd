import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { PurchaseOrderItemService } from 'src/app/services/purchase-order-item.service';
import { ReturnService } from 'src/app/services/return.service';

@Component({
  selector: 'app-updatereturn',
  templateUrl: './updatereturn.component.html',
  styleUrls: ['./updatereturn.component.scss']
})
export class UpdateReturnComponent implements OnInit {

  constructor(
    private returnService: ReturnService,

    private router: Router,
    private route: ActivatedRoute
  ) { }

  id!: any;
  returnData!: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
    console.log(this.id);

    // Fetch the return details by ID from the API
    this.returnService.getById(this.id).subscribe((val: any) => {
      this.returnData = val;
      console.log(this.returnData);

      // Set form values with the fetched return data
      this.returnForm.setValue(this.returnData);
    });
  }

  onSubmit() {
    // Submit the form data to update the return
    this.returnService.updateData(this.returnForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/admin/returnlist');
    });
  }

  // Form group for updating the return
  returnForm: FormGroup = new FormGroup({
    returnId: new FormControl(),
    customerOrderId: new FormControl(),
    // supplierReturnId: new FormControl(),
    reasonForReturn: new FormControl(),
    returnDate: new FormControl(),
    returnStatus: new FormControl(),
    amountRefunded: new FormControl(),
    returnType: new FormControl(),
    refundMethod: new FormControl(),
    quantity: new FormControl()
  });
}
