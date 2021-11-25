import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResultData } from '../interfaces/result-data.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private apiUrl = environment.apiHost;

    constructor(private http: HttpClient) { }

    public getPeople(): Observable<ResultData> {
        return this.http.get<ResultData>(`${this.apiUrl}/api/people/`);
    }

    public searchCharacter(name: string): Observable<ResultData> {
        return this.http.get<ResultData>(`${this.apiUrl}/api/people/?search=${name}`);
    }

    public loadMore(url): Observable<ResultData> {
        return this.http.get<ResultData>(url);
    }
}
