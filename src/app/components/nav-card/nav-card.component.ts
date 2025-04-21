import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';
import { SlideButtonComponent } from '../../ui/slide-button/slide-button.component';

@Component({
  selector: 'nav-card',
  imports: [RouterLink, LucideAngularModule, SlideButtonComponent],
  templateUrl: './nav-card.component.html',
  styleUrl: './nav-card.component.scss'
})
export class NavCardComponent {
  icon = input.required<LucideIconData>();
  btnIcon = input.required<LucideIconData>();
  title = input.required<string>();
  body = input.required<string>();
  url = input.required<string>();
}
