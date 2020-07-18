import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../interfaces/character';
import { environment } from '../../../../environments/environment';
import { CharacterApiResponse } from '../interfaces/character-api-response';

@Injectable()
export class StarWarsService {

  constructor(private http: HttpClient) {
  }

  loadCharacters(search?: string): Observable<Character[]> {
    let params: HttpParams = new HttpParams();

    if (search) {
      params = params.append('search', search);
    }

    return this.http.get<CharacterApiResponse>(`${environment.apiUrl}/people`, {params}).pipe(
      map((result: CharacterApiResponse) => result.results)
    );
  }
}
