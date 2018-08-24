import { Component, OnInit } from '@angular/core';
import { Navlink } from '../navlink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mainTitle = 'Welcome to Food Hub';

  pageHeadLinksOld = ['Restuarant', 'Order', 'TrackOrder'];

  pageHeadLinks: Navlink[] = [
    {link: '/login', text: 'Home'} ,
    {link: '/hotels', text: 'Hotels'} ,
    {link: '/food', text: 'Cusinie'} ,
    {link: '/history', text: 'My Orders'} ,
    {link: '/register', text: 'Register'},
    {link: '/trending', text: 'Trending'}  ] ;
  constructor() { }

  ngOnInit() {
  }

}
