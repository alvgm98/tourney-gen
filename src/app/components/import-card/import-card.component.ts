import { Component } from '@angular/core';
import { ImportIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'import-card',
  imports: [LucideAngularModule],
  templateUrl: './import-card.component.html',
  styleUrl: './import-card.component.scss'
})
export class ImportCardComponent {
  readonly ImportIcon = ImportIcon;
}
