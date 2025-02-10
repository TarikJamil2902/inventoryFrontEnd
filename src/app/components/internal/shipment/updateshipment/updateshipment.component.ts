import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-updateshipment',
  templateUrl: './updateshipment.component.html',
  styleUrls: ['./updateshipment.component.scss']
})
export class UpdateShipmentComponent implements OnInit {

  constructor(
    private shipmentService: ShipmentService,
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id!: any;
  shipmentData!: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
    console.log(this.id);

    // Fetch the shipment details by ID from the API
    this.shipmentService.getById(this.id).subscribe((val: any) => {
      this.shipmentData = val;
      console.log(this.shipmentData);

      // Set form values with the fetched shipment data
      this.shipmentForm.setValue(this.shipmentData);
    });
  }

  onSubmit() {
    // Submit the form data to update the shipment
    this.shipmentService.updateData(this.shipmentForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/admin/shipmentlist');
    });
  }

  // Form group for updating the shipment
  shipmentForm: FormGroup = new FormGroup({
    shipmentId: new FormControl(),
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
