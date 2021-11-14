import { CharactersActions } from '../models/character.enum';
import { Character, ResponseCharacterModel } from '../models/character.model';
import { CharactersLoadedError, CharactersLoadedSuccess, LoadCharacters, LoadMoreCharacters, SearchCharacters } from './actions';

describe('LoadCharacters', () => {
    it('should create an action', () => {
        const action = new LoadCharacters();

        expect({ ...action }).toEqual({ type: CharactersActions.LoadCharacters });
    });
});

describe('LoadMoreCharacters', () => {
    it('should create an action', () => {
        const action = new LoadMoreCharacters();

        expect({ ...action }).toEqual({ type: CharactersActions.LoadMoreCharacters });
    });
});

describe('SearchCharacters', () => {
    it('should create an action', () => {
        const search: string = 'search';
        const action = new SearchCharacters(search);

        expect({ ...action }).toEqual({ type: CharactersActions.SearchCharacters, search });
    });
});

describe('CharactersLoadedSuccess', () => {
    it('should create an action', () => {
        const successResponce: ResponseCharacterModel = {
            count: 12,
            next: "https://swapi.dev/api/people/?page=2",
            previous: null,
            results: [
                {
                    name: "Luke Skywalker",
                    height: "172",
                    mass: "77",
                    hair_color: "blond",
                    skin_color: "fair",
                    eye_color: "blue",
                    birth_year: "19BBY",
                    gender: "male",
                    homeworld: "https://swapi.dev/api/planets/1/",
                    films: [
                        "https://swapi.dev/api/films/2/",
                        "https://swapi.dev/api/films/6/",
                        "https://swapi.dev/api/films/3/",
                        "https://swapi.dev/api/films/1/",
                        "https://swapi.dev/api/films/7/"
                    ],
                    species: [
                        "https://swapi.dev/api/species/1/"
                    ],
                    vehicles: [
                        "https://swapi.dev/api/vehicles/14/",
                        "https://swapi.dev/api/vehicles/30/"
                    ],
                    starships: [
                        "https://swapi.dev/api/starships/12/",
                        "https://swapi.dev/api/starships/22/"
                    ],
                    created: "2014-12-09T13:50:51.644000Z",
                    edited: "2014-12-20T21:17:56.891000Z",
                    url: "https://swapi.dev/api/people/1/"
                } 
            ]
        };
        const action = new CharactersLoadedSuccess(successResponce);

        expect({ ...action }).toEqual({ type: CharactersActions.CharactersLoadedSuccess, payload: successResponce });
    });
});

describe('CharactersLoadedError', () => {
    it('should create an action', () => {
        const action = new CharactersLoadedError();

        expect({ ...action }).toEqual({ type: CharactersActions.CharactersLoadedError });
    });
});
