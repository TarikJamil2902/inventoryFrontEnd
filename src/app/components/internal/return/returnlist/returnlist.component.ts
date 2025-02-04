import { Component } from '@angular/core';
import { ReturnDTO, ReturnService } from 'src/app/services/return.service';

@Component({
  selector: 'app-returnlist',
  templateUrl: './returnlist.component.html',
  styleUrls: ['./returnlist.component.scss']
})
export class ReturnlistComponent {
httpClient: any;
  apiURL: any;

constructor(private returnService:ReturnService){}


returnList:ReturnDTO[]=[];

  ngOnInit(): void {
    this.returnService.getAll().subscribe((res:any) => {
      this.returnList=res;
    })
  }



delete(id:any){
  this.returnService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
