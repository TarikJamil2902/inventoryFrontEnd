import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DiscountDTO {
  discountId: number;
  discountCode: string;
  description: string;
  discountType: string;
  amount: number;
  validFrom: Date;
  validUntil: Date;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  private baseUrl = 'http://localhost:8080/api/discounts';

  constructor(private http: HttpClient) {}

  add(discount: DiscountDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/create', discount);
  }

  getAll(): Observable<DiscountDTO[]> {
    return this.http.get<DiscountDTO[]>(this.baseUrl);
  }

  getById(discountId: number): Observable<DiscountDTO> {
    return this.http.get<DiscountDTO>(this.baseUrl + '/' + discountId);
  }

  remove(discountId: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + discountId);
  }

  updateData(discount: DiscountDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + discount.discountId, discount);
  }
}
