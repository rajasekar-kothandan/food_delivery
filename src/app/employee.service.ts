import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpClientModule}   from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  validateRegister(user: Object): Observable<Object> {
    //alert("in service"+user);
    return this.http.post(`${this.baseUrl}/user`, user);
  }

  
  getRegisters(): Observable<any> {
    //console.log(this.http.get(`${this.baseUrl}`+'/getAllEmployees'));
    return this.http.get(`${this.baseUrl}`+'/registers');
  }
  getRegister(user_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/register/${user_id}`);
  }

  createRegister(register: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+'/saveregister', register);
  }

  updateRegister(user_id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updateregister/${user_id}`, value);
  }

  deleteRegister(user_id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteregister/${user_id}`, { responseType: 'text' });
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
