import { CartTotal } from './../database/cart.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../database/cart.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnDestroy {

  // private cartSubscrption: Subscription;
  public cart!: CartTotal;
  private cartSubscrption: Subscription;
  public amount!: number;


  constructor(private cartService: CartService) {
    this.cartSubscrption = this.cartService.changeCartEvent$.subscribe(cart => {
      this.cart = cart;
      const cartcontent = cart.cartContent;
      let total = 0;
      for (let i = 0; i < cartcontent.length; i++) {
        const product = cartcontent[i];
        total = total + product.quantity;
      }
      this.amount = total;
      // this.amount = this.cartService.cart.numberOfItems;
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
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    postcode: new FormControl('', Validators.required),
    payment: new FormControl('', Validators.required),
    namecard: new FormControl('', Validators.required),
    cardnumber: new FormControl('', Validators.required),
    expiration: new FormControl('', Validators.required),
    cvv: new FormControl('', Validators.required),
  });

  public showMsg!: boolean;

  onSubmit() {
    if (this.checkoutform.invalid) {
      this.showMsg = false;
    }else{
      this.showMsg = true;
    }
  }
}
