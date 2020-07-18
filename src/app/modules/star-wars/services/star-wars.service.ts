import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../interfaces/character';
import { environment } from '../../../../environments/environment';
import { CharacterApiResponse } from '../interfaces/character-api-response';

@Injectable()
export class StarWarsService {

  constructor(private http: HttpClient) {
  }

  loadCharacters(): Observable<Character[]> {
    return this.http.get<CharacterApiResponse>(`${environment.apiUrl}/people`).pipe(
      map((result: CharacterApiResponse) => result.results)
    );
  }
}
