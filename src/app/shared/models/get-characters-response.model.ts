import { Character } from './character.model';

export interface GetCharactersResponse {
    count: number;
    next: string;
    previous: string;
    results: Character[];
}
