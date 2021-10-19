import { Component, OnInit } from '@angular/core';
import { shippingModels } from '../classes/shippingModels';
import { CartService } from '../database/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  constructor(private cartService: CartService) { }

  shippingPrices: shippingModels[]=[];

  ngOnInit(): void {
    // this.getShippingPrices();
  }
//   getShippingPrices(){

//  this.shippingPrices = this.cartService.getShippingPrices();
 
//   }
}
