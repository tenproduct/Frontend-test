import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Character } from '../models/character';
import { PeopleApiResponse } from '../models/people-api-response';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private loadedPeople: Character[] = [];
  peopleList: BehaviorSubject<Character[]> = new BehaviorSubject(this.loadedPeople);

  constructor(private network: NetworkService) { }

  init() {
    // TODO: extract API URL to global constant
    this.network.get<PeopleApiResponse>('https://swapi.dev/api/people/')
      .subscribe((response: PeopleApiResponse) => {
        this.loadedPeople = response.results;
        this.peopleList.next(this.loadedPeople);
      });
  }
}
