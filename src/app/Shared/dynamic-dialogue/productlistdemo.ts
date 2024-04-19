import { Component, OnInit } from '@angular/core';
import { Product } from './demo/product';
import { ProductService } from '../../Core/Services/product.service';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InfoDemo } from './info-demo';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
@Component({
  providers: [DialogService, MessageService, ProductService],
  standalone: true,
  imports: [ButtonModule, TableModule],
  template: ` <p-table
    [value]="products"
    responsiveLayout="scroll"
    [rows]="5"
    [responsive]="true"
  >
    <ng-template pTemplate="header">
      <tr>
        <th pSortableColumn="name">Name</th>
        <th pSortableColumn="phone">Phone</th>
        <th pSortableColumn="image">Image</th>
        <th pSortableColumn="email">Email</th>
        <th style="width:2em"></th>
      </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
      <tr>
        <td>{{ product.name }}</td>
        <td>{{ product.phone }}</td>
        <td>
          <img
            width="100"
            height="80"
            src="assets/imgs/{{ product.image }}"
            [alt]="product.image"
            class="w-4rem h-4rem shadow-2"
          />
        </td>
        <td>{{ product.email }}</td>

        <td>
          <p-button
            type="button"
            [text]="true"
            [rounded]="true"
            icon="pi pi-plus"
            (click)="selectProduct(product)"
          ></p-button>
        </td>
      </tr>
    </ng-template>
  </p-table>`,
})
export class ProductListDemo implements OnInit {
  products!: Product[];

  constructor(
    private productService: ProductService,
    private dialogService: DialogService,
    private ref: DynamicDialogRef
  ) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .then((products) => (this.products = products));
  }

  selectProduct(product: Product) {
    this.productService.clientSubject.next({
        name:product.name,
        image:product.image
    });
    window.localStorage.setItem('clientName',String(product.name))
    window.localStorage.setItem('clientImg',String(product.image))
    this.ref.close();
  }

  showInfo() {
    this.dialogService.open(InfoDemo, {
      header: 'Information',
      modal: true,
      dismissableMask: true,
      data: {
        totalProducts: this.products ? this.products.length : 0,
      },
    });
  }

  closeDialog(data: any) {
    this.ref.close(data);
  }
}
