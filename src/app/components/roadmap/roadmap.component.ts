import { Component } from '@angular/core';
import { RoadmapItemComponent } from './roadmap-item/roadmap-item.component';

export type RoadmapItemState = 'process' | 'complete' | 'soon';

export interface RoadmapItem {
  dateStr: string;
  content: string;
  isComplete: RoadmapItemState;
}

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [RoadmapItemComponent],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss',
})
export class RoadmapComponent {
  public items: RoadmapItem[] = [
    {
      dateStr: 'Q4/2024',
      content: 'Testnet Campaign',
      isComplete: 'process',
    },
    {
      dateStr: 'Q1/2025',
      content: 'NFT futures trading | Pool liquidity',
      isComplete: 'soon',
    },
    {
      dateStr: 'Q2/2025',
      content: 'Futures trading of tokens',
      isComplete: 'soon',
    },
    {
      dateStr: 'Q2/2025',
      content: 'Demo Trading',
      isComplete: 'soon',
    },
    {
      dateStr: 'Q2/2025',
      content: 'Copy Trading',
      isComplete: 'soon',
    },
    {
      dateStr: 'Q3/2025',
      content: 'Connecting a project with Solana',
      isComplete: 'soon',
    },
    {
      dateStr: 'Q4/2025',
      content: 'Soon..',
      isComplete: 'soon',
    },
  ];
}
