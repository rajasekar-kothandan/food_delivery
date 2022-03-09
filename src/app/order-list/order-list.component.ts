import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { RegisterService } from '../employee.service';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Product } from '../product';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Observable<Order[]>=new Observable;
  status!: string | null;
  loginStatus!: string |null;
  constructor(private orderService: OrderService,private router: Router) {}
  
 
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders()
  {
    this.loginStatus=this.orderService.getLoginStatus();

   this.status=sessionStorage.getItem("status");
    this.orders=this.orderService.getOrders();
  
  }
  
  deleteOrder(id: number) {
    this.orderService.deleteOrder(id)
      .subscribe(
        data => {
          console.log(data);
          this.getOrders();
        },
        error => console.log(error));
  }

  orderDetails(id: number){
    this.router.navigate(['mdetails', id]);
  }
  updateOrder(id: number)
  {
    this.router.navigate(['update', id]);
  }
}
