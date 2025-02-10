import { createAction, props } from "@ngrx/store";
import { Product } from "../model/product.model";

export const loadProducts = createAction('[Product] load product', props<{ productList: Product[] }>())

export const addToCartAction = createAction('[Product] add Product', props<{ product: Product }>())

export const removeFormCart = createAction('[Product] remove Product', props<{ productId: number }>())
