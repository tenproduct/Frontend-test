import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'character',
    loadChildren: () => import('./modules/character/character.module').then(m => m.CharacterModule)
  },
  {
    path: '**',
    redirectTo: '/character',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
