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
  @Input() transformX!: string;

  @Output() click = new EventEmitter<void>();

  public toggleActive() {
    this.isActive = !this.isActive;
    this.click.emit();
  }

  public setClass() {
    return {
      active: this.isActive,
      [`faq-${this.transformX}`]: !!this.transformX, // Добавление динамического класса
    };
  }
}
