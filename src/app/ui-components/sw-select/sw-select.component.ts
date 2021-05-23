import { Component, OnInit } from '@angular/core';

interface SortOptions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'sw-select',
  templateUrl: './sw-select.component.html',
  styleUrls: ['./sw-select.component.scss']
})
export class SwSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedValue: string;
  selectedOption: string;

  sortOptions: SortOptions[] = [
    {value: 'A-Z', viewValue: 'A-Z'},
    {value: 'Z-A', viewValue: 'Z-A'},
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
  ];
}
