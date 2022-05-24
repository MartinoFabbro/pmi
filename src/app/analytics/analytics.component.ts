import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("P24: Dashboard Analitiche");
   }
  ngOnInit(): void {
  }

}
