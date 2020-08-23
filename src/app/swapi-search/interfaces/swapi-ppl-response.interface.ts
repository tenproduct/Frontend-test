import { ICharacter } from './swapi-ppl-character.interface';

export interface IPplResponse {
  count: number;
  next: string;
  previous: string;
  results: ICharacter[];
}
