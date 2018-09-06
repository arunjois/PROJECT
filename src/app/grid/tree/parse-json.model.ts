import { del } from "selenium-webdriver/http";
import { templateJitUrl } from "@angular/compiler";

/* 
 * Using Linked List to store data
 */ 


//Class Link
export class Link {
    key:string;
    value:string;
    nextNode:Link;
    constructor(k,v) {
        this.key=k;
        this.value=v;
    }
}

//Class LinkedList 
export class LinkedList {
    list:Link;
    addNewItem(tmp:Link) {
        if(this.list==null) {
            this.list=tmp;
            return true;
        }
        else {
            this.list.nextNode=tmp;
            tmp.nextNode=null;
            return true;
        }
    }
    deleteItem(key:string) {
        temp:Link;
        del:Link;
        
    }
    findItem(x:string) {

    }


}