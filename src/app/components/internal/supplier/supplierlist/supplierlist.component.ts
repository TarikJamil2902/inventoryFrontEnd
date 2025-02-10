import { Component } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.scss']
})
export class SupplierlistComponent {
httpClient: any;
  apiURL: any;

constructor(private supplierService:SupplierService){}


 supplierList:any[]=[];

  ngOnInit(): void {
    this.supplierService.getAll().subscribe((res:any) => {
      this.supplierList=res;
    })
  }



delete(id:any){
  this.supplierService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
