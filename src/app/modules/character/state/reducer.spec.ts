import { ResponseCharacterModel } from '../models/character.model';
import { CharactersLoadedError, CharactersLoadedSuccess, CharactersUnion, LoadMoreCharacters, SearchCharacters } from './actions';
import * as fromCharacter from './reducers';
import { initialState } from "./state";

describe('characterReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as CharactersUnion;
      const state = fromCharacter.characterReducer(undefined, action);

      expect(state).toBe(initialState);
    });

    it('should set search value', () => {
        const searchValue = 'Luke';
        const action = new SearchCharacters(searchValue);
        const state = fromCharacter.characterReducer(initialState, action);
    
        expect(state.search).toEqual(searchValue);
        expect(state.currentPage).toEqual(1);
    });

    it('should load more characters and set new current page', () => {
        const newPage = initialState.currentPage + 1;
        const action = new LoadMoreCharacters();
        const state = fromCharacter.characterReducer(initialState, action);
    
        expect(state.currentPage).toEqual(newPage);
    });

    it('should success load characters', () => {
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
        const state = fromCharacter.characterReducer(initialState, action);
    
        expect(state.characters).toEqual(successResponce.results);
    });

    it('should unset character list while error loading character data', () => {
        const action = new CharactersLoadedError();
        const state = fromCharacter.characterReducer(initialState, action);
    
        expect(state.characters).toEqual([]);
    });
  });
});