import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseCharacterModel } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCharacters(page: number = 1, search: string = '',): Observable<ResponseCharacterModel> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('search', search.toString());

    return this.http.get<ResponseCharacterModel>(`${this.apiUrl}/api/people/`, { params });
  }
}
