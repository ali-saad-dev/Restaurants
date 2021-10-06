import { Component, OnInit } from '@angular/core';
import restaurantsDb from '../database/restaurantsDb.json';
import {RestaurantModel} from '../classes/RestaurantModel';
import {DatabaseService} from '../database/database.service';



@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})

export class RestaurantsComponent implements OnInit {
  
  constructor(private databaseService: DatabaseService){}

  restaurants:RestaurantModel[]=[];

  ngOnInit(){
    this.getRestaurants();
  }
  
  getRestaurants(){
 this.restaurants = this.databaseService.getRestaurants();
 }
}