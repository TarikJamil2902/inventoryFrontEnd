import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PaymentDTO {
  id: number;
  orderId: number;       // Reference to the Order ID
  customerId: number;    // Reference to the Customer ID
  amount: number;
  paymentMethod: string;  // e.g., "Credit Card", "PayPal"
  paymentStatus: string;  // e.g., "COMPLETED", "PENDING", "REFUNDED"
  currency: string;      // Currency used for the payment
  transactionId: string; // For payment gateway tracking
  paymentDate: string;   // Payment date as String (e.g., "YYYY-MM-DD HH:mm:ss")
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'http://localhost:8080/api/payments';

  constructor(private http: HttpClient) {}

  add(payment: PaymentDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/create', payment);
  }

  getAll(): Observable<PaymentDTO[]> {
    return this.http.get<PaymentDTO[]>(this.baseUrl);
  }

  getById(id: number): Observable<PaymentDTO> {
    return this.http.get<PaymentDTO>(this.baseUrl + '/' + id);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + id);
  }

  updateData(payment: PaymentDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + payment.id, payment);
  }
}
