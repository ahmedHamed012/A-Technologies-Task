import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChipsModule } from 'primeng/chips';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [
    ChipsModule,
    FormsModule
  ],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {
  @Input() maxChips!: number;
  chipSizeLimit:number = 0;
ngOnInit(){
  this.chipSizeLimit = this.maxChips; 
}
  values: string[] = [];

  tooltipText: string = 'صفقة جديدة'; 
  checkChipsSize() {
    if (this.values.length > this.chipSizeLimit) {
      this.tooltipText = 'صفقة جديدة'; 
      const chips = document.getElementsByTagName('p-chips')[0] as HTMLElement;
      chips.style.overflowY = 'scroll';
    } else {
      this.tooltipText = ''; 
      const chips = document.getElementsByTagName('p-chips')[0] as HTMLElement;
      chips.style.overflowY = 'hidden';

    }

  }
}
