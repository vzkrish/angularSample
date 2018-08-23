import { Pipe, PipeTransform } from '@angular/core';
import { OrderInterface } from './order-interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any, args?: any): any {

    transform(collection: any, searchId: string, searchDate: any, searchValue: any, searchCon: any): any {
    //   if (!collection) {
    //     return[];
    //   }

    //   if (!field || !value) {
    //     return collection;
    //   }
    //   if (!order || !ordVal) {
    //     return collection;
    //   }

    // return  collection.filter(item => item[field].includes(value));

    if (collection && collection.length) {
      return collection.filter(item => {
          if (searchId && collection.includes(searchId.toLowerCase()) === -1) {
              return false;
          }
          if (searchDate && collection.date.toLowerCase().indexOf(searchDate.toLowerCase()) === -1) {
              return false;
          }
          if (searchValue && collection.value.toLowerCase().indexOf(searchValue.toLowerCase()) === -1) {
              return false;
          }
          if (searchCon && collection.type.toLowerCase().indexOf(searchCon.toLowerCase()) === -1) {
            return false;
        }
          return true;
     });
  }   else {
      return collection;
  }
  }

}
