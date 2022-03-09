import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../employee';
import { RegisterService } from '../employee.service';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css']
})
export class RegisterDetailsComponent implements OnInit {

 
  user_id: number=0;
  register: Register=new Register();

  constructor(private route: ActivatedRoute,private router: Router,private registerService: RegisterService) { }

  ngOnInit() {
    this.register = new Register();

    this.user_id = this.route.snapshot.params['user_id'];
    
    this.registerService.getRegister(this.user_id)
      .subscribe(data => {
        console.log(data)
        this.register = data;
      }, error => console.log(error));
      //this.list();
  }
  updateRegister(id: number)
  {
    this.router.navigate(['update', id]);
  }
  list(){
    this.router.navigate(['/registers']);
  }
}





