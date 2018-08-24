import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  item: string;
  itemList: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  submit()  {
    if (this.item.length !== 0)    {
    this.itemList.push(this.item);
    this.item = '';
    }
  }
  clear()   {
    this.itemList.pop();
  }

  clearAll()  {
    this.itemList = [];
  }
}
