import { RestaurantModel } from './../classes/RestaurantModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import restaurantData from '../database/restaurantsDb.json';

@Injectable({
  providedIn: 'root'
})


export class DatabaseService {

  
  private restaurants: RestaurantModel[]=[];

  constructor(private httpService: HttpClient) { }

  getRestaurants():RestaurantModel[] {

    this.restaurants = restaurantData;

   return restaurantData;
  }

  getRestaurantByID(id:Number){

   const restaurantId = this.restaurants.find(x => x.id === id)
   
   console.log(restaurantId);

   return restaurantId;
  }
}