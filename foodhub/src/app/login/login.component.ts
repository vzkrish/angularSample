import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  next: string;
  constructor(private route: ActivatedRoute, private router: Router) { }
  user: User = {
    userName: '',
    pwd: '',
    role: 'admin'
  };
  ngOnInit() {
    this.route.params.subscribe(pathparam => {
      console.log(pathparam['next']);
      this.next = pathparam['next'];
    });
  }
  submit(value)  {
    console.log(value);
    console.log(this.next);
    sessionStorage.setItem('userLogged', 'true');
      const url = '/' + this.next;
      this.router.navigate(['/' + this.next]);
  }

}
