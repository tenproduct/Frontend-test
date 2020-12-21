import { Person } from './person';

export interface PeopleResponse {
    count: number;
    next: string;
    previous: string;
    results: Person[];
}