import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components

import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'pricing', component: PricingComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**',   redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
