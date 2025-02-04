import { Component } from '@angular/core';
import { WarehouseDTO, WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-warehouselist',
  templateUrl: './warehouselist.component.html',
  styleUrls: ['./warehouselist.component.scss']
})
export class WarehouselistComponent {
httpClient: any;
  apiURL: any;

constructor(private warehouseService:WarehouseService

){}


 warehouseList:WarehouseDTO[]=[];

  ngOnInit(): void {
    this.warehouseService.getAll().subscribe((res:any) => {
      this.warehouseList=res;
    })
  }



delete(id:any){
  this.warehouseService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
