import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Register } from '../employee';
import { RegisterService } from '../employee.service';


@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css']
})

//component-->service-->http request

export class RegisterListComponent implements OnInit {
  registers: Observable<Register[]>=new Observable;
  email_id!: string | null;
  loginStatus!: string |null;

  constructor(private registerService: RegisterService,private router: Router) {}
  
  ngOnInit(): void {
    this.getRegisters();
  }

  getRegisters()
  {
    this.loginStatus=this.registerService.getLoginStatus();

   this.email_id=sessionStorage.getItem("email_id");
    this.registers=this.registerService.getRegisters();
  
  }
  
  deleteRegister(id: number) {
    this.registerService.deleteRegister(id)
      .subscribe(
        data => {
          console.log(data);
          this.getRegisters();
        },
        error => console.log(error));
  }

  registerDetails(id: number){
    this.router.navigate(['details', id]);
  }
  updateRegister(id: number)
  {
    this.router.navigate(['update', id]);
  }
}
