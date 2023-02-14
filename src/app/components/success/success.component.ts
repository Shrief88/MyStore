import { Component } from "@angular/core";

@Component({
  selector: "app-success",
  template: `
    <div class="flex justify-center items-center flex-col gap-3">
      <p class="text-5xl">Success!</p>
      <p>Thank you, your oreder is confrimed!</p>
      <a class="underline text-blue-600" routerLink="/"
        >return to product list</a
      >
    </div>
  `,
  styles: [],
})
export class SuccessComponent {}
