import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from './demo/product';
import { ProductListDemo } from './productlistdemo';
import { Footer } from './footer';

@Component({
  selector: 'app-dynamic-dialogue',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-dialogue.component.html',
  styleUrl: './dynamic-dialogue.component.scss'
})
export class DynamicDialogueComponent {
  constructor(public dialogService: DialogService, public messageService: MessageService) {}
  ref: DynamicDialogRef | undefined;

   show() {
      this.ref = this.dialogService.open(ProductListDemo, {
          header: 'Select a Product',
          width: '50vw',
          contentStyle: { overflow: 'auto' },
          breakpoints: {
              '960px': '75vw',
              '640px': '90vw'
          },
          templates: {
              footer: Footer
          }
      });

      this.ref.onClose.subscribe((data: any) => {
          let summary_and_detail;
          if (data) {
              const buttonType = data?.buttonType;
              summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data?.name };
          } else {
              summary_and_detail = { summary: 'No Product Selected', detail: 'Pressed Close button' };
          }
          this.messageService.add({ severity: 'info', ...summary_and_detail, life: 3000 });
      });

      this.ref.onMaximize.subscribe((value) => {
          this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
      });
  }

  ngOnDestroy() {
      if (this.ref) {
          this.ref.close();
      }
  }
}
