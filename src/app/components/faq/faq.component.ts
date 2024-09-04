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
      title: 'Question 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquid quam molestias alias, corrupti debitis consectetur temporibus fugit earum placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquid quam molestias alias, corrupti debitis consectetur temporibus fugit earum placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquid quam molestias alias, corrupti debitis consectetur temporibus fugit earum placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquid quam molestias alias, corrupti debitis consectetur temporibus fugit earum placeat.',
    },
    { title: 'Question 2', content: 'Answer 2' },
    { title: 'Question 3', content: 'Answer 2' },
    { title: 'Question 4', content: 'Answer 2' },
    { title: 'Question 5', content: 'Answer 2' },
    {
      title: 'Very looooooong question and very looooooong answer',
      content: 'Answer 2',
    },
  ];
  activeIndex: number | null = null;

  setActive(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
