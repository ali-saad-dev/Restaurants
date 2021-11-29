import { RestaurantMenu } from './../classes/restaurant-menu.class';
import { MenuItem } from './../classes/menu-item.model';
import { RestaurantModel } from './../classes/RestaurantModel';
import { Injectable } from '@angular/core';
import restaurantData from '../database/restaurantsDb.json';
import menuData from '../database/menuDb.json'
@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  private menuItem: MenuItem[] = [];
  private restaurants: RestaurantModel[] = [];
  public categories: string[] = [];

  getRestaurants(): RestaurantModel[] {
    let restaurantDataa = restaurantData;
    for (let i = 0; i < restaurantData.length; i++) {
      let restaurant = new RestaurantModel(restaurantData[i]);
      this.restaurants.push(restaurant)
    }
    return this.restaurants;
  }

  getRestaurantByID(restaurantId: number): RestaurantModel {
    const restaurantData = this.restaurants.filter(x => x.restaurantId == restaurantId)
    return restaurantData[0];
  }

  getMenuByRestaurantId(id: number): RestaurantMenu {
    const restaurantsData = menuData.restaurants.filter((restaurant: any) => {
      return restaurant.restaurantId == id;
    })
    const restaurantMenu = new RestaurantMenu(restaurantsData[0].menus);
    this.categories = this.getCategories(restaurantMenu);
    return restaurantMenu;
  }

  private getCategories(data: RestaurantMenu): string[] {
    const temp = [];
    for (let i = 0; i < data.menus.length; i++) {
      const menuItem = new MenuItem(data.menus[i]);
      const categorie = menuItem.categorie;
      if (temp.indexOf(categorie) == -1) {
        temp.push(categorie);
      }
    }
    return temp;
  }
}
