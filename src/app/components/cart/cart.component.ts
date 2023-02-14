import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product";
import { CartService } from "src/app/services/cart.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  template: `
    <div class="p-20 flex gap-14 justify-center">
      <div>
        <div class="flex flex-col justify-center items-center gap-2">
          <app-product-checkout
            *ngFor="let product of products"
            [product]="product"
            (deleted)="deleteProduct(product.id)">
          </app-product-checkout>
          <p *ngIf="total > 0" class="text-xl font-bold">Total: {{ total }}$</p>
        </div>
      </div>
      <div>
        <form
          #form="ngForm"
          class="flex-col flex items-start gap-1"
          (ngSubmit)="onSubmit()">
          <label>Fullname</label>
          <input
            class="border-2 rounded-md pl-2"
            type="text"
            name="fullname"
            [(ngModel)]="fullname"
            required
            minlength="3"
            placeholder="(minimum 3 characters)" />

          <label>Address</label>
          <input
            class="border-2 rounded-md pl-2"
            type="text"
            name="address"
            [(ngModel)]="address"
            required
            minlength="6"
            placeholder="(minimum 6 characters)" />

          <label>credit card number</label>
          <input
            class="border-2 rounded-md pl-2"
            type="text"
            name="creditCard"
            [(ngModel)]="creditCard"
            required
            minlength="16"
            maxlength="16" />

          <button
            type="submit"
            class="px-4 py-1 bg-blue-800 text-white rounded-md mt-2 disabled:opacity-50"
            [disabled]="form.invalid">
            Submit
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [],
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  total = 0;
  fullname = "";
  address = "";
  creditCard = "";

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.cartService.getAllProducts();
    this.total = this.cartService.getTotal();
  }

  deleteProduct(id: number) {
    this.cartService.deleteProduct(id);
    this.products = this.cartService.getAllProducts();
    this.total = this.cartService.getTotal();
  }

  onSubmit(): void {
    this.cartService.reset();
    this.router.navigate(["/success"]);
  }
}
