import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OrderDTO {
  orderId: number;
  customerName: string;
  customerContact: string;
  orderItemIds: number[];  // List of order item IDs
  totalAmount: number;
  status: string;  // Order status
  customerId: number;  // Customer ID (foreign key)
  shipmentId: number;  // Shipment ID (foreign key)
  employeeId: number;  // Employee ID (foreign key)
  shippingAddress: string;
  billingAddress: string;
  shippingMethod: string;
  paymentStatus: string;  // Payment status
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) {}

  add(order: OrderDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/create', order);
  }

  getAll(): Observable<OrderDTO[]> {
    return this.http.get<OrderDTO[]>(this.baseUrl);
  }

  getById(orderId: number): Observable<OrderDTO> {
    return this.http.get<OrderDTO>(this.baseUrl + '/' + orderId);
  }

  remove(orderId: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + orderId);
  }

  updateData(order: OrderDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + order.orderId, order);
  }
}
