import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
