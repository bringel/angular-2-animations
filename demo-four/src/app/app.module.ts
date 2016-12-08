import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShiplistComponent } from './components/shiplist/shiplist.component';
import { ShipDetailComponent } from './components/ship-detail/ship-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ShiplistComponent,
    ShipDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
