import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DefaultModule } from './layouts/default/default.module';
import { NapsterService } from './napster.service';
import { YoutubeSearchComponent } from './modules/youtube-search/youtube-search.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RegisterService } from './register.service';







@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    YoutubeSearchComponent
  
   

   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DefaultModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DefaultModule
 

       
  ],
  providers: [NapsterService,RegisterService],
  bootstrap: [AppComponent],

})
export class AppModule { }
