import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { GsapService } from '../services/gsap.service';
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import { animate } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {


  constructor(private _gsapService: GsapService) { } // inject service

  ngAfterViewInit(): void {
    // this.fadeIn1();
    // this.pinFeature();    
    // this.move1();
    // this.move2();
    // this.moveextra();
    // this.moveTo();
    this.ilProdotto();
    this.pc();
    this.highLight();
    // this.setItem();
    this.moveInTipiem();
    this.moveInTipiem2();
  }
  
  ngOnInit(): void {
    ScrollTrigger.refresh(true)
  }

  ngOnDestroy(): void {
    this._gsapService.killBIll();
  }

  public fadeIn1() {
    const anim = this._gsapService;
    const trigger0 = '#fade-0';
    const trigger = '#fade-1';
    const trigger2 = '#fade-2';
    const trigger3 = '#fade-3';
    const triggerPattern = '.pattern';
    anim.fade0(trigger0);
    anim.fade1(trigger);
    anim.fade2(trigger2);
    anim.fade3(trigger3);
    anim.fadePattern(triggerPattern);
  
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
  
  public ilProdotto() {
    const anim = this._gsapService;
    const trigger = '.animationProduct';
    const trigger2 = '#trigger-product'
    anim.ilProdotto(trigger, trigger2);
  }
  
  
  public pc() {
    const anim = this._gsapService;
    const trigger = '.pc';
    const trigger1 = '.pc2';
    const trigger2 = '#inline-full-name'
    anim.pc(trigger, trigger2);
    anim.pc2(trigger1, trigger2);
  }
  
  
  public highLight() {
    const anim = this._gsapService;
    const trigger = '.appointment';
    const trigger1 = '.triggerNavbar';
    anim.highLight(trigger, trigger1);
  }
  
  
  public setItem() {
    const anim = this._gsapService;
    anim.setFeature()
  }
  
  public moveInTipiem() {
    const anim = this._gsapService;
    const trigger = '.moveInTipiem';
    const trigger1 = '.triggerTipiem';
    anim.moveInTipiem(trigger, trigger1)
  
  }
  
  public moveInTipiem2() {
    const anim = this._gsapService;
    const trigger1 = '.triggerTipiem';
    const trigger = '.moveInTipiemText';
    anim.moveInTipiemText(trigger, trigger1)
  
  }

}
