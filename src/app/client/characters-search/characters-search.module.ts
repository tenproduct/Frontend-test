import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharactersSearchComponent} from './characters-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
  declarations: [CharactersSearchComponent],
  exports: [
    CharactersSearchComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule
    ]
})
export class CharactersSearchModule { }
