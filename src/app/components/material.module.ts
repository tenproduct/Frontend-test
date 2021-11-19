import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

const modules = [
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatGridListModule,
  MatProgressSpinnerModule,
];

@NgModule({
  imports: [CommonModule, ...modules],
  exports: [...modules],
})
export class MaterialModule {}
