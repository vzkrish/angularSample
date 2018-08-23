import { Component, OnInit } from '@angular/core';
import { CommServiceService } from '../comm-service.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  info: string;

  constructor(private service: CommServiceService) { }

  ngOnInit() {
    this.service.change('Hey what is the wait???');
    this.service.currentMessage.subscribe(msg => this.info = msg);
  }

}
