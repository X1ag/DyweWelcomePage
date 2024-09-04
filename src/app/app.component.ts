import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FaqComponent } from './components/faq/faq.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { MainComponent } from './components/main/main.component'
import { MetricsComponent } from './components/metrics/metrics.component'
import { NavMobileComponent } from './components/nav-mobile/nav-mobile.component'
import { SocialComponent } from './components/social/social.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavMobileComponent,
    MainComponent,
    MetricsComponent,
    SocialComponent,
    FaqComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'DyweWelcomePage';
}
