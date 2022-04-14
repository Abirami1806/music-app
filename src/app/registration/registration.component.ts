import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../register.service';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  u2=new User(1,"hash@gmail.com","hash","hash@2000");
  c
  constructor(private _service:RegisterService,private __router : Router) {
    /*this.form = fb.group({
      psw: ['', [Validators.required]],
      psw_repeat: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')
    })*/
   }

  ngOnInit(): void {
  }
gotoLogin()
{
  this.__router.navigate(['/login']);
}

registerUser(registrationForm:any)
{
  console.log(registrationForm);
  this._service.registerUserFromRemote(this.u2).subscribe(
    (data:any)=>
    {
      console.log("registration done");
      
      console.log(data);
      this.__router.navigate(['/login']);
    },
    )

}




}




/*
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = 'registration';
  constructor(private reg:FormBuilder,private service:DataserviceService){}
    registrationForm=this.reg.group({
      Name1:['',[Validators.required,Validators.pattern(/[a-zA-Z][a-zA-Z ]/)]],
      password:['',[Validators.required,Validators.pattern(/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[^\w\s]).{8,}$/)]],
      confirmpassword:['',[Validators.required,Validators.pattern(/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[^\w\s]).{8,}$/)]],
      emailid:['',[Validators.required,Validators.pattern(/^[a-z0-9.%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/)]],
      phonenumber:['',[Validators.required,Validators.pattern(/^((\+91-?)|0)?[0-9]{10}$/)]]





    })
    get Name1(){
      return this.registrationForm.get('Name1');
    }
    get password(){
      return this.registrationForm.get('password');
    }
    get confirmpassword(){
      return this.registrationForm.get('confirmpassword');
    }
    get emailid(){
      return this.registrationForm.get('emailid');
    }
    get phonenumber(){
      return this.registrationForm.get('phonenumber');
    }

  ngOnInit(): void {
  }



}
*/