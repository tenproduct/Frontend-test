import {Component, Input} from '@angular/core';
import {SWCharacter} from '../../core/models/character-response.model';

@Component({
  selector: 'sw-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent {
  @Input() characters: SWCharacter[];

  constructor() {}
}
