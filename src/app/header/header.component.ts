import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../database/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  private cartSubscrption: Subscription;
  public cartAmount!: number;

  constructor(private cartService: CartService) {
    this.cartSubscrption = this.cartService.changeCartEvent$.subscribe(result => {
      const cartcontent = result.cartContent;
      let total = 0;
      for (let i = 0; i < cartcontent.length; i++) {
        const product = cartcontent[i];
        total = total + product.quantity;
      }
      this.cartAmount = total;
    })
  }

  ngOnDestroy() {
    if (this.cartSubscrption) {
      this.cartSubscrption.unsubscribe();
    }
  }
}
