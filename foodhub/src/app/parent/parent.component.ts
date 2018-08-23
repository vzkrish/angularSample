import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { SalesmanComponent } from '../salesman/salesman.component';
import { DistributorComponent } from '../distributor/distributor.component';
import { CommServiceService } from '../comm-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterContentInit {

  name = 'Crocin';
  response: string;
  @ViewChild(SalesmanComponent) salesman: SalesmanComponent;
  @ViewChild(DistributorComponent) distributors: DistributorComponent;

  distlist: string[];
  salesmanlist: string[];
  info : string;
  constructor(private service: CommServiceService) { }

  ngOnInit() {
    this.service.change('Send Items the earliest');
    this.service.currentMessage.subscribe(msg => this.info = msg);
  }

  onChange(val) {
    this.response = val;
  }
  showDetails() {
    this.salesmanlist = this.salesman.getSalesMen();
    this.distlist = this.distributors.getDistributors();
  }

  ngAfterContentInit(): void {
    this.showDetails();
  }

}
