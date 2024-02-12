import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SWCharacterResponse } from '../models/character-response.model';
import { CharacterRequest } from '../models/character-request.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SwCharactersService {
  constructor(private readonly httpClient: HttpClient) {}
  public getCharacters(
    page: number = 1,
    search: string = '',
  ): Observable<SWCharacterResponse> {
    const params = new HttpParams()
      .set('format', 'json')
      .set('page', page.toString())
      .set('search', search);

    return this.httpClient.get<SWCharacterResponse>('people/', { params });
  }
}
