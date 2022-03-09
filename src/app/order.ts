
import { Productinfo } from "./product copy";
import { Registerinfo } from "./register";

export interface Order {
    
    order_id:number;
    track_no:number;
    address:string;
    quantity:string;
    upi_id:string;


    product:Productinfo;
    product_id:number;
    p_name: string;
    description: string;
    price: number;
    available: string;
    free_Delivery: string;
    category: string;

    user:Registerinfo
    user_id:number;
    f_name:string;
    l_name:string;
    email_id:string;
    phone_no:number;
    password:string;
   
  
    
}



