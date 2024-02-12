import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetCharactersResponseInterface } from '../types/getCharactersResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class SwService {
  constructor(private readonly http: HttpClient) { }

  public getData(): Observable<GetCharactersResponseInterface> {
    return this._getApiData(`${environment.apiUrl}/people/`);
  }

  public getNextData(url: string): Observable<GetCharactersResponseInterface> {
    return this._getApiData(url);
  }

  private _getApiData(url: string): Observable<GetCharactersResponseInterface> {
    return this.http.get<GetCharactersResponseInterface>(url);
  }

  public search(name: string): Observable<GetCharactersResponseInterface> {
    return this._getApiData(`${environment.apiUrl}/people?search=${name}`);
  }
}
