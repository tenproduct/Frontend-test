import { Component, OnInit } from '@angular/core';
import { StarWarsReducer, StarWarsSelectors, StarWarsStateActions } from '../../state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss']
})
export class StarWarsComponent implements OnInit {

  characters$: Observable<Character[]>;

  constructor(private store: Store<StarWarsReducer.State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new StarWarsStateActions.LoadLoadCharacters());
    this.characters$ = this.store.pipe(select(StarWarsSelectors.selectCharacters));
  }

}
