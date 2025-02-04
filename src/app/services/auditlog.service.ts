import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuditLogDTO {
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

  add(auditLog: AuditLogDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/create', auditLog);
  }

  getAll(): Observable<AuditLogDTO[]> {
    return this.http.get<AuditLogDTO[]>(this.baseUrl);
  }

  getById(auditLogId: number): Observable<AuditLogDTO> {
    return this.http.get<AuditLogDTO>(this.baseUrl + '/' + auditLogId);
  }

  remove(auditLogId: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + auditLogId);
  }
}
