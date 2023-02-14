import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  template: `
    <div>
      <div class="flex flex-col justify-center items-center gap-2">
        <app-product-checkout
          *ngFor="let product of products"
          [product]="product">
        </app-product-checkout>
        <p *ngIf="total > 0" class="text-xl font-bold">Total: {{ total }}$</p>
      </div>
    </div>
    <div>
      
    </div>
  `,
  styles: [],
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getAllProducts();
    this.total = this.cartService.getTotal();
  }
}
