import { SortTypeEnum } from '../enums/sort-type-enum';
import { SWCharacter } from './character-response.model';

export interface CharactersState {
  totalCount: number;
  nextPage: number;
  search: string;
  sortedBy: keyof typeof SortTypeEnum;
  characters: SWCharacter[];
  isLoaded: boolean;
}
