import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule,Routes } from '@angular/router';


import { SharedModule } from 'src/app/shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { FavouritesComponent } from 'src/app/modules/favourites/favourites.component';



@NgModule({
  declarations: [
    DefaultComponent,
    FavouritesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule
  ]
})
export class DefaultModule { }