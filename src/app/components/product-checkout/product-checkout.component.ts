import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/models/product";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-product-checkout",
  template: `
    <div class="grid grid-cols-2 gap-4">
      <div class="rounded-sm">
        <img
          class="w-32 rounded-xl"
          src="{{ product.url }}"
          alt="{{ product.name }}" />
      </div>

      <div class="flex flex-col items-center justify-center gap-3">
        <p class="font-bold text-xl">{{ product.name }}</p>
        <p class="text-base">{{ product.price }}$</p>
        <p>Amount: {{ qunatity }}</p>
      </div>
    </div>
  `,
  styles: [],
})
export class ProductCheckoutComponent implements OnInit {
  @Input() product: Product = {
    id: 1,
    name: "",
    url: "",
    price: 0,
    description: "",
  };
  qunatity = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.qunatity = this.cartService.getProductQuantity(
      this.product.id
    ) as number;
  }
}
