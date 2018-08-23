import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Catalog } from '../catalog';
import { CatalogAPIService } from '../catalog-api.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
  providers: [CatalogAPIService]
})
export class TrendingComponent implements OnInit {

  trendinglist: Restaurant[];
  icecreamList: Catalog[];

  constructor(private service: CatalogAPIService) {
    const karachy = {id:101, name: 'Biscuit',
    status: 'open', rating: 4.5, image: 'assets/images/kara.jpg'
    };

    const paradise = {id:102,name: 'Biriyani',
    status:'open',rating:4.0, image: 'assets/images/biryani.jpg'
    };

    const nandini = {id:103, name: 'Nandini Hotel',
    status: 'open', rating: 3.5, image: 'assets/images/nan.jpg'
    };
    this.trendinglist = [karachy,paradise,nandini];
  }

  ngOnInit() {
    this.service.findAll().subscribe(data => this.icecreamList = data);
  }

}
