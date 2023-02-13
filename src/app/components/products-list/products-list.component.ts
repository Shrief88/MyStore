import { Component } from "@angular/core";
import { Product } from "src/app/models/product";
import * as data from "../../../../data.json";

@Component({
  selector: "app-products-list",
  template: `
    <div class="flex flex-wrap gap-12 justify-center items-center px-32 py-20">
      <app-products-item *ngFor="let product of products" [product]="product">
      </app-products-item>
    </div>
  `,
  styles: [],
})
export class ProductsListComponent {
  products: Product[] = (data as any).default;
}
