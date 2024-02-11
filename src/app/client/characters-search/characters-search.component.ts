import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'sw-characters-search',
  templateUrl: './characters-search.component.html',
  styleUrls: ['./characters-search.component.scss']
})
export class CharactersSearchComponent {
  @Input() searchTerm: string;
  @Output() search: EventEmitter<string>  = new EventEmitter<string>();
  public form: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.form = this.getSearchForm();
  }
  public onSearch(): void {
    this.search.emit(this.form.value.search.trim());
  }
  private getSearchForm(): FormGroup {
    return this.fb.group({
      search: ['']
    });
  }
}
