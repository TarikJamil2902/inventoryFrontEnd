import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-createshipment',
  templateUrl: './createshipment.component.html',
  styleUrls: ['./createshipment.component.scss']
})
export class CreateshipmentComponent implements OnInit {
  constructor(private shipmentService: ShipmentService,
    private orderService: OrderService,
     private router: Router) { }

  ngOnInit(): void {

    
  }

  onSubmit() {
    this.shipmentService.add(this.shipmentForm.value).subscribe((res: any) => {
      console.log("Created successfully");
      this.router.navigateByUrl('/admin/shipmentlist');
    });
  }

  shipmentForm: FormGroup = new FormGroup({
    orderId: new FormControl(),
    shippingDate: new FormControl(),
    deliveryDate: new FormControl(),
    carrierName: new FormControl(),
    trackingNumber: new FormControl(),
    shipmentStatus: new FormControl(),
    deliveryAddress: new FormControl(),
    shippingCost: new FormControl()
  });
}
