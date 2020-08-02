import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Character, CharacterSort } from '@shared/models';
import { AppState, SharedState } from '../app.state';
import { characterAdapter } from '../entity-adapters/character.adapter';

const getCharacterSortFunction = (characterSort: CharacterSort): (character1: Character, character2: Character) => number => {
    switch (characterSort) {
        case CharacterSort.NameAsc:
            return (character1, character2) => character1.name.toLowerCase().localeCompare(character2.name.toLowerCase());
        case CharacterSort.NameDesc:
            return (character1, character2) => character2.name.toLowerCase().localeCompare(character1.name.toLowerCase());
        case CharacterSort.Male:
            return (character1, character2) => character1.gender === 'male' ? -1 : 1;
        case CharacterSort.Female:
            return (character1, character2) => character1.gender === 'female' ? -1 : 1;
    }
};

export const selectSharedState = createFeatureSelector<AppState, SharedState>('shared');

const selectCharacterEntityState = createSelector(
    selectSharedState,
    sharedState => sharedState.characters
);

export const selectCharacterSearchTerm = createSelector(
    selectSharedState,
    sharedState => sharedState.characterSearchTerm
);

export const selectCharacterCount = createSelector(
    selectSharedState,
    sharedState => sharedState.characterCount
);

export const selectCanLoadMore = createSelector(
    selectSharedState,
    sharedState => !!sharedState.nextPageUrl
);

export const selectNextPageUrl = createSelector(
    selectSharedState,
    sharedState => sharedState.nextPageUrl
);

export const selectIsLoading = createSelector(
    selectSharedState,
    sharedState => sharedState.loadingCount > 0
);

export const selectCharacterSort = createSelector(
    selectSharedState,
    sharedState => sharedState.characterSort
);

export const selectCharacters = createSelector(
    characterAdapter.getSelectors(selectCharacterEntityState).selectAll,
    selectCharacterSort,
    (characters, characterSort) => characterSort ? characters.sort(getCharacterSortFunction(characterSort)) : characters
);
