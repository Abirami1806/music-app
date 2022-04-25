import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';
import { User } from '../user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  u1=new User(1,"","","");
  msg='';
 
  constructor(private _service:RegisterService,private _router : Router) {
  }
  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({});
  



  loginUser(loginForm:any)
  {
    this._service.loginUserFromRemote(this.u1).subscribe(
      _data => 
      {console.log("response received");
      console.log(_data);
      console.log(_data.userName);
      this._router.navigate(['/search']) },
      _error => {
        console.log("exception occured");
      this.msg="Incorrect credentials, Please enter valid emailId and Password";
      }
    )
  }


  gotoRegister()
  {
    this._router.navigate(['/register']);
  }


}
// (error:any)=>console.log("exception occured")

/*loginUser(loginForm:any)
{
  console.log(loginForm);
  this._service.loginUserFromRemote(this.u1).subscribe(
    (data:any)=>
    {
      console.log("response received");
      
      console.log(data);
      this._router.navigate(['/']);
    },
    )

}*/