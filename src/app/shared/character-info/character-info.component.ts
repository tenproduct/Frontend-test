import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Observable, forkJoin } from 'rxjs';
import { defaultIfEmpty, shareReplay } from 'rxjs/operators';

import { Resource, Character, Vehicle, Movie, Starship, Species } from '@shared/models';
import { DaoService } from '@shared/services';

type ResourceType = 'films' | 'vehicles' | 'species' | 'starships';

export interface CharacterInfoComponentData {
    character: Character;
    odd: boolean;
}

@Component({
    selector: 'app-character-info',
    templateUrl: './character-info.component.html',
    styleUrls: ['./character-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterInfoComponent {
    public starships$: Observable<Starship[]>;
    public vehicles$: Observable<Vehicle[]>;
    public species$: Observable<Species[]>;
    public movies$: Observable<Movie[]>;

    constructor(@Inject(MAT_DIALOG_DATA) public data: CharacterInfoComponentData, private dao: DaoService) {
        this.starships$ = this.getAssociatedResources('starships');
        this.vehicles$ = this.getAssociatedResources('vehicles');
        this.species$ = this.getAssociatedResources('species');
        this.movies$ = this.getAssociatedResources('films');
    }

    private getAssociatedResources<T extends Resource>(resourceType: ResourceType): Observable<T[]> {
        const resourceUrls = this.data.character[resourceType] || [];
        const requests = resourceUrls.map(resourceUrl => this.dao.getResourceByUrl<T>(resourceUrl));

        return forkJoin(requests).pipe(
            defaultIfEmpty([]),
            shareReplay()
        );
    }
}
