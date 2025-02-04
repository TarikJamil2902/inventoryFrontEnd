import { Component } from '@angular/core';
import { ShipmentDTO, ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-shipmentlist',
  templateUrl: './shipmentlist.component.html',
  styleUrls: ['./shipmentlist.component.scss']
})
export class ShipmentlistComponent {
httpClient: any;
  apiURL: any;

constructor(private shipmentService:ShipmentService){}


shipmentList:ShipmentDTO[]=[];

  ngOnInit(): void {
    this.shipmentService.getAll().subscribe((res:any) => {
      this.shipmentList=res;
    })
  }



delete(id:any){
  this.shipmentService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
