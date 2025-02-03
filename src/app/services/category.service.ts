import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Category {
  id: number;
  name: string;
  description: string;
  productIds: number[];
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8090/api/categories';

  constructor(private http: HttpClient) {}

  add(category: any) {
    return this.http.post(this.baseUrl + ("/create"), category);
  }
  getAll() {
    return this.http.get(this.baseUrl);
  }

  remove(id: any) {
    return this.http.delete(this.baseUrl + "/delete/" + id)
  }

  getById(id:any){
    return this.http.get(this.baseUrl + "/" + id);
  }
  updateData(category:Category){
    return this.http.put(this.baseUrl+ "/update/" + category.id, category)
  }

}
