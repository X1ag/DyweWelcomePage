import { Component } from '@angular/core';
import { MetricCardComponent } from './metric-card/metric-card.component';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [MetricCardComponent],
  templateUrl: './metrics.component.html',
  styleUrl: './metrics.component.scss',
})
export class MetricsComponent {}
