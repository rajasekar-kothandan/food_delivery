import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AloginService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  validateAlogin(alogin: Object): Observable<Object> {
    //alert("in service"+user);
    return this.http.post(`${this.baseUrl}/admin`, alogin);
  }

  isAloginLoggedIn() {
    let alogin = sessionStorage.getItem("username")
    if (alogin === null) return false
    return true
}

logout() {
  sessionStorage.removeItem("username");
  sessionStorage.setItem("alogin","failed");
  
}
getaLoginStatus()
{
  const loginStatus=sessionStorage.getItem("alogin");
  return loginStatus;
}
}
