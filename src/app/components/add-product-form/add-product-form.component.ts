import { Component, Input } from "@angular/core";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-add-product-form",
  template: `
    <form
      #form="ngForm"
      (ngSubmit)="onSubmit()"
      class="flex flex-col gap-2 items-center">
      <input
        [(ngModel)]="quantity"
        name="quantity"
        type="number"
        class="border-2 w-24 rounded-md pl-2"
        min="1"
        (keypress)="($event.charCode >= 48 && $event.charCode < 58)" />
      <button
        [disabled]="form.invalid"
        class="px-4 py-2 bg-blue-800 text-white rounded-md w-32 disabled:opacity-50">
        Add to cart
      </button>
    </form>
  `,
  styles: [],
})
export class AddProductFormComponent {
  @Input() id: number;
  quantity: number;

  constructor(private cartServic: CartService) {
    this.quantity = 0;
    this.id = 0;
  }

  onSubmit(): void {
    this.cartServic.addProduct(this.id, this.quantity);
    alert("added");
  }
}
