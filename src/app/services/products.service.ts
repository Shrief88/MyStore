import { Injectable } from "@angular/core";
import * as data from "../../../data.json";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  products: Product[] = (data as any).default;
  getAllProducts() {
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products.find((item) => item.id === id) as Product;
  }
}
