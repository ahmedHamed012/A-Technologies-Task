import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule, ProgressBarModule, ToastModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  @Input() progress!: string;
}
