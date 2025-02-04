import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InventoryDTO {
  inventoryId: number;
  productId: number;
  warehouseId: number;
  quantityOnHand: number;
  quantityAllocated: number;
  quantityAvailable: number;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private baseUrl = 'http://localhost:8080/api/inventories';

  constructor(private http: HttpClient) {}

  add(inventory: InventoryDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/create', inventory);
  }

  getAll(): Observable<InventoryDTO[]> {
    return this.http.get<InventoryDTO[]>(this.baseUrl);
  }

  getById(inventoryId: number): Observable<InventoryDTO> {
    return this.http.get<InventoryDTO>(this.baseUrl + '/' + inventoryId);
  }

  remove(inventoryId: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + inventoryId);
  }

  updateData(inventory: InventoryDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + inventory.inventoryId, inventory);
  }
}
