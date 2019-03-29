import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sortOrder'})
export class SortOrderPipe implements PipeTransform {
    compare(a,b) {
        if (a.WorkItemId > b.WorkItemId)
          return -1;
        if (a.WorkItemId < b.WorkItemId)
          return 1;
        return 0;
      }
  transform(array: any, value: string) {
      if(!array) return;
      return array.sort(this.compare);
  }
}