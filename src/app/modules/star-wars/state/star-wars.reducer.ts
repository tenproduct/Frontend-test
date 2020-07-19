import { StarWarsActions, StarWarsActionTypes } from './star-wars.actions';
import { Character } from '../interfaces/character';
import { StarWarsStateActions } from './index';
import { SortOption } from '../enums/sort-option';

export const starWarsFeatureKey = 'starWars';

export interface State {
  characters: Character[];
  sortOption: SortOption;
  count: number;
  search: string;
  page: number;
}

export const initialState: State = {
  characters: [],
  sortOption: SortOption.A_Z,
  count: 0,
  search: '',
  page: 1
};

export function reducer(state = initialState, action: StarWarsActions): State {
  switch (action.type) {

    case StarWarsActionTypes.LoadCharacters:
      const loadCharactersAction: StarWarsStateActions.LoadLoadCharacters = action as StarWarsStateActions.LoadLoadCharacters;
      return {
        ...state,
        search: loadCharactersAction.search,
        page: loadCharactersAction.page
      };

    case StarWarsActionTypes.LoadCharactersSuccess:
      const successAction: StarWarsStateActions.LoadLoadCharactersSuccess = action as StarWarsStateActions.LoadLoadCharactersSuccess;
      return {
        ...state,
        characters: action.append ? [...state.characters, ...action.response.results] : action.response.results,
        count: action.response.count
      };

    case StarWarsActionTypes.ChangeSortOption:
      return {
        ...state,
        sortOption: (action as StarWarsStateActions.ChangeSortOption).option
      };

    default:
      return state;
  }
}
