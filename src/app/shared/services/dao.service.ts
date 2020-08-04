import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, merge, Subject } from 'rxjs';
import { tap, scan, takeWhile, last } from 'rxjs/operators';

import { environment } from '@environment';
import { GetCharactersResponse, PagedResponse } from '../models';

@Injectable({
    providedIn: 'root'
})
export class DaoService {
    constructor(private http: HttpClient) { }

    public getCharacters(searchTerm?: string): Observable<GetCharactersResponse> {
        let params = new HttpParams();

        if (searchTerm) {
            params = params.append('search', searchTerm);
        }

        return this.getResourceByUrl(`${environment.apiUrl}people`, params);
    }

    public getResourceByUrl<T>(url: string, params?: HttpParams): Observable<T> {
        return this.http.get<T>(url, { params });
    }

    /*
     * Returns all resources starting from this url via calling the responses' next url until its present
     */
    public getAllResourcesByUrl<T extends PagedResponse>(url: string): Observable<T> {
        const nextPageSubject$ = new Subject<T>();

        return merge(
            this.getResourceByUrl<T>(url),
            nextPageSubject$.asObservable()
        ).pipe(
            takeWhile(response => !!response.next, true),
            tap(getCharactersResponse => {
                if (getCharactersResponse.next) {
                    this.getResourceByUrl<T>(getCharactersResponse.next).subscribe(response => {
                        nextPageSubject$.next(response);
                    });
                }
            }),
            scan((acc, curr) => ({ ...curr, results: [...acc.results, ...curr.results] })),
            last()
        );
    }
}
