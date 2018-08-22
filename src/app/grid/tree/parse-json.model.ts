/*
 * Data structure for JSON. So 
 * Interfaces are 
 * 1. Subsection
 * 2. Enumerate      // Can Also be Used for itemize
 * 3. Table 
 * 4. Images
 * 5. Fraction
 * 6. Math Mode      //Math Mode will be under subsection. Under Key
 *                     Math Mode.
 * 
 */


export interface Chapter{
    Heading: String;
}

export interface Subsection {
    Heading: String;
    Text: String;
    Underline: String;
    Italic: String;
    Bold: String;
    Math: String;
}


export interface Enumerate {
    Index: Number;
    Text: Number;
}

export interface Table {
    Algin: String;
    Col: Number;
    Row: Number;
    Body: String;
}

export interface Image {
    Source: String      //Directory of the Image
    Align: String;
    Label: String;
}

export interface Fraction {
    Numerator: String;
    Denominator: String;
}


//JTex 
export class JTex {
    addData(){

    }
    removeData(){

    }
    appendData(){
        
    }

}




/*
* For reference https://www.typescriptlang.org/play/index.html#src=interface%20Item%20{%0D%0A%20%20%20%20id%3A%20number%3B%0D%0A%20%20%20%20size%3A%20number%3B%0D%0A}%0D%0Ainterface%20Example%20{%0D%0A%20%20%20%20name%3A%20string%3B%0D%0A%20%20%20%20items%3A%20{%0D%0A%20%20%20%20%20%20%20%20[key%3A%20string]%3A%20Item%0D%0A%20%20%20%20}%3B%0D%0A}%0D%0A%0D%0Avar%20obj%3A%20Example%20%3D%20{%0D%0A%20%20%20%20name%3A%20%22test%22%2C%0D%0A%20%20%20%20items%3A%20{%0D%0A%20%20%20%20%20%20%20%20%22a%22%3A%20{%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%201%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2010%0D%0A%20%20%20%20%20%20%20%20}%2C%0D%0A%20%20%20%20%20%20%20%20%22b%22%3A%20{%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%202%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2034%0D%0A%20%20%20%20%20%20%20%20}%0D%0A%20%20%20%20}%0D%0A}
* 
* interface Item {     
*     id: number; 
*     size: number; 
* }
* interface Example {     
*     name: string;     
*     items: {         
*         [key: string]: Item     
*     }; 
* }  
* var obj: Example = {     
*     name: "test",     
*     items: {         
*         "a": {             
*             id: 1,             
*             size: 10         
*         },         
*         "b": {             
*             id: 2,             
*             size: 34         
*         }     
*     } 
* }
*/