import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {getCharacters} from '../../state/app.actions';
import {Observable} from "rxjs";
import {SWCharacter} from "../../core/models/character-response.model";
import {selectCharacters} from "../../state/app.selectors";

@Component({
  selector: 'sw-characters-listing',
  templateUrl: './characters-listing.component.html',
  styleUrls: ['./characters-listing.component.scss']
})
export class CharactersListingComponent implements OnInit {

  constructor(private readonly store$: Store) { }

  ngOnInit(): void {}

}
