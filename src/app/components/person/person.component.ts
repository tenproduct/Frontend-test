import { Component, Input } from '@angular/core';
import { Person } from 'src/app/core/interfaces/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input() person: Person;
  @Input() index: number;
}
