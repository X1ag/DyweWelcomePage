import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-functionality',
  standalone: true,
  imports: [],
  templateUrl: './functionality.component.html',
  styleUrl: './functionality.component.scss',
})
export class FunctionalityComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.functionality__h2', {
        y: '0px',
        opacity: '1',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.functionality',
          start: 'top 90%',
          end: 'top 80%',
        },
      });
      gsap.to('.functionality__grid', {
        y: '0px',
        opacity: '1',
        duration: 0.7,
        scrollTrigger: {
          trigger: '.functionality',
          start: 'top 65%',
          end: 'top 55%',
        },
      });
    }
  }
}
