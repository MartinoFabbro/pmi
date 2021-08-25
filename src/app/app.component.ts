import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { GsapService } from './services/gsap.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pmi';

  constructor(private _gsapService: GsapService) { } // inject service

  ngOnInit() {
    this.fadeIn1();
    this.pinFeature();    
    this.move1();
    this.move2();
    this.moveextra();
    this.moveTo();
 }

 
public fadeIn1() {
  const anim = this._gsapService;
  const trigger0 = '#fade-0';
  const trigger = '#fade-1';
  const trigger2 = '#fade-2';
  const trigger3 = '#fade-3';
  anim.fade0(trigger0);
  anim.fade1(trigger);
  anim.fade2(trigger2);
  anim.fade3(trigger3);

}

public pinFeature() {
  const anim = this._gsapService;
  const trigger = '.pinnedScroll';
  const trigger2 = '#fade-0'
  anim.pinFeature(trigger, trigger2);
}

public move1() {
  const anim = this._gsapService;
  const trigger = '.move1';
  const trigger2 = '#fade-0'
  anim.move1(trigger, trigger2);
}

public move2() {
  const anim = this._gsapService;
  const trigger = '.move2';
  const trigger2 = '#fade-0'
  anim.move2(trigger, trigger2);
}

public moveextra() {
  const anim = this._gsapService;
  const trigger = '.fadeextra';
  const trigger2 = '#fade-0'
  anim.moveextra(trigger, trigger2);
}

public moveTo() {
  const anim = this._gsapService;
  anim.moveto();
}


// public triggerSticky() {
//    const anim = this._gsapService;
//    const trigger = '#form-sub';
//    const endtrigger = '#endtrigger';
//    anim.triggerSticky(trigger, endtrigger);
//    this.moveRight()
// }

// public moveRight() {
//   const anim = this._gsapService;
//   const trigger = '#endtrigger';
//   anim.moveToRight(trigger);

// }
  
}

