import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TaxDTO {
  taxId: number;
  taxType: string;  // e.g., "GST", "VAT"
  rate: number;
  description: string;  // Description of the tax
  taxCategory: string;  // Category of the tax (e.g., "Sales", "Income")
  isActive: boolean;  // Whether the tax is currently active
  effectiveFrom: string;  // Start date for the tax rate (ISO format)
  effectiveTill: string;  // End date for the tax rate (ISO format, optional)
}

@Injectable({
  providedIn: 'root'
})
export class TaxService {
  private baseUrl = 'http://localhost:8080/api/taxes';

  constructor(private http: HttpClient) {}

  add(tax: TaxDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/create', tax);
  }

  getAll(): Observable<TaxDTO[]> {
    return this.http.get<TaxDTO[]>(this.baseUrl);
  }

  getById(taxId: number): Observable<TaxDTO> {
    return this.http.get<TaxDTO>(this.baseUrl + '/' + taxId);
  }

  remove(taxId: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + taxId);
  }

  updateData(tax: TaxDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + tax.taxId, tax);
  }
}
