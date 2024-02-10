import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {SWCharacter} from '../../core/models/character-response.model';
import {selectCharacters} from '../../state/app.selectors';
import {Store} from '@ngrx/store';
import {getCharacters} from '../../state/app.actions';

@Component({
  selector: 'sw-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  public characters$: Observable<SWCharacter[]>;

  constructor(private readonly store$: Store) {
    this.characters$ = this.store$.select(selectCharacters);
  }

  ngOnInit(): void {
    this.store$.dispatch(getCharacters());
  }

}
