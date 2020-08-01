import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@environment';
import {  GetCharactersResponse } from '../models';

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
}
