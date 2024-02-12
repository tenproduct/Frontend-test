import { createReducer, on, Action } from '@ngrx/store'
import { CharactersStateInterface } from '../types/charactersState.interface'
import {
  getCharactersAction,
  getCharactersSuccessAction,
  getCharactersFailureAction,
  loadMoreCharactersAction,
  loadMoreCharactersSuccessAction,
  loadMoreCharactersFailureAction,
  searchCharacterAction,
  searchCharactersFailureAction,
  searchCharactersSuccessAction,
  resetSearchCharactersAction,
  sortByAction
} from './actions/getCharacters.action'

const initialState: CharactersStateInterface = {
  isLoading: false,
  error: null,
  count: 0,
  next: '',
  data: [],
  searchData: [],
  isSearch: false,
  searchCount: 0,
  sortBy: null,
}

const charactersReducer = createReducer(
  initialState,
  on(
    getCharactersAction,
    (state): CharactersStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCharactersSuccessAction,
    (state, action): CharactersStateInterface => ({
      ...state,
      isLoading: false,
      count: action.characters.count,
      next: action.characters.next,
      data: action.characters.results,
    })
  ),
  on(
    getCharactersFailureAction,
    (state): CharactersStateInterface => ({
      ...state,
      isLoading: false,
      count: 0,
      next: '',
      data: null,
    })
  ),

  on(
    loadMoreCharactersAction,
    (state): CharactersStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    loadMoreCharactersSuccessAction,
    (state, action): CharactersStateInterface => ({
      ...state,
      isLoading: false,
      next: action.characters.next,
      data: [
        ...state.data,
        ...action.characters.results,
      ]
    })
  ),
  on(
    loadMoreCharactersFailureAction,
    (state): CharactersStateInterface => ({
      ...state,
      isLoading: false,
      count: 0,
      next: '',
      data: null,
    })
  ),

  on(
    searchCharacterAction,
    (state): CharactersStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    searchCharactersSuccessAction,
    (state, action): CharactersStateInterface => ({
      ...state,
      isLoading: false,
      next: action.characters.next,
      searchCount: action.characters.count,
      searchData: action.characters.results,
      isSearch: true,
    })
  ),
  on(
    searchCharactersFailureAction,
    (state): CharactersStateInterface => ({
      ...state,
      isLoading: false,
      searchCount: 0,
      searchData: [],
      isSearch: false,
    })
  ),

  on(
    resetSearchCharactersAction,
    (state): CharactersStateInterface => ({
      ...state,
      searchCount: 0,
      searchData: [],
      isSearch: false,
    })
  ),

  on(
    sortByAction,
    (state, action): CharactersStateInterface => ({
      ...state,
      sortBy: action.sortBy
    })
  ),
)

export function reducers(state: CharactersStateInterface, action: Action) {
  return charactersReducer(state, action)
}
