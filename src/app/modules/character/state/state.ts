import { Character, CharacterSortOption } from '../models/character.model';

export interface CharactersState {
    total: number;
    search: string;
    sortOption: CharacterSortOption,
    currentPage: number,
    characters: Character[];
}
  
export const initialState: CharactersState = {
    total: 0,
    search: '',
    sortOption: { title: 'None', type: '', sort: '' },
    currentPage: 1,
    characters: [],
};