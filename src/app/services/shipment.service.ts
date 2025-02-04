import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ShipmentDTO {
  id: number;
  orderId: number;  // Reference to the Order ID
  shippingDate: string;  // Shipping date (ISO format)
  deliveryDate: string;  // Delivery date (ISO format)
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

  add(shipment: ShipmentDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/create', shipment);
  }

  getAll(): Observable<ShipmentDTO[]> {
    return this.http.get<ShipmentDTO[]>(this.baseUrl);
  }

  getById(id: number): Observable<ShipmentDTO> {
    return this.http.get<ShipmentDTO>(this.baseUrl + '/' + id);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + id);
  }

  updateData(shipment: ShipmentDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + shipment.id, shipment);
  }
}
