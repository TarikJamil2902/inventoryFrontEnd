import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuditLog{
  auditLogId: number;
  action: string;
  timestamp: string;
  performedBy: string;
  details: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuditLogService {
  private baseUrl = 'http://localhost:8080/api/auditlogs';

  constructor(private http: HttpClient) {}

  add(auditLog: any) {
    return this.http.post(this.baseUrl + '/create', auditLog);
  }

  getAll(){
    return this.http.get(this.baseUrl);
  }

  getById(auditLogId: any) {
    return this.http.get(this.baseUrl + '/' + auditLogId);
  }

  remove(auditLogId: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + auditLogId);
  }
   updateData(auditLog:AuditLog){
      return this.http.put(this.baseUrl+ "/update/" + auditLog.auditLogId, auditLog)
    }
}
