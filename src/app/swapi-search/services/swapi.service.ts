import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PplResponse } from '../models/swapi-ppl-response.model';
import { IPplResponse } from '../interfaces/swapi-ppl-response.interface';

@Injectable()
export class SwapiService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly serviceBaseUrl: string = `${environment.apiUrl}/people/`;

  fetchCharacters(pagingUrl?: string): Observable<PplResponse>  {
    const fetchUrl = pagingUrl ? pagingUrl : `${this.serviceBaseUrl}`;

    return this.http.get<PplResponse>(`${fetchUrl}`)
    .pipe(
      take(1),
      map((iResult: IPplResponse) => new PplResponse(iResult))
    );
  }
}
