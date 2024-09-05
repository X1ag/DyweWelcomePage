import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-roadmap-item',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './roadmap-item.component.html',
  styleUrls: ['./roadmap-item.component.scss'],
})
export class RoadmapItemComponent {
  @Input() dateStr: string = '';
  @Input() isComplete: string = 'soon';
  @Input() content: string = '';
  @Input() transformY: string = '';

  public setClass() {
    return this.transformY ? 'roadmap__item-' + this.transformY : '';
  }
}
