import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RoadmapItemComponent } from './roadmap-item/roadmap-item.component';

export type RoadmapItemState = 'process' | 'complete' | 'soon';

export interface RoadmapItem {
  dateStr: string;
  content: string;
  isComplete: RoadmapItemState;
  transformY: string;
}

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [RoadmapItemComponent],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss',
})
export class RoadmapComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.roadmap__content-h2', {
        y: '0px',
        opacity: '1',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.roadmap',
          start: 'top 85%',
          end: 'top 75%',
          scrub: 1,
        },
      });
      gsap.to('.roadmap__container', {
        opacity: 1,
        duration: 0.7,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.roadmap',
          start: 'top 70%',
          end: 'top 60%',
          scrub: 1,
        },
      });
      gsap.to('.roadmap__item', {
        y: '0px',
        opacity: 1,
        duration: 0.7,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.roadmap',
          start: 'top 70%',
          end: 'top 100%',
          scrub: 1,
        },
      });
    }
  }

  public items: RoadmapItem[] = [
    {
      dateStr: 'Q4/2024',
      content: 'Testnet Campaign',
      isComplete: 'process',
      transformY: '70',
    },
    {
      dateStr: 'Q1/2025',
      content: 'NFT futures trading | Pool liquidity',
      isComplete: 'soon',
      transformY: '140',
    },
    {
      dateStr: 'Q2/2025',
      content: 'Futures trading of tokens',
      isComplete: 'soon',
      transformY: '210',
    },
    {
      dateStr: 'Q2/2025',
      content: 'Demo Trading',
      isComplete: 'soon',
      transformY: '280',
    },
    {
      dateStr: 'Q2/2025',
      content: 'Copy Trading',
      isComplete: 'soon',
      transformY: '350',
    },
    {
      dateStr: 'Q3/2025',
      content: 'Connecting a project with Solana',
      isComplete: 'soon',
      transformY: '420',
    },
    {
      dateStr: 'Q4/2025',
      content: 'Soon..',
      isComplete: 'soon',
      transformY: '490',
    },
  ];
}
