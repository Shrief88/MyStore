import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/models/product";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-product",
  template: `
    <div class="flex p-28 justify-center gap-12">
      <div class="rounded-sm">
        <img
          class="w-72 rounded-xl"
          src="{{ product.url }}"
          alt="{{ product.name }}" />
      </div>

      <div class="flex flex-col items-center justify-center gap-3">
        <p class="font-bold text-3xl">{{ product.name }}</p>
        <p class="text-lg">{{ product.price }}$</p>
        <p class="text-lg">{{ product.description }}</p>
        <app-add-product-form [id]="product.id"></app-add-product-form>
        <a class="underline text-blue-600" routerLink="/"
          >return to product list</a
        >
      </div>
    </div>
  `,
  styles: [],
})
export class ProductComponent implements OnInit {
  id: string;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.id = "";
    this.product = {
      id: 0,
      name: "",
      url: "",
      price: 0,
      description: "",
    };
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id") as string;
    this.product = this.productService.getProductById(
      parseInt(this.id)
    ) as Product;
  }
}
