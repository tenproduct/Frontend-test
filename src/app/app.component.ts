import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Star Wars Character Search';
  searchTerm: string = '';

  handleSearch(value: string) {
    this.searchTerm = value;
  }
}
