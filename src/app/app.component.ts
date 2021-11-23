import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { gsap, Power2, Elastic, TweenMax, ScrollTrigger } from 'gsap/all';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pmi';

  constructor(public route:ActivatedRoute,public router:Router) { } // inject service


  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    }



}

