import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService, CartTotal } from '../database/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  

 public cartTotal!: CartTotal;

 checkoutForm = this.formBuilder.group({
  name: '',
  address: ''
  });

  constructor(private cartService: CartService,  private formBuilder: FormBuilder) { 

    this.cartService.changeCartEvent$.subscribe((cartTotal) => {
    this.cartTotal = cartTotal
    // console.log(cartTotal); 
    });
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
}
// increaseQtd(item:CartItem){
//   this.cartService.increaseQtd(item);
// }

// decreaseQtd(item:CartItem){
//   this.cartService.increaseQtd(item);
// }

// total() {
//   return this.cartService.total();
// }


clear() {
  this.cartService.clearCart();
}

  ngOnInit(): void {
    // this.items = this.cartService.getItems();
    // this.totalPrice = this.cartService.
    
  }

// onSubmit() {
//     // Process checkout data here
//     this.items = this.cartService.clearCart();
//     console.warn('Your order has been submitted', this.checkoutForm.value);
//     this.checkoutForm.reset();

//   }
  
  
}



