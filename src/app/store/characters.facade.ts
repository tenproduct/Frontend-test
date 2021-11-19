import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as CharacterActions from "./characters.actions";
import { Character } from "./characters.models";
import { CharactersState } from "./characters.reducer";
import {
  isCharacterListLoadFail,
  isCharacterListLoadRun,
  isCharacterListLoadSuccess,
  getAllCharacters,
  getNextPage,
  getTotalCharacters,
  getLoadedCharacters,
} from "./characters.selectors";

@Injectable({
  providedIn: "root",
})
export class CharactersFacade {
  constructor(private readonly _store: Store<CharactersState>) {}

  characters$: Observable<Character[]> = this._store.pipe(
    select(getAllCharacters)
  );

  isChaacterListLoadRun$: Observable<boolean> = this._store.pipe(
    select(isCharacterListLoadRun)
  );

  isChaacterListLoadSuccess$: Observable<boolean> = this._store.pipe(
    select(isCharacterListLoadSuccess)
  );

  isChaacterListLoadFail$: Observable<any> = this._store.pipe(
    select(isCharacterListLoadFail)
  );

  totalCharacters$: Observable<any> = this._store.pipe(
    select(getTotalCharacters)
  );

  loadedCharacters$: Observable<any> = this._store.pipe(
    select(getLoadedCharacters)
  );

  nextPage$: Observable<any> = this._store.pipe(select(getNextPage));

  getCharacters = () => this._store.dispatch(CharacterActions.getCharacters());
}
