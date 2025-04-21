import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'nav-card',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './nav-card.component.html',
  styleUrl: './nav-card.component.scss'
})
export class NavCardComponent {
  icon = input.required<LucideIconData>();
  title = input.required<string>();
  body = input.required<string>();
  url = input.required<string>();
}
