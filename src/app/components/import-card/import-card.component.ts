import { Component } from '@angular/core';
import { ImportIcon, LucideAngularModule } from 'lucide-angular';
import { SlideButtonComponent } from '../../ui/slide-button/slide-button.component';

@Component({
  selector: 'import-card',
  imports: [LucideAngularModule, SlideButtonComponent],
  templateUrl: './import-card.component.html',
  styleUrl: './import-card.component.scss'
})
export class ImportCardComponent {
  readonly ImportIcon = ImportIcon;
}
