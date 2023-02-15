import { Injectable } from "@angular/core";
import { ProductsService } from "./products.service";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class CartService {
  orders = new Map<number, number>();

  constructor(private productService: ProductsService) {}

  addProduct(id: number, quantity: number) {
    const oldQuantity = this.orders.get(id) || 0;
    this.orders.set(id, oldQuantity + quantity);
  }

  getProductQuantity(id: number) {
    return this.orders.get(id);
  }

  getTotal(products: Product[]) {
    let total = 0;
    for (const product of products) {
      total += product.price * (this.orders.get(product.id) || 1);
    }
    return total;
  }

  reset() {
    this.orders.clear();
  }

  deleteProduct(id: number) {
    this.orders.delete(id);
  }
}
