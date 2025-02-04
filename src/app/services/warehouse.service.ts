import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WarehouseDTO {
  warehouseId: number;  // Updated field
  warehouseName: string;  // Updated field
  warehouseAddress: string;  // Updated field
  capacity: number;  // New field
  contactInfo: string;  // New field
  status: string;  // New field
  managerId: number;  // New field (reference to Employee's ID)
}

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private baseUrl = 'http://localhost:8080/api/warehouses';

  constructor(private http: HttpClient) {}

  add(warehouse: WarehouseDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/create', warehouse);
  }

  getAll(): Observable<WarehouseDTO[]> {
    return this.http.get<WarehouseDTO[]>(this.baseUrl);
  }

  getById(warehouseId: number): Observable<WarehouseDTO> {
    return this.http.get<WarehouseDTO>(this.baseUrl + '/' + warehouseId);
  }

  remove(warehouseId: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + warehouseId);
  }

  updateData(warehouse: WarehouseDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + warehouse.warehouseId, warehouse);
  }
}
