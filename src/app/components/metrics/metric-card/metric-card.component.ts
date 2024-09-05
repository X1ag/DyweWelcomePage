import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './metric-card.component.html',
  styleUrl: './metric-card.component.scss',
})
export class MetricCardComponent {
  @Input() value: string = '';
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() cardId: string = '';

  public getCardClass() {
    return this.cardId ? 'card-' + this.cardId : '';
  }
}
