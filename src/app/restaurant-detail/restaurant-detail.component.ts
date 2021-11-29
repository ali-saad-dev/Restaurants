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
  public restaurantData: any;
  public menuData: any;
  public categoridata: any;

  constructor(private route: ActivatedRoute, private databaseService: DatabaseService, private cartService: CartService) { }

  ngOnInit() {
    this.route.params.subscribe((data: Params) => {
      const id = data['restaurantId'];
      this.getRestaurantByID(id)
      this.getRestaurantMenu(id)
    });
  }

  getRestaurantByID(restaurantId: number) {
    this.restaurantData = this.databaseService.getRestaurantByID(restaurantId);
  }

  getRestaurantMenu(id: number) {
    this.menuData = this.databaseService.getMenuByRestaurantId(id);
    this.categoridata = this.databaseService.categories;
  }

  addToCart(product: any) {
    this.cartService.addToCart(new MenuItem(product));
    window.alert('Your product has been added to the cart!');
  }
}


