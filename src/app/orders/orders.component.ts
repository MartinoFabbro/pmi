import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("P24: Automazione degli ordini");
   }
  ngOnInit(): void {
  }

}
