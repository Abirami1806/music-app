import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../register.service';
import { NotesService } from '../notes.service';
import { FormBuilder } from '@angular/forms';
import { Image } from '../image';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  u2=new User(1,"hash@gmail.com","hash","hash@2000");
  url="";
  errMessage="";
  public nt: Image= new Image("","","");
  public note: Image = new Image("","","");
  
  
  constructor(private _service:RegisterService,private __router : Router,private ntservice:NotesService) {
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
  console.log(registrationForm.value.emailId);
  this._service.registerUserFromRemote(this.u2).subscribe(
    (data:any)=>
    {
      console.log("registration done");
      
      console.log(data);
      this.__router.navigate(['/login']);
    },
    )

}
onUploading(e:any,r:any)
{
  
  if(e.target.files)
  {
    var reader =new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
      this.nt = new Image("","","");
  this.nt.image = this.url;
  this.nt.emailId=r.value.emailId;
  this.nt.userName=r.value.name;

  console.log("uploading image");
   console.log(r.value.emailId);
   console.log(r.value.name);
      console.log(event);
      this.ntservice.addImage(this.nt).subscribe((data =>this.note=data), (error => this.errMessage = error.message));
      
    }
  }
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