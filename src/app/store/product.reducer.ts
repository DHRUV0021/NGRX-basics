import { createReducer, on } from "@ngrx/store";
import { Product } from '../model/product.model';
import { addToCartAction, loadProducts, removeFormCart } from "./product.action";

export interface AppState {
  product: Product[];
  cart: Product[];
}

const initialState: AppState = {
  product: [],
  cart: [],
}

export const productReduser = createReducer(initialState,
  on(loadProducts, (state, { productList }) => ({ ...state, product: productList })),
  on(addToCartAction, (state, { product }) => ({ ...state, cart: [...state.cart, product] })),
  on(removeFormCart, (state, { productId }) => ({ ...state, cart: [...state.cart.filter(x => x.id != productId)] }))
)
