import { Subject, MonoTypeOperatorFunction } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { environment } from '@environment';

const DESTROY_SUBJECT = '__sw_test_destroy$';

export function untilDestroyed<T>(componentInstance: any): MonoTypeOperatorFunction<T> {
    const originalDestroy = componentInstance.ngOnDestroy;

    if (typeof originalDestroy !== 'function') {
        if (!environment.production) {
            console.error(`${componentInstance.constructor.name} is using untilDestroyed but does not implement ngOnDestroy!`);
        }

        return source$ => source$;
    }

    if (!componentInstance[DESTROY_SUBJECT]) {
        componentInstance[DESTROY_SUBJECT] = new Subject<void>();

        componentInstance.ngOnDestroy = function (): void {
            // tslint:disable-next-line:no-invalid-this
            originalDestroy.apply(this, arguments);
            componentInstance[DESTROY_SUBJECT].next();
            componentInstance[DESTROY_SUBJECT].complete();
        };
    }

    return source$ => source$.pipe(takeUntil<T>(componentInstance[DESTROY_SUBJECT]));
}
