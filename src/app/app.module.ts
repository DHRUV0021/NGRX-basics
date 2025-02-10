import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { StoreModule } from '@ngrx/store';
import { Product } from './model/product.model';
import { productReduser } from './store/product.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ Product: productReduser })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
