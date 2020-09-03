import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';
  NumOfItemInCart = 0;

  addItemToCart(data) {
    if (data) {
      this.NumOfItemInCart += 1;
    }
  }
}
