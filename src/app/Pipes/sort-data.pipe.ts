import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortData'
})
export class SortDataPipe implements PipeTransform {

  transform(dataToSort: any[], property?: string, order?: string): any {
    if (dataToSort) {
      dataToSort.sort(function(a, b){
          if (a[property] === null || a[property] === undefined) {
              return 1;
          } else if (b[property] === null || b[property] === undefined) {
              return -1;
          } else if (a[property] < b[property]) {
              return order == 'descend' ? 1 : -1;
          } else if ( a[property] > b[property]) {
              return order == 'descend' ? -1 : 1;
          } else {
              return 0;
          }
      });
  }
    return dataToSort;
  }

}
