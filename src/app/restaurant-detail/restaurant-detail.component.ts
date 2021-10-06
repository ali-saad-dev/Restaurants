import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Routes } from '@angular/router';
import {RestaurantModel} from '../classes/RestaurantModel';
import {DatabaseService} from '../database/database.service';




@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  

  restaurants:RestaurantModel[]=[];
 


  constructor(private route: ActivatedRoute,private databaseService: DatabaseService){}

  ngOnInit() {

  this.getRestaurantByID();

   this.restaurants = this.route.snapshot.params['id'];

   this.route.params.subscribe((data: Params)=> {

    this.restaurants = data['id'];
   });
  }
  
  getRestaurantByID(){
    return this.databaseService.getRestaurantByID(1);
  }
  
}
