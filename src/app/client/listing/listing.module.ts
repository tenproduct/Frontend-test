import {NgModule} from "@angular/core";
import {ListingComponent} from "./listing.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [ListingComponent],
    exports: [
        ListingComponent
    ],
    imports: [
      CommonModule
    ]
})

export class ListingModule {}
