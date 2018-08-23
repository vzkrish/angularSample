import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrendingComponent } from './trending/trending.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import {FormsModule} from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DistributorComponent } from './distributor/distributor.component';
import { SalesmanComponent } from './salesman/salesman.component';
import { SiblingComponent } from './sibling/sibling.component';
import { HighlightDirective } from './highlight.directive';
import { DetailsComponent } from './details/details.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { FilterPipe } from './filter.pipe';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TrendingComponent,
    MenuComponent,
    OrderComponent,
    ParentComponent,
    ChildComponent,
    DistributorComponent,
    SalesmanComponent,
    SiblingComponent,
    HighlightDirective,
    DetailsComponent,
    OrderhistoryComponent,
    FilterPipe,
    LoginComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  // bootstrap: [ParentComponent, SiblingComponent],
  entryComponents: [DetailsComponent]
})
export class AppModule { }
