import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';

import { StarWarsService } from 'src/app/services/star-wars.service';
import { SortOptions } from 'src/app/models/sort-options.enum';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {
  sortOptions = Object.values(SortOptions);
  sortSubject = new BehaviorSubject<SortOptions | null>(null);
  resultsList: Observable<Character[]>;

  constructor(public starWars: StarWarsService) {
    // tslint:disable-next-line: deprecation
    this.resultsList = combineLatest(
      [starWars.peopleList, this.sortSubject],
      (people: Character[], sort: SortOptions | null): Character[] => {
        switch (sort) {
          case SortOptions.AtoZ:
            return people.sort((a, b) => a.name.localeCompare(b.name));
          case SortOptions.ZtoA:
            return people.sort((a, b) => b.name.localeCompare(a.name));
          case SortOptions.Male:
            return people.filter((character) => character.gender.toLowerCase() === 'male');
          case SortOptions.Female:
            return people.filter((character) => character.gender.toLowerCase() === 'female');
          default:
            return people;
        }
      }
    );
  }

  ngOnInit(): void {
    this.sortSubject.next(null);
    this.starWars.init();
  }

  sort(order: SortOptions) {
    this.sortSubject.next(order);
  }

}
