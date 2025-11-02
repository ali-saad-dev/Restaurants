import { Time } from "@angular/common";

type Position = {
  lat: number;
  lng: number;
}
export class RestaurantModel {
  restaurantId: number;
  name: string;
  type: string;
  photo: string;
  rating: number;
  category: string;
  isFavorite: boolean;
  deliveryCost: number;
  deliveryTime: Time;
  position: Position;

  constructor(data: any) {
    this.restaurantId = data.restaurantId;
    this.name = data.name;
    this.type = data.type;
    this.rating = data.rating;
    this.category = data.type;
    this.photo = data.photo;
    this.deliveryCost = data.deliveryCost;
    this.deliveryTime = data.deliveryTime;
    this.isFavorite = false;
    this.position = data.position;
  }
}