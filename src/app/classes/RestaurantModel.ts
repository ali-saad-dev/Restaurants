import { Time } from "@angular/common";

export class RestaurantModel{

  restaurantId:number;
    name:string;
    type:string;
    photo:string;
    rating: number;
    category: string;
    favorite:boolean;
    deliveryCost:number;
    deliveryTime:Time;

    constructor(data:any){
      this.restaurantId = data.restaurantId;
      this.name = data.name;
      this.type = data.type;
      this.rating = data.rating;
      this.category = data.category;
      this.favorite = data.favorite;
      this.photo = data.photo;
      this.deliveryCost = data.deliveryCost;
      this.deliveryTime = data.deliveryTime;
    }
    
  }