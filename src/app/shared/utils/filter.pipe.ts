import { Pipe, PipeTransform } from '@angular/core';
import { IPokemon } from '../models/pokemon.interface';

@Pipe({
  name: 'appFilter'
})
export class FilterPipe implements PipeTransform {

  public transform(items: IPokemon[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    const temp = items.filter(it => {
      return String(it.name).toLocaleLowerCase().includes(searchText);
    });
    return temp;
  }

}