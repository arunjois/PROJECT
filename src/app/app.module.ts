import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { ContollerComponent } from './grid/contoller/contoller.component';
import { TreeComponent } from './grid/tree/tree.component';
import { ViewComponent } from './grid/view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ContollerComponent,
    TreeComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
