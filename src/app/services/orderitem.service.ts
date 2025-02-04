import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OrderItemDTO {
  id: number;
  orderId: number;    // Reference to the Order ID
  productId: number;  // Reference to the Product ID
  quantity: number;
  unitPrice: number;  // Price of the product at the time of the order
  totalPrice: number; // Quantity * Unit Price
  discount: number;   // Discount applied to this item
  tax: number;        // Tax applied to this item
}

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {
  private baseUrl = 'http://localhost:8080/api/order-items';

  constructor(private http: HttpClient) {}

  add(orderItem: OrderItemDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/create', orderItem);
  }

  getAll(): Observable<OrderItemDTO[]> {
    return this.http.get<OrderItemDTO[]>(this.baseUrl);
  }

  getById(id: number): Observable<OrderItemDTO> {
    return this.http.get<OrderItemDTO>(this.baseUrl + '/' + id);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + id);
  }

  updateData(orderItem: OrderItemDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + orderItem.id, orderItem);
  }
}
