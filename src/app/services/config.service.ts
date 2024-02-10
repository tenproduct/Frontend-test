import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConfigUrl } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configUrl = 'assets/config.json';

  constructor(private http: HttpClient) {
  }

  getConfig() {
    return this.http.get<IConfigUrl>(this.configUrl);
  }
}
