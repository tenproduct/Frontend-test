import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-swapi-search-form',
  templateUrl: './swapi-search-form.component.html',
  styleUrls: ['./swapi-search-form.component.scss']
})
export class SwapiSearchFormComponent implements OnInit, OnDestroy {

  private readonly destroy$ = new Subject<void>();

  searchForm: FormGroup;

  @Output() searchCharacter: EventEmitter<string> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForms();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private createForms(): void {
    this.searchForm = this.formBuilder.group({
      searchTerm: ['', Validators.required]
    });
  }

  submitSearch(): void {
    if (this.searchForm.valid) {
      this.searchCharacter.emit(this.searchForm.value.searchTerm);
    } else {
      this.searchForm.markAllAsTouched();
      this.searchForm.markAsDirty();
      this.searchForm.updateValueAndValidity();
    }
  }

}
