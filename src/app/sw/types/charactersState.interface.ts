import { SortType } from '@sw-models/type.enum';
import { SWCharacterInterface } from './swCharacter.interface';

export interface CharactersStateInterface {
  isLoading: boolean;
  error: string | null;
  count: number;
  next: string | null;
  data: SWCharacterInterface[];
  searchData: SWCharacterInterface[];
  isSearch: boolean;
  searchCount: number;
  sortBy: SortType | null;
}
