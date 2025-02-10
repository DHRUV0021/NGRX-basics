import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/product.reducer';
import { Store } from '@ngrx/store';
import { cartProductList, productList } from '../store/product.selectors';
import { loadProducts, addToCartAction as addToCartAction } from '../store/product.action';
import { Observable, tap } from 'rxjs';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  productList$!: Observable<Product[]>;
  cartList$!: Observable<Product[]>;
  cartItemCount = 0;

  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    this.productList$ = this.store.select(productList);
    this.cartList$ = this.store.select(cartProductList).pipe(tap(a => this.cartItemCount = a.length));
    this.store.dispatch(loadProducts({ productList: this.dummyProduct }));
  }

  addCart(item: Product) {
    this.store.dispatch(addToCartAction({ product: item }))
  }

  get dummyProduct() {
    return [
      {
        "id": 1,
        "name": "Smartphone",
        "amount": 699,
        "image": "data:image/jpeg;base64,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"
      },
      {
        "id": 2,
        "name": "Laptop",
        "amount": 999,
        "image": "data:image/jpeg;base64,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"
      },
      {
        "id": 3,
        "name": "Wireless Headphones",
        "amount": 199,
        "image": "data:image/jpeg;base64,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"
      },
      {
        "id": 4,
        "name": "Smart Watch",
        "amount": 149,
        "image": "data:image/jpeg;base64,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"
      },
    ];
  }


}
