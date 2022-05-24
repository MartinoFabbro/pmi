import { AfterContentInit, ViewChild, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { GsapService } from '../services/gsap.service';
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import { NgsRevealModule } from 'ngx-scrollreveal';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material/tooltip';
import {MatTooltip, TooltipPosition} from '@angular/material/tooltip';
import {Title} from "@angular/platform-browser";


/** Custom options the configure the tooltip's default show/hide delays. */
export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 200,
  hideDelay: 200,
  touchendHideDelay: 200,
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}],
})

export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('tooltip') tooltip: MatTooltip;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];



  emailInputControl: FormControl;

  constructor(private _gsapService: GsapService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private titleService:Title) { 
    this.titleService.setTitle("Procurement24Ore");
  } // inject service

  ngAfterViewInit(): void {
    // this.fadeIn1();
    // this.pinFeature();
    // this.move1();
    // this.move2();
    // this.moveextra();
    // this.moveTo();
    this.unprospect();
    this.ilProdotto();
    this.pc();
    this.highLight();
    // this.setItem();
    this.moveInTipiem();
    this.moveInTipiem2();
  }

  ngOnInit(): void {
    this.emailInputControl = this.formBuilder.control('', [Validators.email, Validators.required]);

    ScrollTrigger.refresh(true)
  }

  ngOnDestroy(): void {
    this._gsapService.killBIll();
  }

  onboarding(type: string){
    if (this.emailInputControl.valid) {
		  this.router.navigate(['/onboarding'], { queryParams: {type, email: this.emailInputControl.value}}); // navigate to other page
    }
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

  public copy = ()=> {
    this.tooltip.show()
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

  public unprospect() {
    const anim = this._gsapService;
    const trigger = '.prospect';
    anim.unprospect(trigger);
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
