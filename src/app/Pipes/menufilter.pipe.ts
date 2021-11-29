import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'menufilter',
  pure: false
})
export class MenufilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, name: string): any[] {
    const menuItem = [];
    if (value.length === 0 || filterString === '' || name === '') {
      return value;
    }
    for (const menuItemModel of value) {
      if (menuItemModel[name] === filterString) {
        menuItem.push(menuItemModel);
      }
    }
    return menuItem;
  }

}
