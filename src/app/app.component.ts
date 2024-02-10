import {Component, OnInit} from '@angular/core';
import {SwapiService} from './services/swapi.service';
import { Store } from '@ngrx/store';
import * as actions from './store/actions/people.actions';
import {selectPeople} from './store/selectors/people.selectors';
import {State} from './store/reducers';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Star Wars App!';

  public people$ = this.store.select(selectPeople);
  myControl = new FormControl('');

  constructor(public store: Store<State>, public swService: SwapiService) {
  }

  ngOnInit() {
    this.store.dispatch(actions.loadPeople());
  }

}
