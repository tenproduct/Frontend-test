import { SWPerson } from "../models";

export const MOCK_PEOPLE: SWPerson[] = [
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
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        hair_color: 'brown',
        skin_color: 'light',
        eye_color: 'brown',
        birth_year: '19BBY',
        gender: 'female',
        homeworld: 'https://swapi.dev/api/planets/2/',
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
        url: 'https://swapi.dev/api/people/5/'
    }
];
