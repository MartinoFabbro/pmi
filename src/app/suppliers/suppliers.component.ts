import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("P24: Albo Fornitori Digitale");
   }

  ngOnInit(): void {
  }

}
