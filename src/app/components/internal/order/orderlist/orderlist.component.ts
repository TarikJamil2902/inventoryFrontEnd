import { Component } from '@angular/core';
import { OrderDTO, OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent {
httpClient: any;
  apiURL: any;

constructor(private orderService:OrderService){}


orderList:OrderDTO[]=[];

  ngOnInit(): void {
    this.orderService.getAll().subscribe((res:any) => {
      this.orderList=res;
    })
  }



delete(id:any){
  this.orderService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
