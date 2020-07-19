import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CharacterApiResponse } from '../interfaces/character-api-response';

@Injectable()
export class StarWarsService {

  constructor(private http: HttpClient) {
  }

  loadCharacters(search: string, page: number): Observable<CharacterApiResponse> {
    let params: HttpParams = new HttpParams();

    if (search) {
      params = params.append('search', search);
    }

    if (page > 1) {
      params = params.append('page', page.toString());
    }

    return this.http.get<CharacterApiResponse>(`${environment.apiUrl}/people`, {params});
  }
}
