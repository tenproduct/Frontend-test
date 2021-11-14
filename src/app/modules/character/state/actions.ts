import { Action } from "@ngrx/store";
import { CharactersActions } from "../models/character.enum";
import { ResponseCharacterModel } from "../models/character.model";

export class SearchCharacters implements Action {
    readonly type = CharactersActions.SearchCharacters;

    constructor(public search: string ) {}
}

export class LoadMoreCharacters implements Action {
    readonly type = CharactersActions.LoadMoreCharacters;
}

export class LoadCharacters implements Action {
    readonly type = CharactersActions.LoadCharacters;
}

export class CharactersLoadedSuccess implements Action {
    readonly type = CharactersActions.CharactersLoadedSuccess;

    constructor(public payload: ResponseCharacterModel) {}
}

export class CharactersLoadedError implements Action {
    readonly type = CharactersActions.CharactersLoadedError;
}

export type CharactersUnion =
    | SearchCharacters
    | LoadMoreCharacters
    | LoadCharacters
    | CharactersLoadedSuccess
    | CharactersLoadedError;