import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NotificationDTO {
  notificationId: number;
  message: string;
  status: string;
  notificationType: string;

}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl = 'http://localhost:8080/api/notifications';

  constructor(private http: HttpClient) {}

  add(notification: any) {
    return this.http.post(this.baseUrl , notification);
  }

  getAll() {
    return this.http.get(this.baseUrl);
  }

  getById(notificationId: any) {
    return this.http.get(this.baseUrl + '/' + notificationId);
  }

  remove(notificationId: any){
    return this.http.delete(this.baseUrl + '/' + notificationId);
  }

  updateData(notification: any) {
    return this.http.put(this.baseUrl + '/' + notification.notificationId, notification);
  }
}
