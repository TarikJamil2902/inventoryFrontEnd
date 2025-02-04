import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PurchaseOrderItemDTO {
  id: number;
  purchaseOrderId: number;  // Reference to the PurchaseOrder ID
  productId: number;  // Reference to the Product ID
  quantity: number;
  costPerUnit: number;
  discount: number;  // Discount on the item
  taxRate: number;  // Tax rate applicable to the item
  totalCost: number;  // Total cost without discount and tax
  totalCostAfterDiscount: number;  // Total cost after discount
  totalCostWithTax: number;  // Total cost with tax included
}

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderItemService {
  private baseUrl = 'http://localhost:8080/api/purchase-order-items';

  constructor(private http: HttpClient) {}

  add(purchaseOrderItem: PurchaseOrderItemDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/create', purchaseOrderItem);
  }

  getAll(): Observable<PurchaseOrderItemDTO[]> {
    return this.http.get<PurchaseOrderItemDTO[]>(this.baseUrl);
  }

  getById(id: number): Observable<PurchaseOrderItemDTO> {
    return this.http.get<PurchaseOrderItemDTO>(this.baseUrl + '/' + id);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + id);
  }

  updateData(purchaseOrderItem: PurchaseOrderItemDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + purchaseOrderItem.id, purchaseOrderItem);
  }
}
