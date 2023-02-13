import { Component, Input } from "@angular/core";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-products-item",
  template: `
    <div class="p-2 border border-cyan-700">
      <div class="flex flex-col gap-2 items-center">
        <img
          routerLink="products/{{ product.id }}"
          class="w-72"
          src="{{ product.url }}"
          alt="{{ product.name }}" />
        <p>{{ product.name }}</p>
        <p>{{ product.price }}$</p>
        <button class="px-4 py-2 bg-blue-800 text-white rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  `,
  styles: [],
})
export class ProductsItemComponent {
  @Input() product: Product;

  constructor() {
    this.product = {
      id: 1,
      name: "",
      url: "",
      price: 0,
      description: "",
    };
  }
}
