import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../employee';
import {  RegisterService } from '../employee.service';



@Component({
  selector: 'app-login',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  message!: string;
  hasLoginFailed!: boolean;
  user_id: number=0;
  register: Register=new Register();

  
  ngOnInit(): void {
   
  }


  newUser(): void {
    this.submitted = false;
    this.register = new Register();
  }
  constructor(private  registerService:  RegisterService, private router: Router) { }

  onSubmit() {
    this.submitted = true;
    this.validate();    
  }

  
  registerDetails(id: number){
    this.router.navigate(['details', id]);
  }
  validate() {
   // alert(this.user.username);
    this. registerService.validateRegister(this.register).subscribe(data => {
   
     //console.log(data+" "+this.user)
    if(data!=null)
    {
    
    this.router.navigate([this.registerDetails(this.register.user_id)]);
    sessionStorage.setItem("email_id", this.register.email_id);
    sessionStorage.setItem("login","success");
    this.hasLoginFailed=false;
    }
    else
    {
    this.router.navigate(['/login']);
    this.message="Invalid Credentials....Try again!";
    this.hasLoginFailed=true;
    sessionStorage.setItem("login","failed");
    this.register = new Register();
    }
    },
   error => console.log(error)
   
   );
  }

 
}


