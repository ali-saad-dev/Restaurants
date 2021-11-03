import { Cart } from './../classes/cart.class';
import { MenuItem } from './../classes/menu-item.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


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

  constructor(private cookieService: CookieService) {
    //const intialResult: CartTotal = {totalPrice: 0, cartContent:[]};
    this.cart = new Cart();
    this.addCookieContent();
    const result: CartTotal = { totalPrice: this.cart.totalPrice, cartContent: this.cart.items };
    this.changeCartEvent = new BehaviorSubject(result);
    this.changeCartEvent$ = this.changeCartEvent.asObservable();
  }

  existInCart(id: number): boolean {
    const foundItem = this.cart.items.filter(item => item.id == id);
    return foundItem.length > 0;
  }
  private addCookieContent() {
    const jsonData = this.cookieService.get('cart');
    if (jsonData) {
      const cookieContent: MenuItem[] = JSON.parse(jsonData);
      for (let i = 0; i < cookieContent.length; i++) {
        const product = new MenuItem(cookieContent[i])
        this.cart.addItem(product);
      }
    }
  }

  addToCart(product: MenuItem) {
    this.cart.addItem(product);
    this.updateResult();
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

  updateResult() {
    const result: CartTotal = { totalPrice: this.cart.totalPrice, cartContent: this.cart.items };
    this.changeCartEvent.next(result);
    this.cookieService.set('cart', JSON.stringify(this.cart._products));
    console.log(result);
  }
}
