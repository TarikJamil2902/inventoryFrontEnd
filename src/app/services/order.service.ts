import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// export interface OrderDTO {
//   orderId: number;
//   customerName: string;
//   customerContact: string;
//   orderItemIds: number[];  // List of order item IDs
//   totalAmount: number;
//   status: string;  // Order status
//   customerId: number;  // Customer ID (foreign key)
//   shipmentId: number;  // Shipment ID (foreign key)
//   employeeId: number;  // Employee ID (foreign key)
//   shippingAddress: string;
//   billingAddress: string;
//   shippingMethod: string;
//   paymentStatus: string;  // Payment status
// }

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) {}

  add(order: any){
    return this.http.post(this.baseUrl, order);
  }

  getAll(){
    return this.http.get(this.baseUrl);
  }

  getById(orderId: any) {
    return this.http.get(this.baseUrl + '/' + orderId);
  }

  remove(orderId: any){
    return this.http.delete(this.baseUrl + '/' + orderId);
  }

  updateData(order: any) {
    return this.http.put(this.baseUrl + '/' + order.orderId, order);
  }
}
