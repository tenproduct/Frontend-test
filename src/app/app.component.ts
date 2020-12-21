import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Person } from './models';
import { ApiService } from './services';
import { sortBy } from './utils';

type Sort = "asc" | "desc" | "male" | "female";

const sortCompareFns: { [key in Sort]: (a: Person, b: Person) => number } = {
  asc: (a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1,
  desc: (a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1,
  male: (a) => a.gender === 'male' ? -1 : 0,
  female: (a) => a.gender === 'female' ? -1 : 0,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  people: Person[] = [];
  maxPeopleCount: number;

  constructor(private apiService: ApiService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadPeople();
  }

  trackByName(_index: number, person: Person): string {
    return person.name;
  }
  
  onSortChange(sort: Sort) {
    this.people = sortBy(this.people, sortCompareFns[sort]);
  }

  loadPeople(): void {
    this.apiService.getPeople().subscribe(response => {
      this.people = response.results;
      this.maxPeopleCount = response.count;
      this.cd.markForCheck();
    });
  }
}
