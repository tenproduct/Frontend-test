import { Pipe, PipeTransform } from '@angular/core';

type TrackByFunction = (index: number, item: any) => any;

const trackByFunctionCache: { [propertyName: string]: TrackByFunction } = {};

@Pipe({
    name: 'trackByProperty',
    pure: true
})
export class TrackByPropertyPipe implements PipeTransform {
    public transform(property: string): Function {
        if (!trackByFunctionCache[property]) {
            trackByFunctionCache[property] = (index: number, item: any) => item[property];
        }

        return trackByFunctionCache[property];
    }
}
