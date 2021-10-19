import { RestaurantMenu } from './../classes/restaurant-menu.class';
import { MenuItem } from './../classes/menu-item.model';
import { RestaurantModel } from './../classes/RestaurantModel';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import restaurantData from '../database/restaurantsDb.json';
import menuData from '../database/menuDb.json'

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  private menuItem: MenuItem[]=[];

  private restaurants: RestaurantModel[]=[];

  constructor() {}

  getRestaurants():RestaurantModel[] {
    this.restaurants = restaurantData;
   return restaurantData;
  }

  
  getRestaurantByID(restaurantId:number):RestaurantModel{
   const restaurantData = this.restaurants.filter(x => x.restaurantId == restaurantId)
   return restaurantData[0];
  }

  getMenuByRestaurantId(id:number):RestaurantMenu{

   const filteredMenuData =   menuData.menu.filter((menu:any) =>{ 
   return  menu.restaurantId == id
   })
    return  new RestaurantMenu(filteredMenuData[0].menus)
   }
  

}