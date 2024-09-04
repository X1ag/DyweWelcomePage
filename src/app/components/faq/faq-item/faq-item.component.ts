import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './faq-item.component.html',
  styleUrl: './faq-item.component.scss',
})
export class FaqItemComponent {
  @Input() isActive: boolean = false;
  @Input() title!: string;
  @Input() content!: string;

  @Output() click = new EventEmitter<void>();

  toggleActive() {
    this.isActive = !this.isActive;
    this.click.emit();
  }
}
