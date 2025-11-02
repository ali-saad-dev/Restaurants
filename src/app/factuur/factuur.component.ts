import { CartTotal } from './../database/cart.service';
import { Component, Input } from '@angular/core';
import { MenuItem } from '../classes/menu-item.model';
import { CartService } from '../database/cart.service';

@Component({
	selector: 'app-factuur',
	templateUrl: './factuur.component.html',
	styleUrls: ['./factuur.component.scss']
})
export class FactuurComponent {
	@Input()
	public data!: MenuItem;

	public itemCart: any;

	constructor(private cartService: CartService) {
		this.cartService.changeCartEvent$.subscribe((cartItem: CartTotal) => {
			this.itemCart = cartItem;
		});
	}

	getItemCart(item: MenuItem): void {
		this.itemCart = this.cartService.addToCart(item);
	}
}
