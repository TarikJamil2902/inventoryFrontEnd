import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NotificationDTO {
  notificationId: number;
  message: string;
  status: string;
  createdAt: string;  // LocalDateTime in Java can be represented as a string in ISO format
  notificationType: string;
  userName: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl = 'http://localhost:8080/api/notifications';

  constructor(private http: HttpClient) {}

  add(notification: NotificationDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/create', notification);
  }

  getAll(): Observable<NotificationDTO[]> {
    return this.http.get<NotificationDTO[]>(this.baseUrl);
  }

  getById(notificationId: number): Observable<NotificationDTO> {
    return this.http.get<NotificationDTO>(this.baseUrl + '/' + notificationId);
  }

  remove(notificationId: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + notificationId);
  }

  updateData(notification: NotificationDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + notification.notificationId, notification);
  }
}
