import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  public order:Order |any;
  order_id: number=0;
 
 
  constructor(private route: ActivatedRoute,private router: Router,private orderService: OrderService) { }

  ngOnInit(): void {
    this.order_id = this.route.snapshot.params['order_id'];
    this.orderService.getOrder(this.order_id).subscribe((data: any) => {
        console.log(data)
        this.order = data;
        
      }, error => console.log(error));
      //this.list();
  }

  list(){
    this.router.navigate(['orders']);
  }
}

