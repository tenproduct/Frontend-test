import {Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'sw-input',
  templateUrl: './sw-input.component.html',
  styleUrls: ['./sw-input.component.scss']
})
export class SwInputComponent implements OnInit {

  @Input() inputValue;
  @Output() inputValueChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  inputValueChanged(value) {
    this.inputValueChange.emit(this.inputValue);
  }

}
