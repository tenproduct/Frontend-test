import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/swapi-ppl-character.model';

@Component({
  selector: 'app-swapi-search-card',
  templateUrl: './swapi-search-card.component.html',
  styleUrls: ['./swapi-search-card.component.scss']
})
export class SwapiSearchCardComponent implements OnInit {

  @Input() character: Character;
  @Input() isOdd: boolean;

  constructor() { }

  ngOnInit() {
  }

}
