import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private apiUrl = environment.apiHost;

    constructor(private http: HttpClient) {}

    public getPeople(): Promise<any> {
        return this.http.get(`${this.apiUrl}/api/people/`)
            .toPromise()
            .catch(this.handleError);
    }

    public searchCharacter(name: string): Promise<any> {
        return this.http.get(`${this.apiUrl}/api/people/?search=${name}`)
            .toPromise()
            .catch(this.handleError);
    }

    public loadMore(url): Promise<any> {
        return this.http.get(url)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}