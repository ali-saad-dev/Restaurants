import { RestaurantModel } from './../classes/RestaurantModel';
import { MenuItem } from './../classes/menu-item.model';
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DatabaseService } from '../database/database.service';
import { CartService } from '../database/cart.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  public filtermenu: string = '';
  public restaurantData!: RestaurantModel;
  public categoridata!: string[];
  private restaurantId!: number;
  public restaurantMenus: MenuItem[] = [];

  constructor(private route: ActivatedRoute, private databaseService: DatabaseService, private cartService: CartService) { }

  ngOnInit() {
    this.route.params.subscribe((data: Params) => {
      this.restaurantId = data['restaurantId'];
      this.getRestaurantByID(this.restaurantId);
      this.getRestaurantMenu(this.restaurantId);
      this.getCartContent();
    });
  }

  getRestaurantByID(restaurantId: number) {
    let data = this.databaseService.getRestaurantByID(restaurantId);
    this.restaurantData = new RestaurantModel(data);
  }

  getRestaurantMenu(id: number) {
    this.restaurantMenus = [];
    const data = this.databaseService.getMenuByRestaurantId(id);
    for (let i = 0; i < data.menus.length; i++) {
      let item = data.menus[i];
      let menuItem = new MenuItem(item);
      menuItem.restaurantId = id;
      this.restaurantMenus.push(menuItem);
    }
    this.categoridata = this.databaseService.categories;
  }

  addToCart(product: MenuItem) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  getCartContent():void {
    const cartContent = this.cartService.getItems();
    cartContent.forEach(menuItem => {
      const menuIndex = this.getMenuIndex(menuItem.restaurantId, menuItem.id);
      if (menuIndex >= 0) {
        this.restaurantMenus[menuIndex] = menuItem;
      }
    });
  }

  getMenuIndex(restaurantId: number, menuId: number):number {
    for (let i = 0; i < this.restaurantMenus.length; i++) {
      const menuItem = this.restaurantMenus[i];
      if (menuItem.restaurantId == restaurantId && menuItem.id == menuId) {
        return i;
      }
    }
    return -1;
  }
}


