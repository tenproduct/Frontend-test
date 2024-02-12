import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { GetCharactersEffect } from './store/effects/getCharacters.effect';

// material modules
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// components
import { SwComponent } from '@sw-components/sw/sw.component';
import { ListComponent } from '@sw-components/list/list.component';
import { FilterComponent } from '@sw-components/filter/filter.component';
import { SearchComponent } from '@sw-components/search/search.component';
import { ListItemComponent } from '@sw-components/list-item/list-item.component';

import { SwSortByPipe } from './pipes/sw-sort-by.pipe';

const routes: Routes = [
  {
    path: '',
    component: SwComponent
  }
]

@NgModule({
  declarations: [
    SwSortByPipe,
    SwComponent,
    ListComponent,
    SearchComponent,
    FilterComponent,
    ListItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    LayoutModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    EffectsModule.forFeature([GetCharactersEffect]),
    StoreModule.forFeature('characters', reducers),
  ]
})
export class SwModule { }
