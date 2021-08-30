import { Injectable } from '@angular/core';
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import { gsap, Power2, Elastic } from 'gsap/all';


declare var $:JQueryStatic;


@Injectable({
providedIn: 'root'
})
export class GsapService {
/*---=| GSAP v3 Animation Engine |=---*/
 
/*--=| Fade From |=--*/
public fFadeFrom(e, tym, alfa, dlay) {
  gsap.from(e, { duration: tym, opacity: alfa, ease: Power2, delay: dlay });
}

//navbar 

public highLight(trigger, trigger2) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(trigger, {
    x: "5%",
    onStart: function() {
      document.getElementById("appointment").classList.add('highlightAppointment');
    },
    onReverseComplete: function() {
      document.getElementById("appointment").classList.remove('highlightAppointment');
    },
    duration: .3,
    scrollTrigger: {
      trigger: trigger2,
      start: "top top", 
      reverse: "top top",
      toggleActions: "play none reverse reverse",
      // toggleClass: {targets: ".my-selector", className: "active"}
    },
  })
}


public triggerSticky(trigger, endtrigger) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
        trigger: trigger,
        start: "top top", 
        toggleClass: "active",
        end: "bottom top",
        endTrigger: endtrigger,
        pin: true, 
        pinSpacing: false,
        scrub: 1
  });
}

public moveToRight(trigger) {
    gsap.to(trigger, 1, {x:500})
}

// initial features fade

public fadePattern(trigger) {
  gsap.from(trigger, {
    opacity: 0, 
    y: 10, 
    delay: 1.2,
    duration: 1,
    ease: "slow(0.7, 0.7, false)"
  });}


public fade0(trigger) {
  gsap.from(trigger, {
    opacity: 0, 
    y: 10, 
    delay: 0.2,
    duration: 1,
    ease: "slow(0.7, 0.7, false)"
  });}

public fade1(trigger) {
  gsap.from(trigger, {
    opacity: 0, 
    x: 50, 
    delay: 0.5,
    duration: 2,
    ease: "slow(0.7, 0.7, false)"
  });}

public fade2(trigger) {
  gsap.from(trigger, {
    opacity: 0, 
    delay: 1,
    ease: "slow(0.7, 0.7, false)",
    duration: 2.5
  });}

public fade3(trigger) {
  gsap.from(trigger, {
    opacity: 0, 
    x: 50,
    delay: 1,
    duration: 2,
    ease: "circ.out"
  });}

// first scroll animation

public pinFeature(trigger, trigger2) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(trigger, {
    x: "-155%",
    y: 750,
    scale: 1.8,  
    onStart: function() {
      document.getElementById("fade-2").classList.add('randomClass');
    },
    onReverseComplete: function() {
      document.getElementById("fade-2").classList.remove('randomClass');
    },
    scrollTrigger: {
      trigger: trigger2,
      scrub: true,
      start: "top top", 
      toggleActions: "play none none none",
      toggleClass: "bg--size__normal",
    },
  })
}

public move1(trigger, trigger2) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(trigger, {
    x: "25%",
    y: "-30%",
    scrollTrigger: {
      trigger: trigger2,
      start: "top top", 
      scrub: true,
      toggleActions: "play play play none"
    },
  })
}

public moveto() {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.to(".ano", {duration: 2, scrollTo: {y: 400, x: 200}, ease: "power2"});

}

public move2(trigger, trigger2) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(trigger, {
    y: "-90%",
    scrollTrigger: {
      trigger: trigger2,
      start: "top top", 
      scrub: true,
      toggleActions: "play none none none",
    },
  })
}

public moveextra(trigger, trigger2) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(trigger, {
    x: "6%",
    y: "-39.5%",
    alpha: 1,
    scrollTrigger: {
      trigger: trigger2,
      scrub: true,
      start: "top top", 
      toggleActions: "play none none none",
    },
  })
}

// il prodotto

public ilProdotto(trigger, trigger2) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(trigger, {
    y: "-22%",
    alpha: 1,
    scrollTrigger: {
      trigger: trigger2,
      scrub: true,
      start: "top top", 
      toggleActions: "play none none none",
    },
  })
}

// testimonial


public pc(trigger, trigger2) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(trigger, {
    x: "45%",
    alpha: 1,
    duration: .6,
    scrollTrigger: {
      trigger: trigger2,
      start: "top top", 
      reverse: "top top",
      toggleActions: "play none reverse reverse",
    },
  })
}


public pc2(trigger, trigger2) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(trigger, {
    alpha: 1,
    x: "-145%",
    duration: .6,
    scrollTrigger: {
      trigger: trigger2,
      start: "top top", 
      reverse: "top top",
      toggleActions: "play none reverse reverse",
    },
  })
}










}