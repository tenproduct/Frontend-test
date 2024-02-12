import {
  selectCharacters,
  selectNextPage,
  selectSearchTerm,
  selectSortMethod,
  selectTotalCount,
} from './characters.selectors';
import { mockCharacters } from '../../test/characters.mock';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CharactersState } from '../../core/models/characters-state.model';
import { initialCharactersState } from './characters.state';

describe('Selectors', () => {
  const state: CharactersState = initialCharactersState;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState: initialCharactersState })],
    });
    store = TestBed.inject(MockStore);
  });
  it('should select characters', () => {
    const characters = selectCharacters.projector(state);
    expect(characters).toEqual([]);
  });
  it('should select total count', () => {
    const characters = selectTotalCount.projector(state);
    expect(characters).toEqual(0);
  });
  it('should select next page', () => {
    const characters = selectNextPage.projector(state);
    expect(characters).toEqual(1);
  });
  it('should select search term', () => {
    const characters = selectSearchTerm.projector(state);
    expect(characters).toEqual('');
  });
  it('should select sort method', () => {
    const characters = selectSortMethod.projector(state);
    expect(characters).toEqual(null);
  });
  it('should select loading status', () => {
    const characters = selectSortMethod.projector(state);
    expect(characters).toBeFalsy();
  });
});
