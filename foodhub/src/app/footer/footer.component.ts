import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  /*oldsocial = [name:'facebook', 'Instagram', 'Twitter'];*/
  social = [{name: 'facebook', class: 'fa fa-facebook-square' },
            {name: 'Twitter', class: 'fa fa-twitter'}, {name: 'Instagram', class: 'fa fa-instagram'}];
  partners = [ 'Swiggy', 'Zomato', 'UberEats'];
  constructor() { }

  ngOnInit() {
  }

}
