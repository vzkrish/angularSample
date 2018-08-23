import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogAPIService } from '../catalog-api.service';
import { RestaurantInfo } from '../restaurant-info';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restForm: FormGroup;
  restinfo: RestaurantInfo[];
  showForm = false;
  HideButton = true;
  editMode = false;
  pos: any;
  constructor(private builder: FormBuilder, private service: CatalogAPIService,private getservice: CatalogAPIService) {  }

  frmContent = {
    'id': ['', Validators.required],
     'name': ['', Validators.required],
     'description': ['', Validators.required],
     'cuisine': ['', Validators.required],
     'photo': ['', Validators.required],
     'priceLevel': ['', Validators.required],
     'owner_email' : ['', Validators.required]
    };
  ngOnInit() {
  this.restForm = this.builder.group(this.frmContent);
  this.getservice.retrieveRestuarantInfo().subscribe(response => this.restinfo = response);
  }

  submit() {
  console.log(this.restForm.value);
  if (this.editMode) {
    this.service.updateRestaurant(this.restForm.value).subscribe
    (resp => {console.log(resp);
      this.restinfo.splice(this.pos, 1 , resp);
      // this.restinfo[this.pos] = resp; 
    }
    );
    this.showForm = false;
    this.HideButton = true;
  } else {
    this.service.addRestaurant(this.restForm.value).
    subscribe(resp => {
    this.restinfo.push(resp); console.log(resp); } );
    this.showForm = false;
    this.HideButton = true;
  }
}
changeFormStatus() {
  // To hide and show the Add details functionality
  this.showForm = true;
  this.HideButton = false;
}
edit(val) {
  // To Edit the List of Elements
  this.pos = this.restinfo.indexOf(val);
  this.showForm = true;
  this.restForm.setValue(val);
  this.editMode = true;
}

remove(item: any) {
  this.showForm = false;
  this.HideButton = true;
 this.service.removeRestaurant(item.id).subscribe(resp => {
  const pos = this.restinfo.indexOf(item);
  this.restinfo.splice(pos, 1); }) ;

}

}
