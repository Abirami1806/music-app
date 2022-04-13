import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule,Routes } from '@angular/router';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { FavouritesComponent } from 'src/app/modules/favourites/favourites.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
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