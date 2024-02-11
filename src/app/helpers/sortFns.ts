import { IPeople } from '../store/state.models';

export enum sortByEnum {
  'A-Z' = 'A-Z',
  'Z-A' = 'Z-A',
  male = 'male',
  female = 'female'
}

export const sortedValue = [
  {value: sortByEnum['A-Z'], viewValue: 'A-Z'},
  {value: sortByEnum['Z-A'], viewValue: 'Z-A'},
  {value: sortByEnum.male, viewValue: 'Male'},
  {value: sortByEnum.female, viewValue: 'Female'}
];

export const sortByFn = (people: Array<IPeople>, type: keyof typeof sortByEnum) => {
  people.sort((a, b) => {
    const sorting = {
      [sortByEnum.male]: b.gender === sortByEnum.male,
      [sortByEnum.female]: b.gender === sortByEnum.female,
      [sortByEnum['A-Z']]: a.name > b.name,
      [sortByEnum['Z-A']]: a.name < b.name,

    };
    return (sorting[type] ? 1 : -1);
  });
  return people;
};
