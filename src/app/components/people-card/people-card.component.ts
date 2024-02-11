import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers';
import { isLoadingState } from '../../store/selectors/people.selectors';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.scss']
})
export class PeopleCardComponent implements OnInit {
  @Input() name: string;
  @Input() isOdd: boolean;

  public isLoading$ = this.store.select(isLoadingState);

  constructor(public store: Store<State>) {}

  ngOnInit() {}

  public getDefaultImage() {
    return this.isOdd ?
      'assets/mock-image-1.png' :
      'assets/mock-image.png';
  }

}
