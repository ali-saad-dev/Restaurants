import { MenuItem } from "./menu-item.model";
import { CartItem } from "../shopping-cart/cart-item.model";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class Cart {

    private _totalPrice: number = 0;

    _products: MenuItem[] = [];

    constructor() { }

    private existInCart(id: number): MenuItem[] {
        const foundItem = this._products.filter(item => item.id == id);
        return foundItem;
    }

    addItem(item: MenuItem) {
        let existingItems = this.existInCart(item.id);
        if (existingItems.length > 0) {
            const item = existingItems[0];
            item.increaseQtd();
        } else {
            item.increaseQtd();
            this.items.push(item);
        }
        this.calculate();
    }

    removeItem(id: number) {
        let existingItem = this.existInCart(id);
        if (existingItem.length > 0) {
            const productIndex = this._products.findIndex((item) => item.id == id);
            const item = existingItem[0];
            if (item.quantity > 0) {
                item.decreaseQtd()
            } else {
                this._products.splice(productIndex, 1);
            }
            this.calculate();
        }
    }

    clearCart() {
        console.log("total()")
        this._products = [];
        this._totalPrice = 0;
    }

    private calculate() {
        this._totalPrice = 0;
        for (let i = 0; i < this._products.length; i++) {
            const item = this._products[i];
            this._totalPrice += item.price * item.quantity;

            // console.log(this._totalPrice);
        }
    }

    get totalPrice() {

        return this._totalPrice;
    }

    get numberOfItems() {
        return this._products.length;
    }

    get items() {
        return this._products;
    }

    // increaseQtd(item: CartItem) {
    //     item.quantity = item.quantity + 1;
    // }

    // decreaseQtd(item: CartItem) {
    //     item.quantity = item.quantity - 1;
    //     if (item.quantity === 0) {
    //         this.removeItem(item.menuItem.id);
    //     }
    // }
}

