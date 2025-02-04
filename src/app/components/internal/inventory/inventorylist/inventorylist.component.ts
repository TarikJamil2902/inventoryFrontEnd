import { Component } from '@angular/core';
import { InventoryDTO, InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrls: ['./inventorylist.component.scss']
})
export class InventorylistComponent {
httpClient: any;
  apiURL: any;

constructor(private inventoryService:InventoryService){}


inventoryList:InventoryDTO[]=[];

  ngOnInit(): void {
    this.inventoryService.getAll().subscribe((res:any) => {
      this.inventoryList=res;
    })
  }



delete(id:any){
  this.inventoryService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
