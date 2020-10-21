import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsApiService {

  next: string = '';

  constructor(private http: HttpClient) { }

  getCharacters(searchString: string = ''): Observable<Object> {
    const starwarsApiUrl: string = `https://swapi.dev/api/people/?search=${searchString}`;    
    return this.http.get(starwarsApiUrl);
  }

  loadMore(searchString: string = ''): Observable<Object> {
    const starwarsApiUrl: string = this.next ? this.next : `https://swapi.dev/api/people/?search=${searchString}`;    
    return this.http.get(starwarsApiUrl);
  }
  setNext(next: string) {
    this.next = next;
  }

  hasNext(): boolean {
    return Boolean(this.next);
  }
}
