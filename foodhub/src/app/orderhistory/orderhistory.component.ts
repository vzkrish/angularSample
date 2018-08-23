import { Component, OnInit } from '@angular/core';
import { CatalogAPIService } from '../catalog-api.service';
import { OrderInterface } from '../order-interface';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
  orderHistory: OrderInterface[];
  constructor(private service: CatalogAPIService) { }

  ngOnInit() {
    this.service.retrieveOrders().subscribe(resp => this.orderHistory = resp);
  }

}
