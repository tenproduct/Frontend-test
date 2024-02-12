import { SortTypeEnum } from './enums/sort-type-enum';
import { SWCharacter } from './models/character-response.model';

export const sortMethods: {
  [key in keyof typeof SortTypeEnum]: (
    a: SWCharacter,
    b: SWCharacter,
  ) => number;
} = {
  ASCENDING: (a: SWCharacter, b: SWCharacter) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1,
  DESCENDING: (a: SWCharacter, b: SWCharacter) =>
    a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1,
  MALE: (a: SWCharacter) => (a.gender === 'male' ? -1 : 1),
  FEMALE: (a: SWCharacter) => (a.gender === 'female' ? -1 : 1),
};
