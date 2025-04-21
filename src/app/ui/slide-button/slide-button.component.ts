import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'slide-button',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './slide-button.component.html',
  styleUrl: './slide-button.component.scss'
})
export class SlideButtonComponent {
  label = input.required<string>();
  icon = input.required<LucideIconData>();
  iconSize = input(22);
  style = input.required<'primary' | 'secondary'>();
}
