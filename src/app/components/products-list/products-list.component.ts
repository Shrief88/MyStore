import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product";
import { ProductsService } from "src/app/services/products.service";

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
export class ProductsListComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  products: Product[] = [];
  ngOnInit(): void {
    this.productService
      .getAllProducts()
      .subscribe((data) => (this.products = data));
  }
}
