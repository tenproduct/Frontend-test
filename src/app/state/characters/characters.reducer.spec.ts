import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import {
  mockCharacterResponse,
  mockCharacters,
} from '../../test/characters.mock';
import {
  SWCharacter,
  SWCharacterResponse,
} from '../../core/models/character-response.model';
import {
  getCharactersSuccess,
  searchCharacters,
  setCharactersLoadingStatus,
  sortChange,
} from './characters.actions';
import { charactersReducer } from './characters.reducer';
import { SortTypeEnum } from '../../core/enums/sort-type-enum';
import { CharactersState } from '../../core/models/characters-state.model';
import { initialCharactersState } from './characters.state';

describe('Reducers', () => {
  const state: CharactersState = initialCharactersState;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState: initialCharactersState })],
    });
    store = TestBed.inject(MockStore);
  });
  describe('characters fetched successfully', () => {
    it('should get characters and update state', () => {
      const response: SWCharacterResponse = mockCharacterResponse;
      const action = getCharactersSuccess({ response });
      const newState: CharactersState = charactersReducer(
        initialCharactersState,
        action,
      );
      expect(newState).not.toBe(initialCharactersState);
      expect(newState.nextPage).toBeGreaterThan(
        initialCharactersState.nextPage,
      );
    });
  });
  describe('loading status is changed', () => {
    it('should change loading status to false', () => {
      const action = setCharactersLoadingStatus({ isLoaded: false });
      const newState: CharactersState = charactersReducer(
        initialCharactersState,
        action,
      );
      expect(newState.isLoaded).toBeFalsy();
    });
    it('should change loading status to true', () => {
      const action = setCharactersLoadingStatus({ isLoaded: true });
      const newState: CharactersState = charactersReducer(
        initialCharactersState,
        action,
      );
      expect(newState.isLoaded).toBeTruthy();
    });
  });
  describe('search term is changed', () => {
    it('should change search term', () => {
      const searchTerm = 'Yoda';
      const action = searchCharacters({ search: searchTerm });
      const newState: CharactersState = charactersReducer(
        initialCharactersState,
        action,
      );
      expect(newState.search).toEqual(searchTerm);
    });
  });
  describe('sort method is changed', () => {
    it('should change sort method', () => {
      const sortMethod: keyof typeof SortTypeEnum = 'ASCENDING';
      const action = sortChange({ sortMethod });
      const newState: CharactersState = charactersReducer(
        initialCharactersState,
        action,
      );
      expect(newState.sortedBy).toEqual(sortMethod);
    });
  });
});
