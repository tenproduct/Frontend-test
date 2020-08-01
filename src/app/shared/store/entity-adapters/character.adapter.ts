import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Character } from '@shared/models';

function selectId(character: Character): string {
    return character.url;
}

export const characterAdapter: EntityAdapter<Character> = createEntityAdapter<Character>({ selectId });
