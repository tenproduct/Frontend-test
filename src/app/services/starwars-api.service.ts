import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsApiService {

  next: string = '';

  constructor(private http: HttpClient) { }

  getCharacters(searchString: string = ''): Observable<any> {
    const swUrl: string = `https://swapi.dev/api/people/?search=${searchString}`;    
    return this.http.get(swUrl);
  }

  loadMore(searchString: string = ''): Observable<any> {
    const swUrl: string = this.next.length > 0 ? this.next : `https://swapi.dev/api/people/?search=${searchString}`;    
    return this.http.get(swUrl);
  }
  setNext(next: string) {
    this.next = next;
  }
}
