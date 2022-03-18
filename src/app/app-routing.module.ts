import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components

import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ApprovalFlowComponent } from './approval-flow/approval-flow.component';






const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'onboarding', component: OnboardingComponent},
  { path: 'suppliers', component: SuppliersComponent},
  { path: 'approval-flow', component: ApprovalFlowComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**',   redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
