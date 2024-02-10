import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {getCharacters} from '../../state/app.actions';
import {Observable} from "rxjs";
import {SWCharacter} from "../../core/models/character-response.model";
import {selectCharacters} from "../../state/app.selectors";

@Component({
  selector: 'sw-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  public characters$: Observable<SWCharacter[]> = this.store$.select(selectCharacters);

  constructor(private readonly store$: Store) { }

  ngOnInit(): void {
    this.store$.dispatch(getCharacters());
  }

}
