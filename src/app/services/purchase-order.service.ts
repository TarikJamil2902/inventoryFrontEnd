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
  private baseUrl = 'http://localhost:8080/api/purchase-orders';

  constructor(private http: HttpClient) {}

  add(purchaseOrder: PurchaseOrderDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/create', purchaseOrder);
  }

  getAll(): Observable<PurchaseOrderDTO[]> {
    return this.http.get<PurchaseOrderDTO[]>(this.baseUrl);
  }

  getById(purchaseOrderId: number): Observable<PurchaseOrderDTO> {
    return this.http.get<PurchaseOrderDTO>(this.baseUrl + '/' + purchaseOrderId);
  }

  remove(purchaseOrderId: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + purchaseOrderId);
  }

  updateData(purchaseOrder: PurchaseOrderDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + purchaseOrder.purchaseOrderId, purchaseOrder);
  }
}

