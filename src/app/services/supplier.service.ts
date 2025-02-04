import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SupplierDTO {
  supplierId: number;
  name: string;
  email: string;  // Updated field
  phone: string;  // Updated field
  address: string;
  paymentTerms: string;  // New field
  supplierRating: number;  // New field
  status: string;  // New field
}

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private baseUrl = 'http://localhost:8080/api/suppliers';

  constructor(private http: HttpClient) {}

  add(supplier: SupplierDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/create', supplier);
  }

  getAll(): Observable<SupplierDTO[]> {
    return this.http.get<SupplierDTO[]>(this.baseUrl);
  }

  getById(supplierId: number): Observable<SupplierDTO> {
    return this.http.get<SupplierDTO>(this.baseUrl + '/' + supplierId);
  }

  remove(supplierId: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + supplierId);
  }

  updateData(supplier: SupplierDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + supplier.supplierId, supplier);
  }
}
