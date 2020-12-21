import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Person } from './models';
import { ApiService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  people: Person[];
  maxPeopleCount: number;

  constructor(private apiService: ApiService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadPeople();
  }

  trackByName(_index: number, person: Person): string {
    return person.name;
  }

  loadPeople(): void {
    this.apiService.getPeople().subscribe(response => {
      this.people = response.results;
      this.maxPeopleCount = response.count;
      this.cd.markForCheck();
    });
  }
}
