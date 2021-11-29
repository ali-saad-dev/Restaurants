import { CartService } from './../database/cart.service';
import { MenuItem } from './../classes/menu-item.model';
import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

export class CartItemComponent implements OnInit {

  @Input()
  public data!: MenuItem;
  itemCart: any;
  public qty!: number;
  constructor(private cartService: CartService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.qty = this.data.quantity;
  }

  getItemCart(item: MenuItem) {
    this.itemCart = this.cartService.addToCart(item);
  }

  editQty(item: MenuItem) {
    console.log(this.data.quantity, this.qty);
    if (this.qty > this.data.quantity) {
      this.itemCart = this.cartService.addToCart(item);
    } else if (this.qty < this.data.quantity) {
      this.itemCart = this.cartService.removeItem(item.id);
    }
  }

  removeItem(item: MenuItem) {
    this.itemCart = this.cartService.removeItem(item.id);
  }

  clearAll() {
    this.itemCart = this.cartService.clearCart();
  }

}
