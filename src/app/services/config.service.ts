import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConfigUrl } from '../models/config.model';
import { Observable } from 'rxjs';
import {URL_CONFIG_TOKEN} from '../injections_token';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private readonly configUrl;

  constructor(
    private http: HttpClient,
    @Inject(URL_CONFIG_TOKEN) private injectedUrl: string,
  ) {
    this.configUrl = this.injectedUrl;
  }

  getConfig(): Observable<IConfigUrl> {
    return this.http.get<IConfigUrl>(this.configUrl);
  }
}
