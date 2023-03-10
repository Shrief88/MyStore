import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { CartComponent } from "./components/cart/cart.component";
import { ProductsItemComponent } from "./components/products-item/products-item.component";
import { ProductComponent } from "./components/product/product.component";
import { AddProductFormComponent } from "./components/add-product-form/add-product-form.component";
import { ProductCheckoutComponent } from "./components/product-checkout/product-checkout.component";
import { SuccessComponent } from "./components/success/success.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    CartComponent,
    ProductsItemComponent,
    ProductComponent,
    AddProductFormComponent,
    ProductCheckoutComponent,
    SuccessComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
