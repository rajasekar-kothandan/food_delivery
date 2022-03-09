import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order';
import { Orderinfo } from '../order copy';
import { OrderService } from '../order.service';
import { Product } from '../product';
import { Productinfo } from '../product copy';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  title = 'Registration done';
  order: Orderinfo = new Orderinfo( new Product());
  submitted = false;
  product:Product=new Product;
 

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  }

  newOrder(): void {
    this.submitted = false;
    this.order = new Orderinfo(new Product());
  }

  save() {
    this.orderService.createOrder(this.order).subscribe((data: any) => {
      console.log(data+" "+this.order)
      this.order = new Orderinfo(new Product());
    
      this.gotoList();
    },
   error => console.log(error));
  }


  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/products']);
  }


}
