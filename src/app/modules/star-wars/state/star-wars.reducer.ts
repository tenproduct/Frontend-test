import { StarWarsActions, StarWarsActionTypes } from './star-wars.actions';

export const starWarsFeatureKey = 'starWars';

export interface State {
}

export const initialState: State = {};

export function reducer(state = initialState, action: StarWarsActions): State {
  switch (action.type) {

    case StarWarsActionTypes.LoadStarWarss:
      return state;

    default:
      return state;
  }
}
