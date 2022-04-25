import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from 'src/app/login/login.component';
@NgModule({
  declarations: [
    DashboardComponent
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { 
  
  constructor(){

  }
}
