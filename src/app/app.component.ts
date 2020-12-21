import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Person } from './models';
import { ApiService } from './services';
import { sortBy } from './utils';
import { finalize } from 'rxjs/operators';

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
  loading: boolean;
  
  private currentSort: Sort;
  private currentPage: number;
  private currentSearch: string;

  constructor(private apiService: ApiService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadPeople();
  }

  trackByName(_index: number, person: Person): string {
    return person.name;
  }
  
  onSortChange(sort: Sort) {
    this.currentSort = sort;
    this.people = sortBy(this.people, sortCompareFns[sort]);
  }

  onLoadMore() {
    this.loadPeople();
  }

  onSearch(text: string) {
    this.people = [];
    this.currentPage = undefined;
    this.currentSearch = text;
    this.loadPeople();
  }

  private loadPeople(): void {
    const nextPage = this.currentPage ? this.currentPage + 1 : undefined;

    this.loading = true;
    this.apiService.getPeople(nextPage, this.currentSearch).pipe(finalize(() => {
      this.loading = false;
      this.cd.markForCheck();
    })).subscribe(response => {
      const allPeople = [...this.people, ...response.results];

      this.people = this.currentSort ? sortBy(allPeople, sortCompareFns[this.currentSort]) : allPeople;
      this.maxPeopleCount = response.count;
      this.cd.markForCheck();
      this.currentPage = nextPage || 1;
    });
  }
}
