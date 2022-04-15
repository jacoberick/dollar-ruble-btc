import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class XchangeAPIService {
  private apiUrl = 'https://api.exchangerate.host/latest?base=USD';

  constructor(private http: HttpClient) {}

  getXchangeData(): Observable<Object> {
    return this.http.get(this.apiUrl);
  }
}
