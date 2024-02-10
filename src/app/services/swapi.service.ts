import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';
import {map, switchMap, tap} from 'rxjs/operators';
import {IResponse} from '../models/config.model';
import {IPeople} from '../store/state.models';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) { }

  public getPeople(): Observable<Array<IPeople>> {
    return this.configService.getConfig()
      .pipe(
        switchMap(({swapiUrl}) => (
            this.http.get<IResponse<IPeople>>(swapiUrl + '/people')
              .pipe(map((data) => data.results))
          )
        )
      );
  }
}
