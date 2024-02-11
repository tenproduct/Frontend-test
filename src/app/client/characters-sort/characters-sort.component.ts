import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SortTypeEnum} from "../../core/enums/sort-type-enum";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectSortMethod} from "../../state/app.selectors";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'sw-characters-sort',
  templateUrl: './characters-sort.component.html',
  styleUrls: ['./characters-sort.component.scss']
})
export class CharactersSortComponent {
  @Output() changeSort: EventEmitter<keyof typeof SortTypeEnum>;
  public SortTypeEnum = SortTypeEnum;

  constructor() {
    this.changeSort = new EventEmitter<keyof typeof SortTypeEnum>();
  }

  onChange($event: MatSelectChange) {
    this.changeSort.emit($event.value);
  }
}
