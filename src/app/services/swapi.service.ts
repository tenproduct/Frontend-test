import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

import { Observable } from 'rxjs';

import { SwapiResponse } from '../models';
import { environment } from '../../environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class SwapiService {
    constructor(private http: HttpClient) {}

    getPeople(page: number = 1, search: string = ''): Observable<SwapiResponse> {
        const params: Params = {
            format: 'json',
            page,
            search
        };

        return this.http.get<SwapiResponse>(`${environment.swapiUrl}/people/`, { params });
    }
}
