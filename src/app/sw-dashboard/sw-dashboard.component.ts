import { SortOption } from './../view-model/sort-option';
import { Character } from './../view-model/character';
import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SwapiService } from '../services/swapi.service';


@Component({
  selector: 'sw-dashboard',
  templateUrl: './sw-dashboard.component.html',
  styleUrls: ['./sw-dashboard.component.scss']
})
export class SwDashboardComponent implements OnInit {

  characters$: Observable<Character[]>;
  showRange: number = 5;
  constructor(private swapiService: SwapiService) { }
  name: string;
  sortOption: string;
  sortOrder: string;
  characters: Character[];

  sortOptions: SortOption[] = [
    {value: 'name', viewValue: 'A-Z', order: 'ascend'},
    {value: 'name', viewValue: 'Z-A', order: 'descend'},
    {value: 'gender', viewValue: 'Female', order: 'ascend'},
    {value: 'gender', viewValue: 'Male', order: 'descend'}
  ];


  ngOnInit() {
    this.characters$ =this.swapiService.getAll(this.showRange);
  }

  searchCharacter() {
    if (this.name !== undefined) return;
    this.characters$ = this.swapiService.getByName(this.name);
  }

  loadMore() {
    this.showRange = 10;
    this.characters$ =this.swapiService.getAll(this.showRange);
  }

  sortCharacters(option) {
    this.sortOption = option.value;
    this.sortOrder = option.order;
  }

  
}
