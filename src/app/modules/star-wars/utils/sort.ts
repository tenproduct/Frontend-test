import { Character } from '../interfaces/character';

export const sortByNameAsc = (c1: Character, c2: Character) => c1.name.toLowerCase().localeCompare(c2.name.toLowerCase());

export const sortByNameDesc = (c1: Character, c2: Character) => c2.name.toLowerCase().localeCompare(c1.name.toLowerCase());

const sortByGender = (c1: Character, c2: Character, gender: 'male' | 'female') => {
  if (c1.gender === c2.gender) {
    return 0;
  }

  return c1.gender === gender ? -1 : 1;
};

export const sortByMale = (c1: Character, c2: Character) => sortByGender(c1, c2, 'male');

export const sortByFemale = (c1: Character, c2: Character) => sortByGender(c1, c2, 'female');
