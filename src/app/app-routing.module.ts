import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./components/cart/cart.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { SuccessComponent } from "./components/success/success.component";

const routes: Routes = [
  { path: "", component: ProductsListComponent },
  { path: "cart", component: CartComponent },
  { path: "products/:id", component: ProductComponent },
  { path: "success", component: SuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
