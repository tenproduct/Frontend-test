import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../models';
import { pickBy, identity } from "lodash-es";

const API_URL = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPeople(page?: number, search?: string): Observable<PeopleResponse> {
    const params: Params = pickBy({ page, search }, identity);

    return this.http.get<PeopleResponse>(`${API_URL}/people/`, { params })
  }
}
