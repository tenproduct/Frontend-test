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
  private peopleSubject: BehaviorSubject<Character[]> = new BehaviorSubject(this.loadedPeople);
  peopleList$ = this.peopleSubject.asObservable();
  totalCharacters = 0;
  nextUrl: string | null = null;

  constructor(private network: NetworkService) { }

  init() {
    // TODO: extract API URL to global constant
    this.network.get<PeopleApiResponse>('https://swapi.dev/api/people/')
      .subscribe(
        (response: PeopleApiResponse) => {
          this.loadedPeople = response.results;
          this.totalCharacters = response.count;
          this.nextUrl = response.next;
          this.peopleSubject.next(this.loadedPeople);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  next() {
    if (!this.nextUrl) {
      return;
    }
    // TODO: next URL is not verified, if API is hacked, we can silently be redirected elsewhere
    this.network.get<PeopleApiResponse>(this.nextUrl)
      .subscribe(
        (response: PeopleApiResponse) => {
          this.loadedPeople = [
            ...this.loadedPeople,
            ...response.results
          ];
          this.totalCharacters = response.count;
          this.nextUrl = response.next;
          this.peopleSubject.next(this.loadedPeople);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
