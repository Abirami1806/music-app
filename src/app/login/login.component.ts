import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';
import { User } from '../user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  u1=new User(1,"hash@gmail","hash","hash@2000");
  constructor(private _service:RegisterService,private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser()
  {
    this._service.loginUserFromRemote(this.u1).subscribe(
      (data:any)=>
      {
        console.log("response received");
        console.log(data);
        this._router.navigate(['/loginsuccess']);
      }
     
    )
  
  }

}
// (error:any)=>console.log("exception occured")