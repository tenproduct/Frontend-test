import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { ReactiveComponentModule } from '@ngrx/component';

import { SharedModule } from '@shared/shared.module';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { SearchFieldComponent } from './search-field/search-field.component';

const routes: Routes = [
    {
        path: '',
        component: CharacterSearchComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [CharacterSearchComponent, SearchFieldComponent],
    imports: [
        RouterModule.forChild(routes),
        ReactiveComponentModule,
        CommonModule,
        SharedModule,
        FormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule
    ]
})
export class CharacterSearchModule { }
