import { SWCharacterInterface } from './swCharacter.interface';

export interface GetCharactersResponseInterface {
  count: number;
  next: string;
  results: SWCharacterInterface[];
}
