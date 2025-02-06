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

  add(inventory: any) {
    return this.http.post(this.baseUrl + '/create', inventory);
  }

  getAll() {
    return this.http.get(this.baseUrl);
  }

  getById(inventoryId: number) {
    return this.http.get(this.baseUrl + '/' + inventoryId);
  }

  remove(inventoryId: number) {
    return this.http.delete(this.baseUrl + '/delete/' + inventoryId);
  }

  updateData(inventory: InventoryDTO) {
    return this.http.put(this.baseUrl + '/update/' + inventory.inventoryId, inventory);
  }
}
