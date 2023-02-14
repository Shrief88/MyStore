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

  getAllProducts() {
    const products: Product[] = [];
    for (const id of this.orders.keys()) {
      products.push(this.productService.getProductById(id));
    }
    return products;
  }

  getProductQuantity(id: number) {
    return this.orders.get(id);
  }

  getTotal() {
    let total = 0;
    for (const id of this.orders.keys()) {
      total +=
        this.productService.getProductById(id).price *
        (this.orders.get(id) || 1);
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
