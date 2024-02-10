import { Injectable } from '@angular/core';
import {ApiService} from "../../core/services/api.service";
import {Observable} from "rxjs";
import {SWCharacterResponse} from "../../core/models/character-response.model";
import {CharacterRequest} from "../../core/models/character-request.model";

@Injectable({
  providedIn: 'root'
})
export class SwCharactersService {

  constructor(private readonly apiService: ApiService) { }
  public getCharacters(page: number = 1, search: string = ''): Observable<SWCharacterResponse> {
    const params: CharacterRequest = {
      format: 'json',
      page,
      search
    };

    return this.apiService.get<SWCharacterResponse>('people/', { params });
  }
}
