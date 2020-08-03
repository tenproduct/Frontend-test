import { Resource } from './resource.model';

export interface PagedResponse {
    count: number;
    next: string;
    previous: string;
    results: Resource[];
}
