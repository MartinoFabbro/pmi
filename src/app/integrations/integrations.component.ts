import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.scss']
})
export class IntegrationsComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("P24: Integrazioni ERP");
   }
  ngOnInit(): void {
  }

}
