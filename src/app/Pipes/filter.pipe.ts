import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, type: string): any[] {
    
    const restaurants= [];
    if (value.length === 0 || filterString === ''|| type === ''){
      return value;
    }

    

    for (const RestaurantModel of value){
      if(RestaurantModel[type] === filterString){
        restaurants.push(RestaurantModel);
      }
    }

    return restaurants;
  }

}
