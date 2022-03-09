import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blood Bank System';
  constructor(private  registerService: RegisterService, private router: Router) { }
  logout()
  {
    //alert('logout');
    this.registerService.logout();
    this.router.navigate(['/login']);
  }
}
