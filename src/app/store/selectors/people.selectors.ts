import { State } from '../reducers';
import { IPeople, IPeopleState } from '../state.models';

export const selectPeople = (state: State): IPeople[] => state.PeopleReducer.people;
export const isLoadingState = (state: State): boolean => state.PeopleReducer.loading;
export const getAmountOfAllPeople = (state: State): number => state.PeopleReducer.count;
export const loadNextSliceData = (state: State): Pick<IPeopleState, 'nextPage' | 'people'> => ({
  people: state.PeopleReducer.people,
  nextPage: state.PeopleReducer.nextPage
});



