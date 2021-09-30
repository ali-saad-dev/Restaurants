
export interface RestaurantModel {
    id: number;
    name: string;
    type:string;
    logo:string | ArrayBuffer;
    deliveryCost: string;
    deliveryTime : string;
 
  }