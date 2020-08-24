import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

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
      searchTerm: ['', [Validators.minLength(3), Validators.required]]
    });
  }

  submitSearch(searchTerm: string): void {
    if (this.searchForm.valid) {
      this.searchCharacter.emit(searchTerm);
    } else {
      this.searchForm.markAllAsTouched();
      this.searchForm.markAsDirty();
      this.searchForm.updateValueAndValidity();
    }
  }

}
