import { Component, OnDestroy, OnInit } from "@angular/core";
import { CharactersState } from "src/app/store/characters.reducer";
import { Store } from "@ngrx/store";
import {
  getMoreCharacters,
  searchCharacters,
  setCharactersLoading,
  SortBy,
  sortCharacters,
} from "src/app/store/characters.actions";
import { CharactersFacade } from "src/app/store/characters.facade";
import { Subscription } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit, OnDestroy {
  nextPage: string | null;
  loadingSuccess: boolean;

  totalCharacters$ = this.facade.totalCharacters$;
  loadedCharacters$ = this.facade.loadedCharacters$;
  characters$ = this.facade.characters$;

  nextPageSubscription: Subscription;
  loadingSuccessSubscription: Subscription;

  SortByOptions: SortBy[] = ["A-Z", "Z-A", "Male", "Female"];

  constructor(
    private store: Store<CharactersState>,
    private facade: CharactersFacade
  ) {}

  ngOnInit(): void {
    this.loadCharacters();
    this.initNextPage();
    this.initLoaging();
  }

  ngOnDestroy(): void {
    this.nextPageSubscription.unsubscribe();
    this.loadingSuccessSubscription.unsubscribe();
  }

  loadCharacters(): void {
    this.facade.getCharacters();
  }

  initNextPage(): void {
    this.nextPageSubscription = this.facade.nextPage$.subscribe(
      (nextPage) => (this.nextPage = nextPage)
    );
  }

  initLoaging(): void {
    this.loadingSuccessSubscription =
      this.facade.isChaacterListLoadSuccess$.subscribe(
        (loading) => (this.loadingSuccess = loading)
      );
  }

  isOdd(index: number): boolean {
    return !(index % 2);
  }

  loadMoreCharacters(search?: string): void {
    if (this.nextPage) {
      this.store.dispatch(setCharactersLoading());
      if (search) {
        this.store.dispatch(
          searchCharacters({ search: search || null, url: this.nextPage })
        );
        return;
      }
      this.store.dispatch(
        getMoreCharacters({ payload: { url: this.nextPage } })
      );
    }
  }

  searchCharacters(search: string): void {
    this.store.dispatch(searchCharacters({ search: search || null }));
  }

  sortCharacters(sort: SortBy): void {
    this.store.dispatch(sortCharacters({ sort }));
  }
}
