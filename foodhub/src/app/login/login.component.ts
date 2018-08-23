import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  user: User = {
    userName: '',
    pwd: '',
    role: 'admin'
  };
  ngOnInit() {
  }
  submit(value)  {
    console.log(value);
  }

}
