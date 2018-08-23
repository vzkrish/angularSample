import { Component, OnInit } from '@angular/core';
import { Southcusine } from '../southcusine';
import { SouthServiceAPIService } from '../south-service-api.service';
import { SouthInterface } from '../south-interface';

@Component({
  selector: 'app-southcatalog',
  templateUrl: './southcatalog.component.html',
  styleUrls: ['./southcatalog.component.css'],
  providers: [SouthServiceAPIService]
})
export class SouthcatalogComponent implements OnInit {
  southList: Southcusine[];
  southListAPI: SouthInterface[];

  constructor(private service: SouthServiceAPIService) {

  }

  ngOnInit() {
    this.service.findAll().subscribe(data => this.southListAPI = data);
  }

}
