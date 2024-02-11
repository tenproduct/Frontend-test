import {sortByEnum} from './reducers/people.reducer';

export interface IPeopleState {
  people: IPeople[];
  count: number;
  nextPage: null | string;
  prevPage: null | string;
  loading: boolean;
  error?: any;
  sortBy: null | keyof typeof sortByEnum;
}

export interface IPeople {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: keyof typeof sortByEnum;
  homeworld: string;
  films: Array<string>;
  species: Array<any>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
}
