import { createAction, props } from '@ngrx/store';
import { SWCharacterResponse } from '../../core/models/character-response.model';
import { AppStoreEnum } from '../../core/enums/appStoreEnum';
import { SortTypeEnum } from '../../core/enums/sort-type-enum';

const PREFIX = AppStoreEnum.SW_HEROES;

export const getCharacters = createAction(`${PREFIX} Get characters Started`);

export const getCharactersSuccess = createAction(
  `${PREFIX} Get characters Success`,
  props<{ response: SWCharacterResponse }>(),
);

export const getCharactersFailed = createAction(
  `${PREFIX} Get characters Failed`,
);

export const setCharactersLoadingStatus = createAction(
  `${PREFIX} Set characters loading`,
  props<{ isLoaded: boolean }>(),
);

export const loadMoreCharacters = createAction(
  `${PREFIX} Load more characters`,
);
export const searchCharacters = createAction(
  `${PREFIX} Search Characters`,
  props<{ search: string }>(),
);

export const sortChange = createAction(
  `${PREFIX} Sort Characters`,
  props<{ sortMethod: keyof typeof SortTypeEnum }>(),
);
