import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ReportDTO {
  reportId: number;  // Report ID
  reportType: string;  // e.g., "sales", "stock", "financial"
  startDate: string;  // Start date for the report period (ISO format)
  endDate: string;  // End date for the report period (ISO format)
  generatedAt: string;  // Timestamp when the report was generated (ISO format)
  generatedByEmployeeId: number;  // ID of the Employee who generated the report
  data: string;  // Report content in JSON or another format
  createdByUserName: string;  // Username of the user who created the report
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = 'http://localhost:8080/api/reports';

  constructor(private http: HttpClient) {}

  add(report: ReportDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/create', report);
  }

  getAll(): Observable<ReportDTO[]> {
    return this.http.get<ReportDTO[]>(this.baseUrl);
  }

  getById(reportId: number): Observable<ReportDTO> {
    return this.http.get<ReportDTO>(this.baseUrl + '/' + reportId);
  }

  remove(reportId: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + reportId);
  }

  updateData(report: ReportDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + report.reportId, report);
  }
}
