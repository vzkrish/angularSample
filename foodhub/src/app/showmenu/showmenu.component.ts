import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-showmenu',
  templateUrl: './showmenu.component.html',
  styleUrls: ['./showmenu.component.css']
})
export class ShowmenuComponent implements OnInit {
  code: any;
  data: string;
  menu: Map<string, string>;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.menu = new Map();
    this.menu.set('101', 'Idly, Dosa, vada');
    this.menu.set('102', 'Curd Rice, sambar rice');
    this.menu.set('103', 'Chapathi, dall');
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.code = params['item'];
      console.log(this.code);
      this.data = this.menu.get(this.code);
    } );
  }

}
