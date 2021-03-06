import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FavouritesComponent } from './modules/favourites/favourites.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './shared/components/search/search.component';
import { YoutubeSearchComponent } from './modules/youtube-search/youtube-search.component';
import { CommonModule } from '@angular/common';
import { RecommendationComponent } from './recommendation/recommendation.component';

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
    },{
      path:'search',
      component:SearchComponent
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'register',
      component:RegistrationComponent
    },
    {
      path:'youtube-search',
      component:YoutubeSearchComponent
    },
    {
    path:'Recommendation',
    component:RecommendationComponent
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
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }