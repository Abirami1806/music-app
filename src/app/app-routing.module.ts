import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FavouritesComponent } from './modules/favourites/favourites.component';


const routes: Routes = [
  {
    path:'',
    component:DefaultComponent,
    children:[{
      path:'',
      component:DashboardComponent
    },{
      path:'favourites',
      component:FavouritesComponent
    }
      ]
  }
  // {
  //   path:"",
  //   loadChildren:() => import("./public/public.module").then(m=>m.PublicModule ) 
  // },
  // {
  //   path:"",
  //   loadChildren:() => import("./dashboard/dashboard.module").then(m=>m.DashboardModule )
   
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
