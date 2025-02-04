import { Component } from '@angular/core';
import { OrderItemDTO, OrderItemService } from 'src/app/services/orderitem.service';

@Component({
  selector: 'app-orderitemlist',
  templateUrl: './orderitemlist.component.html',
  styleUrls: ['./orderitemlist.component.scss']
})
export class OrderitemlistComponent {
httpClient: any;
  apiURL: any;

constructor(private orderItemService:OrderItemService){}


orderItemsList:OrderItemDTO[]=[];

  ngOnInit(): void {
    this.orderItemService.getAll().subscribe((res:any) => {
      this.orderItemsList=res;
    })
  }



delete(id:any){
  this.orderItemService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
