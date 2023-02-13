import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <div class="flex justify-center items-center p-2 bg-blue-500 flex-col">
      <p class="text-4xl font-bold text-white">myStore</p>
      <nav class="flex gap-1">
        <a routerLink="/" class="text-white">Product List</a>
        <p class="text-white">|</p>
        <a routerLink="/cart" class="text-white">Cart</a> 
      </nav>
    </div>
  `,
  styles: [],
})
export class HeaderComponent {}
