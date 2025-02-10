import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// export interface PaymentDTO {
//   paymentId: any;
//   orderId: number;       // Reference to the Order ID
//   customerId: number;    // Reference to the Customer ID
//   amount: number;
//   paymentMethod: string;  // e.g., "Credit Card", "PayPal"
//   paymentStatus: string;  // e.g., "COMPLETED", "PENDING", "REFUNDED"
//   currency: string;      // Currency used for the payment
//   transactionId: string; // For payment gateway tracking
//   paymentDate: Date;   // Payment date as String (e.g., "YYYY-MM-DD HH:mm:ss")
// }

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'http://localhost:8080/api/payments';

  constructor(private http: HttpClient) {}

  add(payment: any){
    return this.http.post(this.baseUrl, payment);
  }

  getAll(){
    return this.http.get(this.baseUrl);
  }

  getById(id: any){
    return this.http.get(this.baseUrl + '/' + id);
  }

  remove(id: any) {
    return this.http.delete(this.baseUrl +"/"+ id);
  }

  updateData(payment: any) {
    return this.http.put(this.baseUrl + '/' + payment.paymentId, payment);
  }


}
