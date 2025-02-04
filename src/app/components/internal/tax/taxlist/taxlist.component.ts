import { Component } from '@angular/core';
import { TaxDTO, TaxService } from 'src/app/services/tax.service';

@Component({
  selector: 'app-taxlist',
  templateUrl: './taxlist.component.html',
  styleUrls: ['./taxlist.component.scss']
})
export class TaxlistComponent {
httpClient: any;
  apiURL: any;

constructor(private taxService:TaxService){}


 taxList:TaxDTO[]=[];

  ngOnInit(): void {
    this.taxService.getAll().subscribe((res:any) => {
      this.taxList=res;
    })
  }



delete(id:any){
  this.taxService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
