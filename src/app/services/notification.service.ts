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
    return this.http.post(this.baseUrl + '/create', notification);
  }

  getAll() {
    return this.http.get(this.baseUrl);
  }

  getById(notificationId: number) {
    return this.http.get(this.baseUrl + '/' + notificationId);
  }

  remove(notificationId: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + notificationId);
  }

  updateData(notification: NotificationDTO) {
    return this.http.put(this.baseUrl + '/update/' + notification.notificationId, notification);
  }
}
