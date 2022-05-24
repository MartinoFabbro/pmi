import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("P24: Permessi flessibili e granulari");
   }
  ngOnInit(): void {
  }

}
