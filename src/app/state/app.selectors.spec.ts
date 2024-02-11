import {AppState, initialState} from "./app.state";
import {selectCharacters, selectNextPage, selectSearchTerm, selectSortMethod, selectTotalCount} from "./app.selectors";
import {mockCharacters} from "../test/characters.mock";
import {TestBed} from "@angular/core/testing";
import {MockStore, provideMockStore} from "@ngrx/store/testing";

describe('Selectors', () => {
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
