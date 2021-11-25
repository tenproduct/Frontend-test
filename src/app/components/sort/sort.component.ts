import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  @Output() onSort = new EventEmitter<string>();
  selected = '';

  sort() {
    this.onSort.emit(this.selected);
  }
}
