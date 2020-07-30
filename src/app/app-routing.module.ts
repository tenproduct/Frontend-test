import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: '/character-search',
                pathMatch: 'full'
            },
            {
                path: 'character-search',
                loadChildren: () => import('./character-search/character-search.module').then(m => m.CharacterSearchModule),
            },
            {
                path: '**',
                redirectTo: '/character-search'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
