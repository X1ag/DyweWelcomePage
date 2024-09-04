import { Component } from '@angular/core';
import { FaqItemComponent } from './faq-item/faq-item.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FaqItemComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  faqItems = [
    {
      title: 'What is Dywe?',
      content:
        'Dywe is the first decentralised exchange within TON, offering a wide range of trading options. NFT and token futures trading, copy trading, and demo trading are available on the platform.',
    },
    {
      title: 'How does Dywe provide security to users?',
      content:
        'Dywe provides security through smart contracts that automate and protect all transactions on the platform. Regular audits and advanced security technologies help minimise risk and ensure transparency',
    },
    {
      title: 'How is futures trading done at Dywe?',
      content:
        'Futures trading on Dywe allows you to make trades based on predictions of NFT and token price movements. You can use various trading strategies to capitalise on market fluctuations.',
    },
    {
      title: 'How does copytrading on Dywe work?',
      content:
        'Copytrading on Dywe allows users to automatically replicate the trades of successful traders. You can choose a trader with a good history and follow their strategies to maximise your investment.',
    },
    {
      title: 'What assets can be traded on Dywe?',
      content:
        'NFTs and tokens are available for trading on Dywe, providing a wide range of investment and diversification opportunities.',
    },
  ];
  activeIndex: number | null = null;

  setActive(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
