import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteringByStars'
})
export class FilteringByStarsPipe implements PipeTransform {

  transform(value: Hotel[], args: string): Hotel[] {
    if (args === undefined || args === 'All') {
      return value;
    }
    // tslint:disable-next-line: radix
    const result = value.filter(h => h.stars === parseInt(args));
    return result;
  }

}
