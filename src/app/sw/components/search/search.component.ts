import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { resetSearchCharactersAction, searchCharacterAction } from '../../store/actions/getCharacters.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public searchForm: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _store: Store<any>,
  ) {
    this.searchForm = this._fb.group({
      name: ['', Validators.required],
    });
  }

  onSearch(): void {
    const { value, valid } = this.searchForm;

    if (!valid) return;

    const { name } = value;

    this._store.dispatch(searchCharacterAction({ name }));
  }

  onReset(event): void {
    event.preventDefault();

    this.searchForm.reset();
    this._store.dispatch(resetSearchCharactersAction());
  }
}
