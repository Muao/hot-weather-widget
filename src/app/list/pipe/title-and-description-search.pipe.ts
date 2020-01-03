import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleAndDescriptionSearch'
})
export class TitleAndDescriptionSearchPipe implements PipeTransform {

  transform(value: Hotel[], args: string): Hotel[] {
    if (args === '') {
      console.log('args is empty');
      return value;
    }
    return value.filter(i => i.title.toLowerCase().includes(args));
  }

}
