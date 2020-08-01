import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { SharedState, startLoadingAction, stopLoadingAction } from './store';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private store: Store<SharedState>) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.store.dispatch(startLoadingAction());

        return next.handle(request).pipe(finalize(() => {
            this.store.dispatch(stopLoadingAction());
        }));
    }
}
