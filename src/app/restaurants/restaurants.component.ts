import { RestaurantModel } from './../classes/RestaurantModel';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../classes/menu-item.model';
import { DatabaseService } from '../database/database.service';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})

export class RestaurantsComponent implements OnInit {

  public isFavorit!: boolean;

  private _categoryFilter: string = '';
  get categoryFilter(): string {
    return this._categoryFilter;
  }

  set categoryFilter(value: string) {
    this._categoryFilter = value;
  }

  filteredstring: string = '';
  filterfavorits: boolean = false;

  constructor(private databaseService: DatabaseService) { }

  restaurants: RestaurantModel[] = [];
  menuItem: MenuItem[] = [];

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurants = this.databaseService.getRestaurants();
  }

  toggleFavorit(restaurant: RestaurantModel) {
    this.isFavorit = restaurant.isFavorite = !restaurant.isFavorite;
    console.log(restaurant.isFavorite)
  }

  toggleShowFavorits() {
    this.filterfavorits = !this.filterfavorits;
    if (this.filterfavorits) {
      this.restaurants = this.restaurants.filter(x => x.isFavorite === true);
    } else {
      this.restaurants = this.databaseService.getRestaurants();
    }
  }
}


