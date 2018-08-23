import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesman',
  templateUrl: './salesman.component.html',
  styleUrls: ['./salesman.component.css']
})
export class SalesmanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getSalesMen(): string[]{
    return ['reddy','karthik','nair','khan'];
    }


}
