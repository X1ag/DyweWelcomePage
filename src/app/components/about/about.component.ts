import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.about__content-h2', {
        y: '0px',
        opacity: '1',
        duration: 0.7,
        scrollTrigger: {
          trigger: '.about',
          start: 'top 90%',
          end: 'top 80%',
          scrub: 1,
        },
      });
      gsap.to('.about__grid', {
        y: '0px',
        opacity: '1',
        duration: 0.5,
        ease: 'elastic.inOut',
        scrollTrigger: {
          trigger: '.about',
          start: 'top 90%',
          end: 'top 85%',
          scrub: 1,
        },
      });
    }
  }
}
