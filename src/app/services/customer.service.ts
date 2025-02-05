import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Customer {
  customerId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  billingAddress: string;
  shippingAddress: string;
  loyaltyPoints: number;
  customerType: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) {}


  add(customer: any){
    return this.http.post(this.baseUrl + '/create', customer);
  }


  getAll() {
    return this.http.get(this.baseUrl);
  }

  remove(customerId: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + customerId);
  }

  getById(customerId: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + customerId);
  }

  updateData(customer: any): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + customer.customerId, customer);
  }
}
