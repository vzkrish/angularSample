import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { TrendingComponent } from './trending/trending.component';
import { UniversalGuard } from './universal.guard';
import { FoodComponent } from './food/food.component';
import { SouthfoodComponent } from './southfood/southfood.component';
import { NorthfoodComponent } from './northfood/northfood.component';
import {ShowmenuComponent} from './showmenu/showmenu.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'login/:next', component: LoginComponent},
  {path: 'hotels', component: RestaurantComponent},
  {path: 'history', component: OrderhistoryComponent, canActivate: [UniversalGuard]},
  {path: 'trending', component: TrendingComponent},
  {path: 'food', component: FoodComponent, children:
  [ {path: 'south', component: SouthfoodComponent, children: [{path: 'showItems/:item', component: ShowmenuComponent }]},
    {path: 'north', component: NorthfoodComponent}]
 },
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
