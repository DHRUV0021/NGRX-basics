import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/product.reducer';
import { Store } from '@ngrx/store';
import { Product } from '../model/product.model';
import { Observable, tap } from 'rxjs';
import { cartProductList } from '../store/product.selectors';
import { removeFormCart } from '../store/product.action';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cartList$!: Observable<Product[]>;
  cartItemCount = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.cartList$ = this.store.select(cartProductList).pipe(tap(a => this.cartItemCount = a.length));
  }
  deleteCart(item: Product) {
    this.store.dispatch(removeFormCart({ productId: item.id }))
  }
}
