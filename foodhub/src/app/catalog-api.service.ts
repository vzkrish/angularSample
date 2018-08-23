import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalog } from './catalog';
import { OrderInterface } from './order-interface';



@Injectable({ providedIn: 'root'})
export class CatalogAPIService {

  baseURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(this.baseURL + 'icecream');
  }

  retrieveOrders(): Observable<OrderInterface[]> {
    return this.http.get<OrderInterface[]>(this.baseURL + 'myorders');
  }
}
