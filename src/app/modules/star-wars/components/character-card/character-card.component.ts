import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {

  @Input()
  character: Character;

  @Input()
  set isOdd(isOdd: boolean) {
    this.imageUrl = isOdd ? 'assets/mock-image-1.png' : 'assets/mock-image.png';
  }

  imageUrl: string;

}
