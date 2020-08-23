import { Component, OnInit } from '@angular/core';
import { SwapiService } from './services/swapi.service';

@Component({
  selector: 'app-swapi-search',
  templateUrl: './swapi-search.component.html',
  styleUrls: ['./swapi-search.component.scss']
})
export class SwapiSearchComponent implements OnInit {

  constructor(
    private swapiService: SwapiService
  ) { }

  ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    this.swapiService.fetchCharacters()
      .subscribe(response => {
        console.log(response);
      });
  }
}
