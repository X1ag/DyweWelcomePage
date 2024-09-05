import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss',
})
export class SocialComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.social__content', {
        y: '0px',
        opacity: '1',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.social',
          start: 'top 80%',
          end: 'top 70%',
          scrub: 1,
        },
      });
    }
  }
}
