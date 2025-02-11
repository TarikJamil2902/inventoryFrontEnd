import { Component } from '@angular/core';
import { ReportDTO, ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-reportlist',
  templateUrl: './reportlist.component.html',
  styleUrls: ['./reportlist.component.scss']
})
export class ReportlistComponent {
httpClient: any;
  apiURL: any;

constructor(private reportService:ReportService){}


reportList:any[]=[];

  ngOnInit(): void {
    this.reportService.getAll().subscribe((res:any) => {
      this.reportList=res;
    })
  }



delete(id:any){
  this.reportService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
