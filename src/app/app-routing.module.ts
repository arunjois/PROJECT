import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordComponent } from './word/word.component';
const routes: Routes = [
  //basic Routes
  {path:'word',component:WordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
