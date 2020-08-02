import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { ReactiveComponentModule } from '@ngrx/component';

import { SharedModule } from '@shared/shared.module';
import { CharacterSortFieldComponent } from './character-sort-field/character-sort-field.component';
import { SortWarningDialogComponent } from './character-sort-field/sort-warning-dialog/sort-warning-dialog.component';
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
    declarations: [CharacterSearchComponent, SearchFieldComponent, CharacterSortFieldComponent, SortWarningDialogComponent],
    imports: [
        RouterModule.forChild(routes),
        ReactiveComponentModule,
        CommonModule,
        SharedModule,
        FormsModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatSelectModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatIconModule
    ]
})
export class CharacterSearchModule { }
