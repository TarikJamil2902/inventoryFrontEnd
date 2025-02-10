import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PurchaseOrderDTO {
  purchaseOrderId: number;  // Corresponds to purchase_order_id in the entity
  supplierId: number;  // Reference to the Supplier ID
  purchaseOrderItemIds: number[];  // List of IDs of PurchaseOrderItems
  orderDate: string;  // Order date as string (ISO format)
  deliveryDate: string;  // Delivery date as string (ISO format)
  status: string;  // Status as a string (e.g., "PENDING", "RECEIVED")
  totalAmount: number;  // Total amount for the order
  paymentTerms: string;  // Payment terms (e.g., "Net 30", "COD")
}

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  private baseUrl = 'http://localhost:8080/api/purchaseOrders';

  constructor(private http: HttpClient) {}

  add(purchaseOrder: any) {
    return this.http.post(this.baseUrl , purchaseOrder);
  }

  getAll() {
    return this.http.get(this.baseUrl);
  }

  getById(purchaseOrderId: any) {
    return this.http.get(this.baseUrl + '/' + purchaseOrderId);
  }

  remove(purchaseOrderId: any) {
    return this.http.delete(this.baseUrl + '/' + purchaseOrderId);
  }

  updateData(purchaseOrder: any) {
    return this.http.put(this.baseUrl + '/' + purchaseOrder.purchaseOrderId, purchaseOrder);
  }
}

