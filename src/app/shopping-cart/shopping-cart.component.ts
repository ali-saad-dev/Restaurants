import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService, CartTotal } from '../database/cart.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  public cartTotal!: CartTotal;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {

    this.cartService.changeCartEvent$.subscribe((cartTotal) => {
      this.cartTotal = cartTotal
    });
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
  }

  clear() {
    this.cartService.clearCart();
  }
}



