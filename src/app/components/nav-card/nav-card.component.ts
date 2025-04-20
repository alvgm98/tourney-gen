import { Component, input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'nav-card',
  imports: [LucideAngularModule],
  templateUrl: './nav-card.component.html',
  styleUrl: './nav-card.component.scss'
})
export class NavCardComponent {
  icon = input.required<LucideIconData>();
  title = input.required<string>();
  body = input.required<string>();
}
