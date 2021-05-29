import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Character } from '../view-model/character';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private apiServer = "http://localhost:3001";
  private apiPath = this.apiServer+'/people';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getByName(name: string): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.apiPath + '?name_like=' + name)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(range?: number, sortBy?: string): Observable<Character[]> {
    const url = (sortBy === undefined) ? this.apiPath+'?_page=1&_limit='+range : this.apiPath + '?_page=1&_limit='+range + '&_sort=name&_order=asc';
    return this.httpClient.get<Character[]>(url)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}