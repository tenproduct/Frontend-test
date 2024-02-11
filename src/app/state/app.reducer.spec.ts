import {AppState, initialState} from "./app.state";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {TestBed} from "@angular/core/testing";
import {mockCharacterResponse, mockCharacters} from "../test/characters.mock";
import {SWCharacter, SWCharacterResponse} from "../core/models/character-response.model";
import {getCharactersSuccess, searchCharacters, setCharactersLoadingStatus, sortChange} from "./app.actions";
import {appReducer} from "./app.reducer";
import {SortTypeEnum} from "../core/enums/sort-type-enum";

describe('Reducers', () => {
  const state: AppState = initialState;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState}),
      ],
    });
    store = TestBed.inject(MockStore);
  });
  describe('characters fetched successfully', () => {
    it('should get characters and update state', () => {
      const response: SWCharacterResponse = mockCharacterResponse;
      const action = getCharactersSuccess({response});
      const newState: AppState = appReducer(initialState, action);
      expect(newState).not.toBe(initialState);
      expect(newState.nextPage).toBeGreaterThan(initialState.nextPage);
    });
  });
  describe('loading status is changed', () => {
    it('should change loading status to false',  () => {
      const action = setCharactersLoadingStatus({isLoaded: false});
      const newState: AppState = appReducer(initialState, action);
      expect(newState.isLoaded).toBeFalsy();
    });
    it('should change loading status to true',  () => {
      const action = setCharactersLoadingStatus({isLoaded: true});
      const newState: AppState = appReducer(initialState, action);
      expect(newState.isLoaded).toBeTruthy();
    });
  });
  describe('search term is changed', () => {
    it('should change search term', () => {
      const searchTerm = 'Yoda';
      const action = searchCharacters({search: searchTerm});
      const newState: AppState = appReducer(initialState, action);
      expect(newState.search).toEqual(searchTerm);
    });
  });
  describe('sort method is changed', () => {
    it('should change sort method', () => {
      const sortMethod: keyof typeof SortTypeEnum = 'ASCENDING';
      const action = sortChange({sortMethod});
      const newState: AppState = appReducer(initialState, action);
      expect(newState.sortedBy).toEqual(sortMethod);
    });
  });
});
