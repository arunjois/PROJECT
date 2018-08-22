import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ParseJsonService {

  getJSONData() {
    return JSON.stringify(
      {
        "name": "Sample Latex",
        "version": "0.0.1",
        "chapter 1": {
          "name": "Basic",
          "section": {
            "name": "Section Type",
            "subsection 1.1": {
              "heading": "Section Type",
              "text 1": "The Basic Section in a book are chapter,section, subsection and so on. These section will appear in the ",
              "underline": "table of contents",
              "text 2": "of the book",
            },
            "subsection 1.2": {
              "heading": "Example Subsection",
              "text": "This is just one exaple for a subsection.",
            },
            "subsection 1.3": {
              "heading": "Basic Page Setting",
              "text": "In order to show how the basic page setting are set up, we will use a long dummy text with the package ",
            }
          }
        }
      }
    );
  }
  
  constructor() { }
}
