import { Component } from '@angular/core';
import { SocialLinksComponent } from './social-links/social-links.component';

@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.scss',
})
export class NavMobileComponent {}
