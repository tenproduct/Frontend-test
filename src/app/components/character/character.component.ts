import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sw-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() character: Object;
  @Input() characterIndex: number = 0;

  get profilePicture() {
    return (this.characterIndex % 2 === 0) 
      ? 'assets/mock-image.png'
      : 'assets/mock-image-1.png';
  }

  constructor() { }

  ngOnInit() {
  }


}
