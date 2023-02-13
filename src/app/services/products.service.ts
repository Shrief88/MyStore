import { Injectable } from "@angular/core";
import * as data from "../../../data.json";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  getAllData() {
    return (data as any).default;
  }
}
