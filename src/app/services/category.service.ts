import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Category {
  categoryId: number;
  categoryName: string;
  description: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient) {}

  add(category: any) {
    return this.http.post(this.baseUrl + ("/create"), category);
  }
  getAll() {
    return this.http.get(this.baseUrl);
  }

  remove(categoryId: any) {
    return this.http.delete(this.baseUrl + "/delete/" + categoryId)
  }

  getById(categoryId:any){
    return this.http.get(this.baseUrl + "/" + categoryId);
  }
  updateData(category:Category){
    return this.http.put(this.baseUrl+ "/update/" + category.categoryId, category)
  }

}
