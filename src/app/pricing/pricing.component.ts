import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor( private router: Router, private titleService:Title) { 
    this.titleService.setTitle("P24: Pricing");
  }

  ngOnInit(): void {
  }

  onboarding(type: string){
    this.router.navigate(['/onboarding'], { queryParams: {type}}); // navigate to other page
  }

}
