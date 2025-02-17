import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform<T extends Record<string, any>>(value: T[], propName: keyof T): T[] {
    if (!value || value.length === 0) {
      return [];
    }

    return value.sort((a: T, b: T) => {
      if (!a[propName] || !b[propName]) {
        return 0; // Ignore items with missing properties
      }
      
      return a[propName] > b[propName] ? 1 : -1;
    });
  }

}
