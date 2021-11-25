import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Person } from 'src/app/core/interfaces/person.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() onFindResult = new EventEmitter<Person[]>();
  @Output() onClearResult = new EventEmitter<string>();

  search = new FormControl('', [Validators.required]);

  constructor(private apiService: ApiService) { }

  apiSearch() {
    if (this.search.errors) return;

    this.apiService.searchCharacter(this.search.value).then(result => {
      this.onFindResult.emit(result);
    })
  }

  getErrorMessage() {
    if (this.search.hasError('required')) return 'You must enter a name';
  }

  clearResults() {
    this.search.reset();
    this.search.setErrors(null);
    this.onClearResult.emit()
  }
}
