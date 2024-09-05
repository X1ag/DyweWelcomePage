import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { MetricCardComponent } from './metric-card/metric-card.component';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [MetricCardComponent],
  templateUrl: './metrics.component.html',
  styleUrl: './metrics.component.scss',
})
export class MetricsComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.metrics__content-h2', {
        y: '0px',
        opacity: '1',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.metrics',
          start: 'top 90%',
          end: 'top 80%',
          scrub: 1,
        },
      });
      gsap.to('.metric__card', {
        y: '0px',
        opacity: '1',
        duration: 3,
        scrollTrigger: {
          trigger: '.metrics',
          start: 'top 70%',
          end: 'top 60%',
          scrub: 1,
        },
      });
    }
  }
}
