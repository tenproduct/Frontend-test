import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../models/swapi-ppl-character.model';
import { SortType } from '../../enums/sort-type.enum';
import { SortDirection } from '../../enums/sort-direction.enum';

@Component({
  selector: 'app-swapi-search-result',
  templateUrl: './swapi-search-result.component.html',
  styleUrls: ['./swapi-search-result.component.scss']
})
export class SwapiSearchResultComponent implements OnInit {

  @Input() characters: Character[];
  @Input() sortType: SortType;
  @Input() sortDirection: SortDirection;
  @Output() startSearchCharacter: EventEmitter<string> = new EventEmitter();
  @Output() changeSorting: EventEmitter<SortType | SortDirection> = new EventEmitter();
  @Output() getNextPage: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSearchCharacter(searchTerm: string): void {
    this.startSearchCharacter.emit(searchTerm);
  }

  onChangeSorting(event: any, selectedSorting: SortType | SortDirection): void {
    this.startSearchCharacter.emit(selectedSorting);
  }

  onGetNextPage() {
    this.getNextPage.emit();
  }

}
