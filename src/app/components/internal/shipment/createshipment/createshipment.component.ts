import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-createshipment',
  templateUrl: './createshipment.component.html',
  styleUrls: ['./createshipment.component.scss']
})
export class CreateshipmentComponent implements OnInit {
  constructor(private shipmentService: ShipmentService, private router: Router) { }

  ngOnInit(): void {}

  onSubmit() {
    this.shipmentService.add(this.shipmentForm.value).subscribe((res: any) => {
      console.log("Created successfully");
      this.router.navigateByUrl('/categorylist');
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
