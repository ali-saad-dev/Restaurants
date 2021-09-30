import { RESTAURANT } from './mock-restaurant';
import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from './restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  
  
  restaurant = RESTAURANT;

  selctedRestaurant?: RestaurantModel;

  // selctedRestaurant?: RestaurantModel = {
  //   id: 1,
  //   name: 'Alkmaar Restaurant',
  //   type: 'Chanies',
  //   logo: '1',
  //   deliveryCost: '$5',
  //   deliveryTime: '12:00 AM'
  // };
  constructor() { }

  ngOnInit(): void {
    
  }

  onSelect(rest: RestaurantModel): void {
    this.selctedRestaurant = rest;
  }
 

}
