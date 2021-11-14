import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CharacterSortOption } from '../../models/character.model';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {
  public search: string;
  public selectedOption: CharacterSortOption;

  @Output() searchCharacterEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  searchCharacter() {
    this.searchCharacterEvent.emit(this.search);
  }

}
