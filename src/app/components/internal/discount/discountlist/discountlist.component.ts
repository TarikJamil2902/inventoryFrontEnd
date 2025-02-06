import { Component } from '@angular/core';
import { DiscountDTO, DiscountService } from 'src/app/services/discount.service';

@Component({
  selector: 'app-discountlist',
  templateUrl: './discountlist.component.html',
  styleUrls: ['./discountlist.component.scss']
})
export class DiscountlistComponent {
httpClient: any;
  apiURL: any;

constructor(private discountService:DiscountService){}


discountList:any[]=[];

  ngOnInit(): void {
    this.discountService.getAll().subscribe((res:any) => {
      this.discountList=res;
    })
  }



delete(id:any){
  this.discountService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
