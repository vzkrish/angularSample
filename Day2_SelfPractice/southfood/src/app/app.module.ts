import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SouthcatalogComponent } from './southcatalog/southcatalog.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    SouthcatalogComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
