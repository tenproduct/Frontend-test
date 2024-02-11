import {SWCharacter, SWCharacterResponse} from '../core/models/character-response.model';

export const mockCharacters: SWCharacter[] = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/'
    ],
    species: [],
    vehicles: [],
    starships: [],
    created: null,
    edited: null,
    url: 'https://swapi.dev/api/people/1/'
  },
];

export const mockCharacterResponse: SWCharacterResponse = {
  count: 82,
  next: 'https://swapi.dev/api/people/?page=3&format=json',
  previous: 'https://swapi.dev/api/people/?page=1&format=json',
  results: mockCharacters
};
