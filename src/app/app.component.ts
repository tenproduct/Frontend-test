import { Component, OnInit } from '@angular/core';
import { Person } from './core/interfaces/person.model';
import { ApiService } from './core/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Star Wars App!';
  people: Person[] = [];
  count: number = 0;
  loading: boolean = false;
  next: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.loading = true;

    this.apiService.getPeople()
      .subscribe(({ results, count, next }) => {
        this.people = results;
        this.count = count;
        this.next = next;
        this.loading = false;
      });
  }

  setSearchResults(results) {
    this.people = results;
  }

  sortBy(type) {
    this.people.sort((a: Person, b: Person) => {
      const sorting = {
        'asc': a.name > b.name,
        'desc': a.name < b.name,
        'male': b.gender === 'male',
        'female': b.gender === 'female'
      }

      return (sorting[type] ? 1 : -1);
    })
  }

  isShowLoadmore() {
    return this.people.length >= 10 && this.people.length !== this.count;
  }

  loadMore() {
    this.apiService.loadMore(this.next).subscribe(({ next, results }) => {
      this.next = next;
      this.people = this.people.concat(results)
    })
  }
}
