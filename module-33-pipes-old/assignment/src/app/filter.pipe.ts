import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform<T extends Record<string, any>>(value: T[], filterString: string, propName: keyof T): T[] {
    if (!value || value.length === 0 || filterString === '') {
      return value;
    }
    return value.filter(item => item[propName] === filterString);
  }

}
