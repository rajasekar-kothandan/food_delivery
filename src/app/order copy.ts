
import { Product } from "./product";
import { Productinfo } from "./product copy";
import { Registerinfo } from "./register";

export class Orderinfo {
    
    order_id: number=0;
    track_no:number=0;
    address:string='';
    quantity:string='';
    upi_id:string='';



    product_id:number=0;
    description:string='';
    price: number=0;
    available:string='';
    free_delivery:string="";
    category:string='';
    p_name: string='';
   

    constructor(product:Product) {
 
     this.product_id=this.product_id;
     this.p_name=this.p_name;
     this.description=this.description;
     this.price=this.price;
     this.available=this.available;
     this.free_delivery= this.free_delivery;
     this.category=this.category;

    }
  
    
}



