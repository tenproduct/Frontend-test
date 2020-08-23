import { Character } from './swapi-ppl-character.model';
import { IPplResponse } from '../interfaces/swapi-ppl-response.interface';

export class PplResponse implements IPplResponse {

  readonly count: number;
  readonly next: string;
  readonly previous: string;
  readonly results: Character[];

  constructor(iPplResponse: IPplResponse) {
    this.count = iPplResponse.count;
    this.next = iPplResponse.next;
    this.previous = iPplResponse.previous;
    this.results = Array.isArray(iPplResponse.results) ? iPplResponse.results : null;
  }
}
