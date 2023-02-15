import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  apiUrl = "http://localhost:4200/assets/data.json";

  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
