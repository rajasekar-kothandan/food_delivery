import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Order } from './order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
 

  private baseUrl = 'http://localhost:8080/api/v1';

 

 

  constructor(private http: HttpClient) { }
  getOrders(): Observable<any> {
    //console.log(this.http.get(`${this.baseUrl}`+'/getAllEmployees'));
    return this.http.get(`${this.baseUrl}`+'/orders');
  }
  getOrder(order_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/order/${order_id}`);
  }

  createOrder(order: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+'/saveorder', order);
  }

  updateOrder(order_id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updateorder/${order_id}`, value);
  }

  deleteOrder(order_id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteorder/${order_id}`, { responseType: 'text' });
  }


  
  isUserLoggedIn() {
    let user = sessionStorage.getItem("username")
    if (user === null) return false
    return true
}

logout() {
  sessionStorage.removeItem("username");
  sessionStorage.setItem("login","failed");
  
}
getLoginStatus()
{
  const loginStatus=sessionStorage.getItem("login");
  return loginStatus;
}
}
