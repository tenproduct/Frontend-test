import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as CharacterActions from './store/characters.actions';

@Component({
  selector: 'app-swapi-search',
  templateUrl: './swapi-search.component.html',
  styleUrls: ['./swapi-search.component.scss']
})
export class SwapiSearchComponent implements OnInit {

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    this.store.dispatch(CharacterActions.fetchCharacters());

    this.store.select('characters').subscribe(characterState => {
      console.warn(characterState);
    });
  }
}
