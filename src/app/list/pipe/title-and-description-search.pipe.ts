import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleAndDescriptionSearch'
})
export class TitleAndDescriptionSearchPipe implements PipeTransform {

  transform(value: Hotel[], args: string): Hotel[] {
    if (args === '' || args === undefined) {
      return value;
    }
    const filterByName = value.filter(i => i.title.toLowerCase().includes(args.toLowerCase()));
    if (filterByName.length !== 0) {
      return filterByName;
    } else {
      return value.filter(i => i.description.toLowerCase().includes(args.toLowerCase()));
    }
  }

}
