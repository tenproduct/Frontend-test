import * as fromCharacters from '../swapi-search/store/characters.reducer';

export interface AppState {
  characters: fromCharacters.CharacterState;
}
