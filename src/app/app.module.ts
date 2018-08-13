import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatGridListModule,
  MatMenuModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { ContollerComponent } from './grid/contoller/contoller.component';
import { TreeComponent } from './grid/tree/tree.component';
import { ViewComponent } from './grid/view/view.component';
import { ButtonsComponent } from './grid/contoller/buttons/buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ContollerComponent,
    TreeComponent,
    ViewComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
