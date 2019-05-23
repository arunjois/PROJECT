import { Component, OnInit, Output, Input } from '@angular/core';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})

export class ButtonsComponent implements OnInit {

/* 
 * Method to Modifiy the Document 
*/

  addSection() {
    console.log("Add Section");
  }
  

  addSubSection() {
    console.log("Add Sub Section")
  }

  addList() {
    console.log("Add List");
  }
  

  addTable() {
    console.log("Add Table");
  }

  addImage() {
    console.log("Add Image");
  }

  addFraction() {
    console.log("Add Fraction");
  }
  
  addBullets(){
    console.log("Add Bullets");
  }

  saveAll(){
    console.log("Save");
  }

  revertAll(){
    console.log("Revert");
  }
  constructor() { }

  ngOnInit() {
  }

}
