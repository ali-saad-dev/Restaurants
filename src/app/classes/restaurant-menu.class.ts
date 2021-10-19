export class RestaurantMenu {
    
    breakfast:[];
    lunch: [];
    dinner: [];

    constructor(data:any){
       this.breakfast = data.breakfast;
       this.lunch = data.lunch;
       this.dinner = data.dinner;
      }
}
