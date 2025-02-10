import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ShipmentDTO {
  id: number;
  orderId: number;  // Reference to the Order ID
  shippingDate: Date;  // Shipping date (ISO format)
  deliveryDate: Date;  // Delivery date (ISO format)
  carrierName: string;
  trackingNumber: string;
  shipmentStatus: string;  // e.g., "SHIPPED", "DELIVERED", "PENDING"
  deliveryAddress: string;
  shippingCost: number;
}

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private baseUrl = 'http://localhost:8080/api/shipments';

  constructor(private http: HttpClient) {}

  add(shipment: ShipmentDTO){
    return this.http.post(this.baseUrl + '/create', shipment);
  }

  getAll(){
    return this.http.get(this.baseUrl);
  }

  getById(id: any) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  remove(id: any) {
    return this.http.delete(this.baseUrl + '/delete/' + id);
  }

  updateData(shipment: any) {
    return this.http.put(this.baseUrl + '/update/' + shipment.id, shipment);
  }
}
