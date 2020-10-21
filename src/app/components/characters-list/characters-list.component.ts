import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StarwarsApiService } from '../../services/starwars-api.service';

@Component({
  selector: 'sw-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit, OnChanges {

  sortOption: string = '';
  characters: Array<any> = [];
  numberOfCharacters: number = 0;
  isLoading: Boolean = false;
  hasNext: Boolean = false;

  @Input() searchTerm: string;

  get charactersToShow(): Array<any> {
    switch (this.sortOption) {
      case '1': {
        return this.characters.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
        break;
      }
      case '2': {
        return this.characters.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0)); 
        break;
      }
      case '3': {
        return this.characters.filter(character => character.gender === 'male') || [];
      }
      case '4': {
        return this.characters.filter(character => character.gender === 'female') || [];
      }
      default: {
        return this.characters;
      }
    }
  }

  constructor(private starwarsService: StarwarsApiService) { }

  ngOnInit() {
    this.getCharacters()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchTerm) {
        this.getCharacters();
    }
}

  getCharacters() {
    this.isLoading = true;
    this.starwarsService.getCharacters(this.searchTerm).subscribe((characters: any) => {
      this.characters = characters.results;
      this.numberOfCharacters = characters.count;
      this.starwarsService.setNext(characters.next);
      this.hasNext = Boolean(characters.next)
      this.isLoading = false;
    });
  }

  loadMore() {
    this.isLoading = true;
    this.starwarsService.loadMore(this.searchTerm).subscribe((characters: any) => {
      this.characters = [...this.characters, ...characters.results];
      this.starwarsService.setNext(characters.next);
      this.hasNext = Boolean(characters.next)
      this.isLoading = false;
    });
  }

}
