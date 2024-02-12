import { Pipe, PipeTransform } from '@angular/core';
import { sortItems } from '@sw-utils/sort';
import { SortType } from '@sw-models/type.enum';
import { SWCharacterInterface } from '../types/swCharacter.interface';

@Pipe({
  name: 'swSortBy'
})
export class SwSortByPipe implements PipeTransform {
  transform(list: SWCharacterInterface[], sortByArg: SortType): SWCharacterInterface[] {
    return !!sortByArg ? sortItems(list, sortByArg) : list;
  }
}
