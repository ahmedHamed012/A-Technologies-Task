import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToggleButtonModule } from 'primeng/togglebutton';
@Component({
  selector: 'app-speed-dial',
  standalone: true,
  imports: [SpeedDialModule,ToggleButtonModule,FormsModule],
  templateUrl: './speed-dial.component.html',
  styleUrl: './speed-dial.component.scss',
})
export class SpeedDialComponent {
  checked: boolean = false;
  ngOnInit() {
  }
  constructor(private readonly translateService:TranslateService){}
  changeLanguage(){
    if(this.checked == true){
      this.translateService.use('ar');
      document.body.style.direction = 'rtl'
    }
    else{
      this.translateService.use('en');
      document.body.style.direction = 'ltr'

    }
  }
}
