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

  // Fetch all categories
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}`);
  }

  // Fetch category by ID
  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/${id}`);
  }

  // Add a new category
  // addCategory(category: Category): Observable<Category> {
  //   return this.http.post<Category>(`${this.baseUrl}`, category);
  // }
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

  // updateCategory(category:Category){
  //   return this.http.put(this.baseUrl+ "/update/" + category.id, category)
  // }
  // // Update category
  // updateCategory(id: number, category: Category): Observable<Category> {
  //   return this.http.put<Category>(`${this.baseUrl}/${id}`, category);
  // }

  // // Delete category
  // deleteCategory(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrl}/${id}`);
  // }
}
