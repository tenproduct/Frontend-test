import { SortType } from '@sw-models/type.enum';
import { SWCharacterInterface } from '../types/swCharacter.interface';

export function sortItems(list: SWCharacterInterface[], _sortBy: SortType) {
  switch (_sortBy) {
    case SortType.Asc:
      return list.sort((a: SWCharacterInterface, b: SWCharacterInterface) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
    case SortType.Desc:
      return list.sort((a: SWCharacterInterface, b: SWCharacterInterface) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1);
    case SortType.Female:
      return list.filter((item: SWCharacterInterface) => item.gender === 'female');
    case SortType.Male:
      return list.filter((item: SWCharacterInterface) => item.gender === 'male');
    default:
      return list;
  }
}
