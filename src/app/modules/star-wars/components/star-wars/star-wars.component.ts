import { Component, OnInit } from '@angular/core';
import { StarWarsReducer, StarWarsStateActions } from '../../state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss']
})
export class StarWarsComponent implements OnInit {

  constructor(private store: Store<StarWarsReducer.State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new StarWarsStateActions.LoadLoadCharacters());
  }

}
