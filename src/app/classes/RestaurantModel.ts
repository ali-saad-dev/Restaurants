import { Time } from "@angular/common";

export interface RestaurantModel{

    id:Number;
    name:string;
    type:string;
    logo:string;
    deliveryCost:Number;
    deliveryTime:Time;
  }