import { Component } from '@angular/core';
import { NavCardComponent } from '../../components/nav-card/nav-card.component';
import { LucideAngularModule, ListIcon, BracketsIcon, GitMergeIcon, LayersIcon } from 'lucide-angular';
import { ImportCardComponent } from '../../components/import-card/import-card.component';

@Component({
  selector: 'app-landing',
  imports: [NavCardComponent, ImportCardComponent, LucideAngularModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  icons = [ListIcon, BracketsIcon, GitMergeIcon, LayersIcon]
}
