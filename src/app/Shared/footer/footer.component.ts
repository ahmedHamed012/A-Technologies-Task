import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SplitButtonModule } from 'primeng/splitbutton';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SplitButtonModule,TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
