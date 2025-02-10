import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// export interface SupplierDTO {
//   supplierId: number;
//   name: string;
//   email: string;  // Updated field
//   phone: string;  // Updated field
//   address: string;
//   paymentTerms: string;  // New field
//   supplierRating: number;  // New field
//   status: string;  // New field
// }

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private baseUrl = 'http://localhost:8080/api/suppliers';

  constructor(private http: HttpClient) {}

  add(supplier: any) {
    return this.http.post(this.baseUrl, supplier);
  }

  getAll(){
    return this.http.get(this.baseUrl);
  }

  getById(supplierId: any){
    return this.http.get(this.baseUrl + '/' + supplierId);
  }

  remove(supplierId: any) {
    return this.http.delete(this.baseUrl + '/' + supplierId);
  }

  updateData(supplier: any) {
    return this.http.put(this.baseUrl + '/' + supplier.supplierId, supplier);
  }
}
