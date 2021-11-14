import { CharactersActions } from "../models/character.enum";
import { CharactersUnion } from "./actions";
import { CharactersState, initialState } from "./state";

export function characterReducer(
    state: CharactersState = initialState,
    action: CharactersUnion
    ) {
    switch (action.type) {
        case CharactersActions.SearchCharacters:
            return {
                ...state,
                currentPage: 1,
                search: action.search,
                characters: [],
            };
        case CharactersActions.LoadMoreCharacters:
            const newPage = state.currentPage +1;
            return {
                ...state,
                currentPage: newPage,
            };
        case CharactersActions.CharactersLoadedSuccess:
            return {
                ...state,
                total: action.payload.count,
                characters: state.characters.concat(action.payload.results),
            };
        case CharactersActions.CharactersLoadedError:
            return {
                ...state,
                characters: [],
            };
        default:
            return state;
    }
}
