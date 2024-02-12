import { CharactersState } from '../../core/models/characters-state.model';

export const CHARACTERS_STATE_NAME = 'characters';

export const initialCharactersState: CharactersState = {
  totalCount: 0,
  nextPage: 1,
  search: '',
  sortedBy: null,
  characters: [],
  isLoaded: false,
};
