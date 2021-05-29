import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-select',
  templateUrl: './sw-select.component.html',
  styleUrls: ['./sw-select.component.scss']
})
export class SwSelectComponent implements OnInit {

  @Input() sortOptions: Array<any>;
  @Input() selectedValue: any;
  @Output() selectedValueChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  valueChanged(value) {
    this.selectedValueChange.emit(this.sortOptions.filter(x => x.viewValue == value)[0]);
  }

}



