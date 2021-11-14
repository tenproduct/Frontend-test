import { Component, OnInit, Output } from '@angular/core';
import { CharacterSortOption } from '../../models/character.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-sort',
  templateUrl: './character-sort.component.html',
  styleUrls: ['./character-sort.component.scss']
})
export class CharacterSortComponent implements OnInit {
  public sortOptions: CharacterSortOption[] = [
    { title: 'None', type: '', sort: '' },
    { title: 'A-Z', type: 'name', sort: 'asc' },
    { title: 'Z-A', type: 'name', sort: 'desc' },
    { title: 'Male', type: 'gender', sort: 'desc' },
    { title: 'Female', type: 'gender', sort: 'asc' },
  ]
  
  public selectedOption: CharacterSortOption;

  @Output() characterSortOptionChanged = new EventEmitter();

  constructor() { 
    this.selectedOption = this.sortOptions[0];
  }

  ngOnInit() {}

  sortOptionChanged(sortOption: CharacterSortOption) {
    this.characterSortOptionChanged.emit(sortOption);
  }

}
