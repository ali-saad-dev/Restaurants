import { Router } from '@angular/router';
import { CartTotal } from './../database/cart.service';
import { Component, OnInit, OnDestroy, } from '@angular/core';
import { CartService } from '../database/cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})

export class CheckoutFormComponent implements OnDestroy {

  public cart!: CartTotal;
  private cartSubscrption: Subscription;
  public amount!: number;

  constructor(private cartService: CartService, private Router: Router) {
    this.cartSubscrption = this.cartService.changeCartEvent$.subscribe(cart => {
      this.cart = cart;
      const cartcontent = cart.cartContent;
      let total = 0;
      for (let i = 0; i < cartcontent.length; i++) {
        const product = cartcontent[i];
        total = total + product.quantity;
      }
      this.amount = total;
    });
  }

  ngOnDestroy() {
    if (this.cartSubscrption) {
      this.cartSubscrption.unsubscribe();
    }
  }

  checkoutform = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('',  Validators.email),
    address: new FormControl('', Validators.required),
    postcode: new FormControl('', Validators.required),
    paymentType: new FormControl('', Validators.required),
    namecard: new FormControl(''),
    cardnumber: new FormControl('', Validators.required),
    expiration: new FormControl('', Validators.required),
    cvv: new FormControl('', Validators.required),
  });

  public isVisible: any;
  public isSelected: boolean = true;
  public isSuccess!: boolean;

  onSubmit() {
    if (this.checkoutform.valid) {
      this.isSuccess = true;
      this.checkoutform.reset();
      this.cartService.clearCart()
    }
  }
}
