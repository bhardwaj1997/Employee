export class Book{
id:number | undefined;
name?:string
inStock : boolean


   constructor (id:number=1 ,name:string="", instock: boolean=true){
this.id = id;
this.name = name
this.inStock= instock
   }
}