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
            placeholder="(minimum 3 characters)"
            #userName="ngModel" />

          <div *ngIf="userName.invalid && userName.dirty">
            <div *ngIf="userName.errors?.['required']">
              Please provide a fullname.
            </div>
            <div *ngIf="userName.errors?.['minlength']">
              your fullname must contain at least 3 characters.
            </div>
          </div>

          <label>Address</label>
          <input
            class="border-2 rounded-md pl-2"
            type="text"
            name="address"
            [(ngModel)]="address"
            required
            minlength="6"
            placeholder="(minimum 6 characters)"
            #userAddress="ngModel" />

          <div *ngIf="userAddress.invalid && userAddress.dirty">
            <div *ngIf="userAddress.errors?.['required']">
              Please provide a address.
            </div>
            <div *ngIf="userAddress.errors?.['minlength']">
              your address must contain at least 6 characters.
            </div>
          </div>

          <label>credit card number</label>
          <input
            class="border-2 rounded-md pl-2"
            type="text"
            name="creditCard"
            [(ngModel)]="creditCard"
            required
            minlength="16"
            maxlength="16"
            #userCredit="ngModel" />

          <div *ngIf="userCredit.invalid && userCredit.dirty">
            <div *ngIf="userCredit.errors?.['required']">
              Please provide a credit card.
            </div>
            <div
              *ngIf="userCredit.errors?.['minlength'] && userCredit.errors?.['maxlength']">
              your credit must contain 18 digits.
            </div>
          </div>

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
    alert("product has been deleted");
  }

  onSubmit(): void {
    this.cartService.reset();
    this.router.navigate(["/success"]);
  }
}
