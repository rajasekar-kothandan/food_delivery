import { Component, OnInit } from '@angular/core';
import { Register } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../employee.service';

@Component({
  selector: 'app-update-register',
  templateUrl: './update-register.component.html',
  styleUrls: ['./update-register.component.css']
})
export class UpdateRegisterComponent implements OnInit {

  user_id: number=0;
  register: Register=new Register();

  constructor(private route: ActivatedRoute,private router: Router,
    private registerService: RegisterService) { }

  ngOnInit() {
    this.register = new Register();

    this.user_id = this.route.snapshot.params['user_id'];
    
    this.registerService.getRegister(this.user_id)
      .subscribe(data => {
        console.log(data)
        this.register = data;
      }, error => console.log(error));
  }

  updateRegister() {
    this.registerService.updateRegister(this.user_id, this.register)
      .subscribe(data => {
        console.log(data);
        this.register = new Register();
       
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateRegister();    
  }

}
