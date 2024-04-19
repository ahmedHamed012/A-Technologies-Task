import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../Shared/dynamic-dialogue/demo/product';

@Injectable()
export class ProductService {
  clientSubject: BehaviorSubject<any> = new BehaviorSubject<any>({
    name:'',
    image:''
  });
  getProductsData() {
    return [
      {
        id: '1000',
        name: 'Ahmed Hamed',
        image: 'client-one.jpg',
        email: 'ahmed@yahoo.com',
        phone: '01110081282',
      },
      {
        id: '1001',
        name: 'Mohamed Ali',
        image: 'avatar.jpg',
        email: 'mohamed@yahoo.com',
        phone: '01206154949',
      },
    ];
  }

  getProducts() {
    return Promise.resolve(this.getProductsData());
  }
}
