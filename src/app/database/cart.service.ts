import { MenuItem } from './../classes/menu-item.model';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../classes/cart.class';


export type CartTotal = {
  totalPrice: number;
  cartContent: MenuItem[];

}

@Injectable({

  providedIn: 'root'

})
export class CartService {
  cart: Cart;

  private changeCartEvent: BehaviorSubject<CartTotal>;
  public changeCartEvent$: Observable<CartTotal>;

  constructor() {
    //const intialResult: CartTotal = {totalPrice: 0, cartContent:[]};
    this.cart = new Cart();
    const result: CartTotal = { totalPrice: this.cart.totalPrice, cartContent: this.cart.items };
    this.changeCartEvent = new BehaviorSubject(result);
    this.changeCartEvent$ = this.changeCartEvent.asObservable();
  }

  existInCart(id: number): boolean {
    const foundItem = this.cart.items.filter(item => item.id == id);
    return foundItem.length > 0;
  }


  addToCart(product: MenuItem) {
    this.cart.addItem(product);
    this.updateResult();
    // console.log(this.cart);
  }

  getItems() {
    return this.cart.items;
  }

  clearCart() {
    this.cart.clearCart();
    this.updateResult();
  }

  removeItem(id: number) {
    this.cart.removeItem(id);
    this.updateResult();
  }

  value(item: MenuItem): number {
    return item.price * item.quantity;
}

  updateResult() {
    const result: CartTotal = { totalPrice: this.cart.totalPrice, cartContent: this.cart.items };
    this.changeCartEvent.next(result);
  }
}
