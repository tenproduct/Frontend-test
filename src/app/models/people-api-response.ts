import { Character } from './character'

export interface PeopleApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Character[];
}
