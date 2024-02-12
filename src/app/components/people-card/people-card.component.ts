import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers';
import { isLoadingState } from '../../store/selectors/people.selectors';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleCardComponent implements OnInit, OnChanges {
  @Input() name: string;
  @Input() isOdd: boolean;
  public defaultImage: string;

  public isLoading$ = this.store.select(isLoadingState);

  constructor(public store: Store<State>) {}

  ngOnInit() {
    this.defaultImage = this.getDefaultImage();
  }

  ngOnChanges() {
    this.defaultImage = this.getDefaultImage();
  }

  public getDefaultImage() {
    return this.isOdd ?
      'assets/mock-image-1.png' :
      'assets/mock-image.png';
  }

}
