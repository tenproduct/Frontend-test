import {SWCharacter} from '../core/models/character-response.model';
import {SortTypeEnum} from '../core/enums/sort-type-enum';

export interface AppState {
  totalCount: number;
  nextPage: number;
  search: string;
  sortedBy: keyof typeof SortTypeEnum;
  characters: SWCharacter[];
  isLoaded: boolean;
}

export const initialState: AppState = {
  totalCount: 0,
  nextPage: 1,
  search: '',
  sortedBy: null,
  characters: [],
  isLoaded: false
};

export const rootStateKey = 'state';

