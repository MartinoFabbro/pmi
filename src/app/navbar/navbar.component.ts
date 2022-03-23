import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery' 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public route:ActivatedRoute,public router:Router) { } // inject service

  ngOnInit(): void {
    this.animation()
  }

  public animation() {
    $(document).ready(function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
      });
    });
  }

}
