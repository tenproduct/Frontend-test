import { State } from '../reducers';
import { IPeople } from '../state.models';

export const selectPeople = (state: State): IPeople[] => state.PeopleReducer.people;



