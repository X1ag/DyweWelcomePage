import { Component } from '@angular/core';
import { SocialLinksComponent } from '../nav-mobile/social-links/social-links.component';
import { SocialLinksMainComponent } from './social-links-main/social-links-main.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SocialLinksComponent, SocialLinksMainComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
