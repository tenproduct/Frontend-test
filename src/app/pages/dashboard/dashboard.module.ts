import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { MaterialModule } from "src/app/components/material.module";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/components/shared/shared.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [MaterialModule, CommonModule, SharedModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
