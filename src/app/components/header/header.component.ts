import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild('buttonMobile') buttonMob: ElementRef | null = null;

  constructor(public elRender: Renderer2, public elRef: ElementRef) {}

  public toggle() {
    this.buttonMob?.nativeElement.classList.toggle('active');
    document.querySelector('.nav-mobile')?.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
  }
}
