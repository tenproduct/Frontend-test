import { PagedResponse } from './paged-response.model';
import { Character } from './character.model';

export interface GetCharactersResponse extends PagedResponse {
    results: Character[];
}
