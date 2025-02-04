import { Component } from '@angular/core';
import { PurchaseOrderDTO, PurchaseOrderService } from 'src/app/services/purchase-order.service';

@Component({
  selector: 'app-purchaseorderlist',
  templateUrl: './purchaseorderlist.component.html',
  styleUrls: ['./purchaseorderlist.component.scss']
})
export class PurchaseorderlistComponent {
httpClient: any;
  apiURL: any;

constructor(private purchaseOrderService:PurchaseOrderService){}


purchaseOrderList:PurchaseOrderDTO[]=[];

  ngOnInit(): void {
    this.purchaseOrderService.getAll().subscribe((res:any) => {
      this.purchaseOrderList=res;
    })
  }



delete(id:any){
  this.purchaseOrderService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
