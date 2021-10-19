import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../classes/menu-item.model';
import {RestaurantModel} from '../classes/RestaurantModel';
import {DatabaseService} from '../database/database.service';



@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})

export class RestaurantsComponent implements OnInit {


  filteredstring: string = '';
  
  constructor(private databaseService: DatabaseService){}

  restaurants:RestaurantModel[]=[];

   menuItem: MenuItem[]=[];

  ngOnInit(){
    this.getRestaurants();

  }
  
  getRestaurants(){
   this.restaurants = this.databaseService.getRestaurants();
 }
}