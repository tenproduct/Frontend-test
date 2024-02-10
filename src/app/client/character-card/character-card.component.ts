import {Component, Input, OnInit} from '@angular/core';
import {SWCharacter} from '../../core/models/character-response.model';

@Component({
  selector: 'sw-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() character: SWCharacter;
  constructor() { }

  ngOnInit(): void {
  }

}
