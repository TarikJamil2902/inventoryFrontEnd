import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// export interface ProductDTO {
//   productId: number; // product_id
//   name: string;
//   description: string;
//   size: string;  // e.g., "S", "M", "L", "XL"
//   color: string;
//   brand: string;
//   unitPrice: number;  // unit_price
//   costPrice: number;  // cost_price
//   quantityInStock: number;  // quantity_in_stock
//   reorderLevel: number;  // reorder_level
//   barcode: string;  // Barcode
//   status: string;  // e.g., active, discontinued
//   imageUrl: string;  // image_url
//   categoryId: number;  // Reference to the Category ID
//   supplierId: number;  // Reference to the Supplier ID
// }

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  add(product: any){
    return this.http.post(this.baseUrl , product);
  }

  getAll(){
    return this.http.get(this.baseUrl);
  }

  getById(productId: any) {
    return this.http.get(this.baseUrl + '/' + productId);
  }

  remove(productId: any) {
    return this.http.delete(this.baseUrl + '/' + productId);
  }

  updateData(product: any) {
    return this.http.put(this.baseUrl + '/' + product.productId, product);
  }
}
