import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.scss']
})
export class PeopleCardComponent implements OnInit {
  @Input() name: string;
  @Input() isOdd: boolean;

  constructor() { }

  ngOnInit() {}

  public getDefaultImage() {
    return this.isOdd ?
      'assets/mock-image-1.png' :
      'assets/mock-image.png';
  }

}
