import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// export interface ReturnDTO {
//   returnId: number;
//   customerOrderId: number;  // ID of the associated customer order (if applicable)
//   supplierReturnId: number;  // ID of the associated supplier return (if applicable)
//   reasonForReturn: string;  // Reason for the return (e.g., defective, wrong item)
//   returnDate: string;  // Date of the return (ISO format)
//   returnStatus: string;  // Status of the return (e.g., pending, processed)
//   amountRefunded: number;  // Amount refunded for the return
//   returnType: string;  // Type of the return (e.g., full, partial)
//   refundMethod: string;  // Method of refund (e.g., store credit, original payment)
//   quantity: number;
// }

@Injectable({
  providedIn: 'root'
})
export class ReturnService {
  private baseUrl = 'http://localhost:8080/api/returns';

  constructor(private http: HttpClient) {}

  add(returnData: any) {
    return this.http.post(this.baseUrl, returnData);
  }

  getAll() {
    return this.http.get(this.baseUrl);
  }

  getById(returnId: any) {
    return this.http.get(this.baseUrl + '/' + returnId);
  }

  remove(returnId: any) {
    return this.http.delete(this.baseUrl + '/' + returnId);
  }

  updateData(returnData: any) {
    return this.http.put(this.baseUrl + '/' + returnData.returnId, returnData);
  }
}
