import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { gsap, Power2, Elastic, TweenMax, ScrollTrigger } from 'gsap/all';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pmi';

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    }



}

