import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: string = '';
  @Output() newSearch = new EventEmitter<string>();

  searchCharacter() {
    this.newSearch.emit(this.searchTerm);
  }

}
