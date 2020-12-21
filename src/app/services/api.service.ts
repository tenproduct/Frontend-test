import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../models';

const API_URL = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(`${API_URL}/people/`)
  }
}
