import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alogin } from '../alogin';
import { AloginService } from '../alogin.service';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {
  alogin: Alogin = new Alogin();
  submitted = false;
  message!: string;
  hasLoginFailed!: boolean;
 
  ngOnInit(): void {
  }

  newAlogin(): void {
    this.submitted = false;
    this.alogin = new Alogin();
  }
  constructor(private  aloginService:  AloginService, private router: Router) { }

  onSubmit() {
    this.submitted = true;
    this.validate();    
  }

  validate() {
   // alert(this.user.username);
    this. aloginService.validateAlogin(this.alogin).subscribe(data => {
   
     //console.log(data+" "+this.user)
    if(data!=null)
    {
    
    this.router.navigate(['/admin']);
    sessionStorage.setItem("email_id", this.alogin.email_id);
    sessionStorage.setItem("alogin","success");
    this.hasLoginFailed=false;
    }
    else
    {
    this.router.navigate(['/alogin']);
    this.message="Invalid Credentials....Try again!";
    this.hasLoginFailed=true;
    sessionStorage.setItem("alogin","failed");
    this.alogin = new Alogin();
    }
    },
   error => console.log(error)
   
   );
  }

 
}
