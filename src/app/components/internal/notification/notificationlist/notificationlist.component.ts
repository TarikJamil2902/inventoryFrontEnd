import { Component } from '@angular/core';
import { NotificationDTO, NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notificationlist',
  templateUrl: './notificationlist.component.html',
  styleUrls: ['./notificationlist.component.scss']
})
export class NotificationlistComponent {
httpClient: any;
  apiURL: any;

constructor(private notificationService:NotificationService){}


notificationList:any[]=[];

  ngOnInit(): void {
    this.notificationService.getAll().subscribe((res:any) => {
      this.notificationList=res;
    })
  }



delete(id:any){
  this.notificationService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
