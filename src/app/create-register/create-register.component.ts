import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Register } from '../employee';
import { RegisterService } from '../employee.service';


@Component({
  selector: 'app-create-register',
  templateUrl: './create-register.component.html',
  styleUrls: ['./create-register.component.css']
})
export class CreateRegisterComponent implements OnInit {
  title = 'Registration done';
  register: Register = new Register();
  submitted = false;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  newRegister(): void {
    this.submitted = false;
    this.register = new Register();
  }

  save() {
    this.registerService.createRegister(this.register).subscribe(data => {
      console.log(data+" "+this.register)
     this.register = new Register();
      this.gotoList();
    },
   error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/login']);
  }


}
