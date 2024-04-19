import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../Shared/header/header.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarComponent } from '../../../Shared/progress-bar/progress-bar.component';
import { ChipsModule } from 'primeng/chips';
import { ChipsComponent } from '../../../Shared/chips/chips.component';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from '../../../Shared/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SpeedDialComponent } from '../../../Shared/speed-dial/speed-dial.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '../../../Shared/dynamic-dialogue/demo/product';
import { ProductListDemo } from '../../../Shared/dynamic-dialogue/productlistdemo';
import { Footer } from '../../../Shared/dynamic-dialogue/footer';
import { MessageService } from 'primeng/api';
import { ProductService } from '../../Services/product.service';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    HeaderComponent,
    DropdownModule,
    FormsModule,
    CommonModule,
    InputTextModule,
    ProgressBarComponent,
    ChipsModule,
    ChipsComponent,
    ButtonModule,
    FooterComponent,
    TranslateModule,
    SpeedDialComponent,
  ],
})
export class HomeComponent implements OnInit{
  clients: any[] | undefined;

  selectedClient: any | undefined;

  socialMedia: any[] | undefined;
  selectedSocial: any | undefined;
  projects: any[] | undefined;
  selectedProject: any | undefined;

  clientName: string | null = 'محمد الغريب'
  image: string | null = 'avatar.jpg';
  ngOnInit() {
    this.productService.clientSubject.subscribe({
      next:(value)=>{
        console.log(value)
      }
    })
    this.clients = [
      { name: 'احمد حامد', path: 'client-one.jpg' },
      { name: 'محمد على', path: 'avatar.jpg' },
      { name: 'ابراهيم على', path: 'client-one.jpg' },
      { name: 'منى محمد', path: 'avatar.jpg' },
      { name: 'مصطفى سمير', path: 'client-one.jpg' },
    ];
    this.socialMedia = [
      { name: 'منصة الإنستجرام', path: 'instgram.png' },
      { name: 'منصة الفيسبوك', path: 'facebook.png' },
      { name: 'منصة لينكدإن', path: 'linkedIn.png' },
    ];
    this.selectedSocial = this.socialMedia[0];
    this.projects = [
      { name: 'فكتوريا دى ميرو', icon: 'pi-android' },
      { name: 'أمازون', icon: 'pi-amazon' },
      { name: 'آبل', icon: 'pi-apple' },
    ];
    this.selectedProject = this.projects[0];
  }
  constructor(
    translate: TranslateService,
    private dialogService: DialogService,
    public messageService: MessageService,
    private productService: ProductService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  ref: DynamicDialogRef | undefined;

  show() {
    this.ref = this.dialogService.open(ProductListDemo, {
      header: 'Select a Client',
      width: '100vw',
      contentStyle: { overflow: 'auto' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
      templates: {
        footer: Footer,
      },
    });
    this.ref.onClose.subscribe(
      (product:Product)=>{
        const clientName = window.localStorage.getItem('clientName');
        const clientImg = window.localStorage.getItem('clientImg');
        this.clientName = clientName;
        this.image = clientImg
      }
    )
  }
}
