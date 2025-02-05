import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmployeeDTO {
  employeeId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  jobTitle: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) {}

  add(employee: any): Observable<any> {
    return this.http.post(this.baseUrl + '/create', employee);
  }

  getAll(): Observable<any[]> {
    return this.http.get<EmployeeDTO[]>(this.baseUrl);
  }

  getById(employeeId: number): Observable<EmployeeDTO> {
    return this.http.get<EmployeeDTO>(this.baseUrl + '/' + employeeId);
  }

  remove(employeeId: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + employeeId);
  }

  updateData(employee: any): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + employee.employeeId, employee);
  }
}
