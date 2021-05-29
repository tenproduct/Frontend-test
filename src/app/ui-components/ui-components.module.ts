import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwInputComponent } from './sw-input/sw-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SwSelectComponent } from './sw-select/sw-select.component';
import { SwButtonComponent } from './sw-button/sw-button.component';



@NgModule({
  declarations: [SwSelectComponent, SwInputComponent, SwButtonComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    SwSelectComponent,
    SwInputComponent,
    MatFormFieldModule,
    MatInputModule,
    SwButtonComponent
  ]
})
export class UiComponentsModule { }
