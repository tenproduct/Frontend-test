import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ConfigService} from './config.service';
import {map, switchMap, tap} from 'rxjs/operators';
import {IResponse} from '../models/config.model';
import {IPeople} from '../store/state.models';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) { }

  public getData(): Observable<IResponse<IPeople>> {
    return this.configService.getConfig()
      .pipe(
        switchMap(({swapiUrl}) => (
            this.http.get<IResponse<IPeople>>(`${swapiUrl}/people`)
          )
        )
      );
  }

  public searchPeopleByName(searchParam: string): Observable<IResponse<IPeople>> {
    return this.configService.getConfig()
      .pipe(
        switchMap(({swapiUrl}) => (
          this.http.get<IResponse<IPeople>>(`${swapiUrl}/people`, {
            params: new HttpParams().set('search', searchParam)
          })
        ))
      );
  }
}
