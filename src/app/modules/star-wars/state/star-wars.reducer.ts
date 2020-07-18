import { StarWarsActions, StarWarsActionTypes } from './star-wars.actions';
import { Character } from '../interfaces/character';
import { StarWarsStateActions } from './index';
import { SortOption } from '../enums/sort-option';

export const starWarsFeatureKey = 'starWars';

export interface State {
  characters: Character[];
  sortOption: SortOption;
}

export const initialState: State = {
  characters: [],
  sortOption: SortOption.A_Z
};

export function reducer(state = initialState, action: StarWarsActions): State {
  switch (action.type) {

    case StarWarsActionTypes.LoadCharactersSuccess:
      return {
        ...state,
        characters: (action as StarWarsStateActions.LoadLoadCharactersSuccess).characters
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
