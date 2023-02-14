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
    console.log(this.orders);
  }

  getAllOrders() {
    const products: Product[] = [];
    for (const id of this.orders.keys()) {
      products.push(this.productService.getProductById(id));
    }
  }
}
