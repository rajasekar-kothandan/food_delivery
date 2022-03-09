import { Observable } from 'rxjs';
import {HttpClient, HttpClientModule}   from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

 
  
  getProducts(): Observable<any> {
    //console.log(this.http.get(`${this.baseUrl}`+'/getAllEmployees'));
    return this.http.get(`${this.baseUrl}`+'/products');
  }
  getProduct(product_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/product/${product_id}`);
  }

  createProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+'/saveproduct', product);
  }

  updateProduct(product_id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updateproduct/${product_id}`, value);
  }

  deleteProduct(product_id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteproduct/${product_id}`, { responseType: 'text' });
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
