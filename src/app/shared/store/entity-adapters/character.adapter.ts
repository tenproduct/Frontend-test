import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Character } from '@shared/models';

function selectId(character: Character): string {
    // Assuming that the name is unique
    return character.name;
}

export const characterAdapter: EntityAdapter<Character> = createEntityAdapter<Character>({ selectId });
