import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sw-button',
  templateUrl: './sw-button.component.html',
  styleUrls: ['./sw-button.component.scss']
})
export class SwButtonComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() loadMore: boolean;
  constructor() { }

  ngOnInit() {
  }

}
