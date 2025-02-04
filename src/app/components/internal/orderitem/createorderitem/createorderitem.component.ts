import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderItemService } from 'src/app/services/orderitem.service';

@Component({
  selector: 'app-createorderitem',
  templateUrl: './createorderitem.component.html',
  styleUrls: ['./createorderitem.component.scss']
})
export class CreateOrderItemComponent implements OnInit {

  constructor(private orderItemService: OrderItemService, private router: Router) { }

  ngOnInit(): void {
    // Initialization logic if necessary
  }

  onSubmit() {
    this.orderItemService.add(this.orderItemForm.value).subscribe((res: any) => {
      console.log("Order item created successfully");
      this.router.navigateByUrl('/orderitem-list'); // Adjust route as needed
    });
  }

  orderItemForm: FormGroup = new FormGroup({
    id: new FormControl(),
    orderId: new FormControl(),
    productId: new FormControl(),
    quantity: new FormControl(),
    unitPrice: new FormControl(),
    totalPrice: new FormControl(),
    discount: new FormControl(),
    tax: new FormControl()
  });
}
