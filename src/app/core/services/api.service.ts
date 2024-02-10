import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private readonly httpClient: HttpClient) {}
  public get<T>(url: string, httpOptions = {}) {
    return this.httpClient.get<T>(environment.swapiDevUrl + url, httpOptions);
  }
}
