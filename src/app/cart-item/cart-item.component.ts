import { CartService } from './../database/cart.service';
import { Cart } from './../classes/cart.class';

import { MenuItem } from './../classes/menu-item.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input()
  public data!: MenuItem;

  itemCart: any;
  constructor(private cartService: CartService ) { }

  ngOnInit(): void {

  }

  getItemCart(item: MenuItem) {
    this.itemCart = this.cartService.addToCart(item);
  }
   
  removeItem(item:MenuItem){
    this.itemCart = this.cartService.removeItem(item.id);
  }
}
