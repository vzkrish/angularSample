import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SouthInterface } from './south-interface';



@Injectable({
  providedIn: 'root'
})

export class SouthServiceAPIService {
  baseURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {  }
  findAll(): Observable<SouthInterface[]> {
    return this.http.get<SouthInterface[]>(this.baseURL + 'southindian');
  }
}
