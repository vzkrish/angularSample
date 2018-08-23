import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalog } from './catalog';
import { OrderInterface } from './order-interface';
import { RestaurantInfo } from './restaurant-info';




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
  retrieveRestuarantInfo(): Observable<RestaurantInfo[]> {
    return this.http.get<RestaurantInfo[]>(this.baseURL + 'restaurant');
  }

  addRestaurant(obj: RestaurantInfo) {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.post<RestaurantInfo>(this.baseURL + 'restaurant', obj, {headers});
  }

  removeRestaurant(id: any): Observable<RestaurantInfo> {
    return this.http.delete<RestaurantInfo>(this.baseURL + 'restaurant/' + id);
  }

  updateRestaurant(obj: RestaurantInfo){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.put<RestaurantInfo>(this.baseURL + 'restaurant/' + obj.id, obj, {headers});
  }
}
