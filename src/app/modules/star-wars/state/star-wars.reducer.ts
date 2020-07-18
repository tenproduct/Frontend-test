import { StarWarsActions, StarWarsActionTypes } from './star-wars.actions';
import { Character } from '../interfaces/character';
import { StarWarsStateActions } from './index';

export const starWarsFeatureKey = 'starWars';

export interface State {
  characters: Character[];
}

export const initialState: State = {
  characters: []
};

export function reducer(state = initialState, action: StarWarsActions): State {
  switch (action.type) {

    case StarWarsActionTypes.LoadLoadCharactersSuccess:
      return {
        ...state,
        characters: (action as StarWarsStateActions.LoadLoadCharactersSuccess).characters
      };

    default:
      return state;
  }
}
