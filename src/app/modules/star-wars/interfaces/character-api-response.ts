import { Character } from './character';

export interface CharacterApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Character[];
}
