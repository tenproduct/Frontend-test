import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: String = '';
  @Output() newSearch = new EventEmitter<String>();

  constructor() { }

  searchCharacter() {
    this.newSearch.emit(this.searchTerm);
  }

}
