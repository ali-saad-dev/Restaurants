import { MenuItem } from "../classes/menu-item.model";
export class CartItem {

	public quantity: number = 0;
	constructor(public menuItem: MenuItem) {

	}

	value(): number {
		return this.menuItem.price * this.quantity;
	}
}