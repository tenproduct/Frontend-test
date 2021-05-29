import { SortOption } from './../view-model/sort-option';
import { Character } from './../view-model/character';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-character-list',
  templateUrl: './sw-character-list.component.html',
  styleUrls: ['./sw-character-list.component.scss']
})
export class SwCharacterListComponent implements OnInit {
  @Input() characterList: Character[];
  @Input() sortOption: string;
  @Input() sortOrder: string;

  constructor() { }

  ngOnInit() {
  }

  getImage(i) {
    return (i % 2 === 0 ? '../../assets/mock-image.png' : '../../assets/mock-image-1.png');
  }

}
